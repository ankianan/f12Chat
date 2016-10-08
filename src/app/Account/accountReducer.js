import * as constants from "../root/peerActionTypes.js";

/*{  
 "1":{  
    "id":1,
    "detail":"8527619715",
    "contacts":[  
       "9911344354",
       "9810959233"
    ]
 }
}*/

let reducer = (state, action) => {
    switch (action.type) {
        case constants.PEER_REGISTER:
            return {...state,
                "1": {...state["1"],
                    "detail": action.id
                }
            };
        case constants.PEER_CHANGE_NAME:
            return {...state,
                "1": {...state["1"],
                    "idField": action.name
                }
            };
        case constants.PEER_CHANGE_CONN_NAME:
            return {...state,
                "1": {...state["1"],
                    "contactSearchField": action.name
                }
            };
        case constants.PEER_CONNECTED:
            return {...state,
                "1": {...state["1"],
                    "connContactId" : action.connId,
                    "contacts": state["1"].contacts
                        .filter((contactId, index) => (contactId != action.connId))
                        .unshift(action.connId)
                }
            };
        default:
            return state;
    }
}
