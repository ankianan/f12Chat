let { Virtual } = window.interfaces;

import staticRoutes from "../root/routeStatic.js";
import Register from "./RegisterComponent.js";
import Contact from "../Contact/ContactComponent.js";
import Connect from "./ConnectComponent.js";


class Peer extends Virtual.Component {
    render() {
        let page;
        let { route, account, contacts, user, actions } = this.props;
        account = account .1;

        if (route.indexOf(staticRoutes.ROUTE_REGISTER) != -1) {
            page = <Register idField={account.idField} onChangeName={onChangeName} onRegister={onRegister} onRecieveMessage={onRecieveMessage} />;
        }
        if (route.indexOf(staticRoutes.ROUTE_CONTACTS) != -1) {
            page = <Contacts contactIds={account.contacts} searchField={account.contactSearchField} id={account.detail} contacts={contacts} onChangeConnName={actions.onChangeConnName}></Contacts>
        }
        if (route.indexOf(staticRoutes.ROUTE_CONNECT) != -1) {
            let contact = contacts[account.connContactId];
            page = <Connect contactId={account.connContactId} logs={contact.logs} messageField={contact.messageField} onChangeMessage={actions.onChangeMessage} onSendMessage={actions.onSendMessage} ></Connect>
        }
        return page;
    }
}
export default Peer;
