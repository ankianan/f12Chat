import { REHYDRATE } from 'redux-persist/lib/constants.js';
const CHANGE_ROUTE = "CHANGE_ROUTE";

let reducer = (state = "/", action) => {
    let currentRoute
    switch (action.type) {
        case REHYDRATE:
            var incoming = action.payload.route;
            if (incoming) return incoming;
            return state;
        case CHANGE_ROUTE:
            return action.route;
        default:
            return state;
    }
}

export default reducer;
