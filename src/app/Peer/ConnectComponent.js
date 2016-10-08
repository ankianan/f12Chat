let { Virtual } = window.interfaces;
import LogList from "../Log/LogListComponent.js";

class Connect extends Virtual.Component {
    constructor() {
        super(...arguments);
        this.peer = new PeerConnection();
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
            <textarea placeholder="Message" onChange={(e)=>{onChangeMessage(e.target.value)}} value={messageField}></textarea>
            <button onClick={this::this.send}>Send</button>
        </div>;
    }
}

export default Connect;