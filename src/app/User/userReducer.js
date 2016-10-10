import * as constants from "../root/peerActionTypes.js";

/*{
    "8527619715": {
        "id": "8527619715",
        "name": "Ankit Anand",
        "connId": null
    },
    "9911344354": {
        "id": "9911344354",
        "name": "Papa"
    },
    "9810959233": {
        "id": "9810959233",
        "name": "Mumi"
    }
}
*/
let reducer = (state = {}, action) => {
    switch (action.type) {
        case constants.PEER_REGISTER:
        case constants.PEER_CONNECTED:
            if (!state[action.id]) {
                return {...state,
                    [action.id]: {
                        id: action.id,
                        name: action.name
                    }
                };
            } else {
                return state;
            }
        default:
            return state;
    }
}
export default reducer;
