let evenReducer = (state = 8, action) => {
    switch (action.type) {
        case "HYDRATE":
            return action.payload.even || state;
        case "UPDATE_EVEN":
            return action.even;
        default:
            return state;
    }
};

export default {
    even: evenReducer
};
