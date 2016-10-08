let { Virtual } = window.interfaces;
import staticRoutes from "../root/routeStatic.js";
import PeerConnection from "./PeerConnection.js";

class Register extends Virtual.Component {
    constructor() {
        super(...arguments);
        this.peer = new PeerConnection();
    }
    shouldComponentUpdate(newProps) {
        return newProps.idField != this.props.idField;
    }
    register() {
        let { idField, onRegister, onRecieveMessage } = this.props;
        this.peer.register(idField, onRecieveMessage);
        page(staticRoutes.ROUTE_REGISTER)
            .then(onRegister)

    }
    render() {
        let { idField, onChangeName } = this.props;

        return <div>
                <input type="tel" placeholder="Mobile number" onChange={(e)=>{onChangeName(e.target.value)}} value={idField} />
                <button onClick={this::this.register}>Register</button>
            </div>;
    }
}

export default Register;
