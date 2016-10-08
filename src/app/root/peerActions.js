import * as constants from "./peerActionTypes.js";

let actions = {
    "onRegister": () => {
        return {
            type: constants.PEER_REGISTER
        }
    },
    "onChangeName": (name) => {
        return {
            type: constants.PEER_CHANGE_NAME,
            name
        }
    },
    "onChangeConnName": (name) => {
        return {
            type: constants.PEER_CHANGE_CONN_NAME,
            name
        }
    },
    "onConnection": (id) => {
        return {
            type: constants.PEER_CONNECTED,
            id
        }
    },
    "onChangeMessage": (message) => {
        return {
            type: constants.PEER_CHANGE_MESSAGE,
            message
        }
    },
    "onSendMessage": (id, message) => {
        return {
            type: constants.PEER_SEND_MESSAGE,
            id,
            message
        }
    },
    "onRecieveMessage": (id, message) => {
        return {
            type: constants.PEER_RECIEVE_MESSAGE,
            id,
            message
        }
    },
}

export default actions;
