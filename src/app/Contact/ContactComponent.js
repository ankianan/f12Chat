import { Virtual, page } = window.interfaces;

import staticRoutes from "../root/routeStatic.js";

class Contacts extends Virtual.Component {
    constructor() {
        super(...arguments);
        this.peer = new PeerConnection();
    }
    connect(route, contactId) {
        this.peer.connect(contactId);
        page(route).then(() => { this.props.onConnection(contactId); });
    }
    shouldComponentUpdate(newProps) {
        return newProps.contactSearchField != this.props.contactSearchField;
    }
    render() {
        let { contactIds, contactSearchField, id contacts, onChangeConnName } = this.props;

        //Contact List
        let filteredContactList = contactIds
            .filter((contactId) => (contactId.indexOf(contactSearchField) != -1))
            .map((contactId) => {
                let route = staticRoutes.ROUTE_CONNECT + "/" + id + "/" + contactId;
                let contact = contacts[contactId];
                return <li key={contactId}><a href="javascript:void(0)" onClick={() => {this.connect(route,contactId)}}>contact.name</a></li>
            });

        return <div>
                <input placeholder="Search" onChange={(e)=>{onChangeConnName(e.target.value)}} value={contactSearchField} />
                <button disabled>Add</button>
                <ul>{filteredContactList}</ul>                
            </div>;
    }
}
