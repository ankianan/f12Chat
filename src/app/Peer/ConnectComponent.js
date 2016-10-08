let { Virtual } = window.interfaces;
import LogList from "../Log/LogListComponent.js";
import PeerConnection from "./PeerConnection.js";

class Connect extends Virtual.Component {
    constructor() {
        super(...arguments);
        this.peer = new PeerConnection();
        this.send = this.send.bind(this);
    }
    send() {
        let { contactId, messageField, onSendMessage } = this.props;
        this.peer.send(messageField);
        onSendMessage(contactId, messageField);
    }
    render() {
        let { contactId, logs, messageField, onChangeMessage } = this.props;
        return <div>           
            <LogList logs={logs} connId={contactId} />
            <textarea placeholder="Message" onChange={(e)=>{onChangeMessage(contactId,e.target.value)}} value={messageField}></textarea>
            <button onClick={this.send}>Send</button>
        </div>;
    }
}

export default Connect;
