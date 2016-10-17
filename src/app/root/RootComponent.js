let { Virtual, Redux, page } = window.interfaces;
let { bindActionCreators, compose } = Redux;


import PeerConnection from "../Peer/PeerConnection.js";
import reduxThunk from "redux-thunk";
import logger from "../../jass/redux/middleware/logger.js";
import { autoRehydrate } from 'redux-persist';

import * as storage from "./storage.js";

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
        let enhancer = compose(storage.storeEnhancer, Redux.applyMiddleware(logger, reduxThunk));
        this.store = Redux.createStore(combinedReducer, undefined, enhancer);

/*        //subscribe store
        this.store.subscribe(() => {
            this.setState(this.store.getState());
        });
*/
        //Bind Actions
        this.peerActions = bindActionCreators(peerActions, this.store.dispatch);


        //Configuring Routes
        let boundedRoutesAction = bindActionCreators(routeActions, this.store.dispatch)
        routesConfig(boundedRoutesAction);

        //Storage Configuration
        storage.config({
            store: this.store,
            rehydrationCallback: () => {
                console.log('rehydration complete');
                //this.setState(this.store.getState());                
                page.redirect(document.location.pathname);
                this.initPeer();

            }
        });
    }
    initPeer() {
        let { onRecieveMessage } = this.peerActions;
        let { detail, connContactId } = this.state.account .1;
        if (detail) {
            if (connContactId) {
                return new PeerConnection({ id: detail, connId: connContactId, onRecieveMessage });
            }
            return new PeerConnection({ id: detail, onRecieveMessage });
        }
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
                page = <Contacts contactIds={account.contacts} searchField={account.contactSearchField} id={account.detail} contacts={contacts} onChangeConnName={actions.onChangeConnName} onConnection={actions.onConnection} ></Contacts>
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
