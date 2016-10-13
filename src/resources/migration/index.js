import { compose, createStore, applyMiddleware, combineReducers } from "redux";
import logger from "../../jass/redux/middleware/logger.js";
import reducerKeys from "./reducerKeys.js";

import manifest from "./manifest.js";
import migration from "./migration.custom.js";
import * as persist from "./persist.custom.js";
import testcase from "./testcase.js";

let reducer_combined = combineReducers(reducerKeys);

let reducer = (state = {}, action) => {
    switch (action.type) {
        case "RESET":
            return {};
        case "MIGRATE":
            return migration(state, action.toVersion);
    };
    reducer_combined(state, action);
};

const store = createStore(reducer, undefined, applyMiddleware(logger));
persist.autoHydrate(store);
store.subscribe(() => {
    persist.replicate(store, reducerKeys);
});

testcase(store);
