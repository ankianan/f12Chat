let { localforage, Redux } = window.interfaces;
let { bindActionCreator } = Redux;
import config from "./config.js";


export function replicate(state) {
    /**
     * [Function replicate
     * Replicate state to DB
     * ]
     * @param  {[type]} state [Store state]
     * @return {[Promise]}       [Write DB]
     */
    if (state.route == "/notFound") {
        state.route == "/";
    }
    return localforage.setItem("appState", state);
}


/**
 * [Function hydrate
 * Get initial appState from DB
 * Remove appState if version is updated    
 * ]
 * @return {[Promise]} [Read DB]
 */
export function hydrate() {
    localforage.config(config.storage);
    let promise;
    promise = new Promise((resolve, reject) => {
        localforage.getItem("version").then((version) => {
            if (!version || version < config.storage.version) {
                localforage.removeItem("appState").then(() => {
                    localforage.setItem("version", config.storage.version);
                });
                resolve(null);
            } else {
                localforage.getItem("appState").then((value) => {
                    resolve(value);
                });
            }
        });
    });
    return promise;
}
