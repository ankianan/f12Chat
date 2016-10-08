import * as constants from "./peerActionTypes.js";

let actions = {
    "onRegister": (id) => {
        return {
            type: constants.PEER_REGISTER,
            id
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
    "onChangeMessage": (id, message) => {
        return {
            type: constants.PEER_CHANGE_MESSAGE,
            id,
            message
        }
    },
    "onSendMessage": (id, message) => {
        return {
            type: constants.PEER_SEND_MESSAGE,
            method: "send",
            id,
            message

        }
    },
    "onRecieveMessage": (id, message) => {
        return {
            type: constants.PEER_RECIEVE_MESSAGE,
            method: "receive",
            id,
            message
        }
    },
}

export default actions;
