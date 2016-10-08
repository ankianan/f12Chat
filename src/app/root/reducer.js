import contactReducer from "../Contact/contactReducer.js";
import userReducer from "../User/userReducer.js";
import accountReducer from "../Account/accountReducer.js";

let { Redux } = window.interfaces;
const reducer = Redux.combineReducers({
    "account": accountReducer,
    "user": userReducer,
    "contact": contactReducer
});
export default reducer;
