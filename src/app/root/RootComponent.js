let { Virtual, Redux, page } = window.interfaces;
let { bindActionCreators } = Redux;

import { replicate } from "../storage.js";
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
        routesConfig(bindActionCreators(routeActions, this.store.dispatch));

        this.peerActions = bindActionCreators(peerActions, this.store.dispatch);

        this.store.subscribe(() => {
            replicate(this.store.getState());
        });
        page.redirect(document.location.pathname);
    }
    get initialState() {
        return this.props.lastState || {};
    }
    get reducer() {
        return combinedReducer;
    }
    render() {
        let page = null;
        if (Object.keys(this.state).length) {
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
