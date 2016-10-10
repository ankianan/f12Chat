let instance = null;

class PeerConnection {
    constructor() {
        if (!instance) {
            instance = this;
            this.peer = null;
            this.connName = null;
            this.conn = null;
            this.connList = [];
        }
        return instance;
    }
    register(id, onRecieveMessage) {

        this.peer = new window.Peer(id, {
            key: '45x1mf8qyx7833di'
        });
        this.peer.on('connection', (conn) => {
            conn.on('data', (data) => {
                onRecieveMessage(this.connName, data);
            });
        });
    }
    connect(connId) {
        this.connName = connId;
        let filterdConnList = this.connList.filter(({ id }) => {
            if (id == this.connName) {
                return true;
            }
            return false;
        });
        if (filterdConnList.length) {
            this.conn = filterdConnList.pop().conn;
        } else {
            this.conn = this.peer.connect(this.connName);
            this.connList.push({ id: connId, conn: this.conn });
        }

    }
    send(message) {
        this.conn.send(message);        
        return "....";
    }
}

export default PeerConnection;