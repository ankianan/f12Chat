import manifest from "./manifest.js";
import { compose, createStore, applyMiddleware } from "redux";
import migration from "./migration.custom.js";
import logger from "../../jass/redux/middleware/logger.js";

let reducer = (state = {}, action) => {
    switch (action.type) {
        case "RESET":
            return {};
        case "MIGRATE":
            return migration(state, action.toVersion);
        default:
            return state;
    }
}

const store = createStore(reducer, undefined, applyMiddleware(logger));
//To specific version
store.dispatch({
    type: "MIGRATE",
    toVersion: 1
});
console.assert(store.getState().version == 1);
console.assert(Object.keys(store.getState().nested).length == 0);


//To highest version
store.dispatch({
    type: "MIGRATE",
    toVersion: undefined
});
console.assert(store.getState().version == 3);
console.assert(store.getState().nested == undefined);

//To revert back
store.dispatch({
    type: "MIGRATE",
    toVersion: 2
});
console.assert(store.getState().version == 3);


//To non existent version
store.dispatch({
    type: "MIGRATE",
    toVersion: 100
});
console.assert(store.getState().version == 3);
