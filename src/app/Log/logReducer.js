import * as constants from "../root/peerActionTypes.js";
/*{
    logs: {
        id: action.id,
        unsentMessage: "",
        log: [{
            message: state.message,
            type: "send"
        }]
    }
}*/

/*let reducer = (state = "", action) => {
    let currentRoute;
    switch (action.type) {
        case constants.PEER_CONNECTED:
            let search = state.filter(({ id }) => (id == action.id));
            if (!search.length) {
                return state.concat({
                    id: action.id,
                    unsentMessage: "",
                    log: []
                });
            }
            return state;
        case constants.PEER_SEND_MESSAGE:
            return state.map((item) => {
                if (item.id == action.id) {
                    return {...item,
                        log: item.log.concat({
                            message: action.message,
                            type: "send"
                        })
                    }
                }
                return item;
            });

        case constants.PEER_RECIEVE_MESSAGE:
            return state.map((item) => {
                if (item.id == action.id) {
                    return {...item,
                        log: item.log.concat({
                            message: action.message,
                            type: "recieve"
                        })
                    }
                }
                return item;
            });

        default:
            return state;
    }
}*/

let reducer = (state = "", action) => {
    let currentRoute;
    switch (action.type) {
        case constants.PEER_CONNECTED:            
            let search = state.filter(({ id }) => (id == action.id));
            if (!search.length) {
                return state.concat({
                    id: action.id,
                    unsentMessage: "",
                    log: []
                });
            }
            return state;
        case constants.PEER_SEND_MESSAGE:
            return state.map((item) => {
                if (item.id == action.id) {
                    return {...item,
                        log: item.log.concat({
                            message: action.message,
                            type: "send"
                        })
                    }
                }
                return item;
            });

        case constants.PEER_RECIEVE_MESSAGE:
            return state.map((item) => {
                if (item.id == action.id) {
                    return {...item,
                        log: item.log.concat({
                            message: action.message,
                            type: "recieve"
                        })
                    }
                }
                return item;
            });

        default:
            return state;
    }
}

export default reducer;
