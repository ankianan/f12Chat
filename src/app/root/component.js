let { Virtual, Redux, page } = window.interfaces;
let { bindActionCreators } = Redux;

import { replicate } from "../storage.js";
import combinedReducer from "./reducer.js";
import routeActions from "./routeActions.js";
import routesConfig from "./routesConfig.js";
import peerActions from "./peerActions.js";

import Peer from "../Peer/PeerComponent.js";

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

        let state = {
            "route": "/",
            "account": {
                "1": {
                    "id": 1,
                    "idField": "",
                    "detail": "",
                    "contacts": [],
                    "contactSearchField": "",
                    "connContactId": ""
                }
            },
            "user": {},
            "contacts": {}
        };

        return this.props.lastState || state;
    }
    get reducer() {
        return combinedReducer;
    }
    render() {
        return <div>
                <Peer {...this.state} actions={this.peerActions} />
              </div>
    }
}

export default Root;
