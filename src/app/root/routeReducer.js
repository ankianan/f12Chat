const CHANGE_ROUTE = "CHANGE_ROUTE";

let reducer = (state = "/", action) => {
    let currentRoute
    switch (action.type) {
        case CHANGE_ROUTE:
            return action.route;
        default:
            return state;
    }
}

export default reducer;
