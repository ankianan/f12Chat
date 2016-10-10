import routeReducer from "./routeReducer.js";
import contactReducer from "../Contact/contactReducer.js";
import userReducer from "../User/userReducer.js";
import accountReducer from "../Account/accountReducer.js";

let { Redux } = window.interfaces;
const reducer = Redux.combineReducers({
    "route": routeReducer,
    "account": accountReducer,
    "user": userReducer,
    "contacts": contactReducer
});
export default reducer;
