let { Virtual, page } = window.interfaces;

import * as staticRoutes from "../root/routeStatic.js";
import PeerConnection from "../Peer/PeerConnection.js";

class Contacts extends Virtual.Component {
    constructor() {
        super(...arguments);
        this.peer = new PeerConnection();
    }
    connect(id, contactId) {
        this.peer.connect(contactId);
        this.props.onConnection(contactId);
        page(staticRoutes.ROUTE_CONNECT + "/" + id + "/" + contactId);        
    }
    shouldComponentUpdate(newProps) {
        return (newProps.searchField != this.props.searchField) || (newProps.contactIds != this.props.contactIds);
    }
    render() {
        let { contactIds, searchField, id, contacts, onChangeConnName } = this.props;

        //Contact List
        let filteredContactList = contactIds
            .filter((contactId) => (contactId.indexOf(searchField) != -1))
            .map((contactId) => {
                let contact = contacts[contactId];
                return <li key={contactId}><a href="javascript:void(0)" onClick={() => {this.connect(id,contactId)}}>{contact.name}</a></li>
            });

        return <div>
                <input placeholder="Search" onChange={(e)=>{onChangeConnName(e.target.value)}} value={searchField} />
                <button onClick={()=>this.connect(id,searchField)}>Add</button>
                <ul>{filteredContactList}</ul>                
            </div>;
    }
}
export default Contacts;
