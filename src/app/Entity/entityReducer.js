import * as constants from "../root/peerActionTypes.js";
import contactReducer from "../Contact/contactReducer.js";
import userReducer from "../User/userReducer.js";
import accountReducer from "../Account/accountReducer.js";

let reducer = (state, action) => {
    switch (action.type) {
        default: return {
            ...state,
            "account": accountReducer(state.account, action),
            "user": userReducer(state.user, action),
            "contact": contactReducer(state.contact, action)
        }
    }
}
