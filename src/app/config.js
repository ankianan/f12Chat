//Setting base of our application
var base = "//" + document.location.host + "";

//Storage configration
var storage = {
    //driver: localforage.WEBSQL, // Force WebSQL; same as using setDriver()
    name: 'naukriDB',
    version: 6,
    //size: 4980736, // Size of database, in bytes. WebSQL-only for now.
    storeName: 'naukriStore', // Should be alphanumeric, with underscores.
    description: 'Naukri jobseeker SPA'
}

export default {
    base,
    storage
};
