import { REHYDRATE } from 'redux-persist/lib/constants.js';
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

let reducer = (state = {
    "1": {
        "id": 1,
        "idField": "",
        "detail": "",
        "contacts": [],
        "contactSearchField": "",
        "connContactId": ""
    }
}, action) => {
    switch (action.type) {
        case REHYDRATE:
            var incoming = action.payload.account;
            if (incoming) return {...state, ...incoming }
            return state;
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
            let contacts = state["1"].contacts
                .filter((contactId, index) => (contactId != action.id));
            contacts.unshift(action.id)
            return {...state,
                "1": {...state["1"],
                    "connContactId": action.id,
                    contacts
                }
            };
        default:
            return state;
    }
}
export default reducer;
