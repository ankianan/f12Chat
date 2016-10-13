let { Virtual, Redux, page, localforage } = window.interfaces;
let { bindActionCreators, compose } = Redux;

import config from "../config.js";

//import 'setimmediate';
import reduxThunk from "redux-thunk";
import logger from "../../jass/redux/middleware/logger.js";
import { createTransform, persistStore, autoRehydrate } from 'redux-persist';

//import { replicate } from "../storage.js";
import combinedReducer from "./reducer.js";
import routeActions from "./routeActions.js";
import routesConfig from "./routesConfig.js";
import peerActions from "./peerActions.js";

import * as staticRoutes from "../root/routeStatic.js";
import Register from "../Peer/RegisterComponent.js";
import Contacts from "../Contact/ContactComponent.js";
import Connect from "../Peer/ConnectComponent.js";

class Root extends Virtual.Component {
    constructor() {
        super(...arguments);
        //Creating flux store for the state        

        let enhancer = compose(autoRehydrate(), Redux.applyMiddleware(logger, reduxThunk));
        this.store = Redux.createStore(combinedReducer, undefined, enhancer);

        routesConfig(bindActionCreators(routeActions, this.store.dispatch));
        this.peerActions = bindActionCreators(peerActions, this.store.dispatch);
        localforage.config(config.storage);

        let myTransform = createTransform(
            (inboundState, key) => {
                console.log(inboundState);
                return inboundState;
            },
            (outboundState, key) => outboundState);

        persistStore(this.store, { storage: localforage, serialize: (data) => data, deserialize: (data) => data, transforms: [myTransform] }, () => {
            console.log('rehydration complete');
            this.setState(this.store.getState());
            page.redirect(document.location.pathname);
        });

        this.unsubscribe = this.store.subscribe(() => {
            this.setState(this.store.getState());
        });


        /*this.store.subscribe(() => {
            replicate(this.store.getState());
        });*/

    }
    render() {
        let page = null;
        if (this.state) {
            let { route, account, contacts, user } = this.state;
            let actions = this.peerActions;
            account = account["1"];

            if (route.indexOf(staticRoutes.ROUTE_REGISTER) != -1) {
                page = <Register idField={account.idField} onChangeName={actions.onChangeName} onRegister={actions.onRegister} onRecieveMessage={actions.onRecieveMessage} />;
            }
            if (route.indexOf(staticRoutes.ROUTE_CONTACTS) != -1) {
                page = <Contacts contactIds={account.contacts} searchField={account.contactSearchField} id={account.detail} contacts={contacts} onChangeConnName={actions.onChangeConnName} onConnection={actions.onConnection}></Contacts>
            }
            if (route.indexOf(staticRoutes.ROUTE_CONNECT) != -1) {
                let contact = contacts[account.connContactId];
                page = <Connect contactId={account.connContactId} logs={contact.logs} messageField={contact.messageField} onChangeMessage={actions.onChangeMessage} onSendMessage={actions.onSendMessage} ></Connect>
            }
        }
        return page;
    }
}

export default Root;
