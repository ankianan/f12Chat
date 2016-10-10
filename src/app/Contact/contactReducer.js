import * as constants from "../root/peerActionTypes.js";

/*{
    "9911344354": {
        "messageField": "",
        "detail": "9911344354",
        "logs": [{
            "message": "hi",
            "type": "recieve"
        }, {
            "message": "hello",
            "type": "send"
        }]
    },
    "9810959233": {
        "messageField": "",
        "detail": "9810959233",
        "logs": [{
            "message": "hi",
            "type": "recieve"
        }, {
            "message": "hello",
            "type": "send"
        }]
    }
}*/

let reducer = (state = {}, action) => {
    switch (action.type) {
        case constants.PEER_CONNECTED:
            if (!state[action.id]) {
                return {...state,
                    [action.id]: {...state[action.id],
                        "messageField": "",
                        "detail": [action.id],
                        "logs": []
                    }
                };
            }
            return state;
        case constants.PEER_CHANGE_MESSAGE:
            return {...state,
                [action.id]: {...state[action.id], "messageField": action.message }
            };
        case constants.PEER_RECIEVE_MESSAGE:
        case constants.PEER_SEND_MESSAGE:
            return {...state,
                [action.id]: {...state[action.id],
                    "logs": state[action.id].logs.concat({
                        message: action.message,
                        method: action.method,
                        time: action.time
                    })
                }
            };

        default:
            return state;
    }
}
export default reducer;
