let { Virtual, page } = window.interfaces;
import * as staticRoutes from "../root/routeStatic.js";
import PeerConnection from "./PeerConnection.js";

class Register extends Virtual.Component {
    constructor() {
        super(...arguments);
        this.peer = new PeerConnection();
        this.register = this.register.bind(this);
    }
    shouldComponentUpdate(newProps) {
        return newProps.idField != this.props.idField;
    }
    register() {
        let { idField, onRegister, onRecieveMessage } = this.props;
        this.peer.register(idField, onRecieveMessage);
        onRegister(idField);
        page(staticRoutes.ROUTE_CONTACTS + "/" + idField);
        
    }
    render() {
        let { idField, onChangeName } = this.props;

        return <div>
                <input type="tel" placeholder="Mobile number" onChange={(e)=>{onChangeName(e.target.value)}} value={idField} />
                <button onClick={this.register}>Register</button>
            </div>;
    }
}

export default Register;
