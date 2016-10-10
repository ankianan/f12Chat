import manifest from "./manifest.js";

let getNextVersion = (currentVersion) => {
    return (currentVersion || 0) + 1;
}

let shouldMigrate = (state, toVersion, nextVersion) => {
    
    if (nextVersion in manifest) {
        if (toVersion) {
            return (nextVersion <= toVersion);
        }
        return true;
    }
    return false;
}

export default (state, toVersion) => {

    let nextVersion = getNextVersion(state.version);

    while (shouldMigrate(state, toVersion, nextVersion)) {

        state = {...manifest[nextVersion](state), "version": nextVersion };
        nextVersion = getNextVersion(state.version);
    }
    return state;
}
