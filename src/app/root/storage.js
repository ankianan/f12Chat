let { localforage, Redux } = window.interfaces;

import config from "../config.js";
import { createTransform, persistStore } from 'redux-persist';
import createMigration from 'redux-persist-migrate';
import manifest from "../config.js";

// reducerKey is the key of the reducer you want to store the state version in
// in this example after migrations run `state.app.version` will equal `2`
let reducerKey = 'app'
const migration = createMigration(manifest, reducerKey);

export storageStoreEnhancer = compose(migration, autoRehydrate());

export config = (obj = { store: null, rehydrationCallback: null }) => {
    //Configure storage
    localforage.config(config.storage);

    let myTransform = createTransform(
        (inboundState, key) => {
            console.log(inboundState);
            return inboundState;
        },
        (outboundState, key) => outboundState);

    // reducerKey is the key of the reducer you want to store the state version in
    // in this example after migrations run `state.app.version` will equal `2`
    let reducerKey = 'app'
    const migration = createMigration(manifest, reducerKey)


    persistStore(obj.store, { storage: localforage, serialize: (data) => data, deserialize: (data) => data, transforms: [myTransform] }, obj.rehydrationCallback);
}
