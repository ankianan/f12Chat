let lastSavedState;

export let hydrate = (store, reducerKeys) {
    //Read all reducer keys
    for (key in reducerKeys) {
        localforage.getItem(key).then((state) => {
        	lastSavedState[key] = state;
        	//Dispatch Hydrate when all reducer keys are present
            store.dispatch({
                type: "HYDRATE",
                payload: state
            });
        });
    }
    
};

export let replicate = (store, reducerKeys) {
    let state = store.getState();

    for (key in reducerKeys) {
        if (state[key] != lastSavedState[key]) {
            localforage.setItem(key, state[key]);
        }
    }
};
