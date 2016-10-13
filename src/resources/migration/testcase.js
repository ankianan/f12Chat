let { QUnit } = window;
import reducerKeys from "./reducerKeys.js";

export default (store) => {
    QUnit.module("migration");

    QUnit.test("Should migrate to specific version", (assert) => {
        //To specific version
        store.dispatch({
            type: "MIGRATE",
            toVersion: 1
        });
        assert.ok(store.getState().version == 1);
        assert.ok(Object.keys(store.getState().nested).length == 0);

    })

    QUnit.test("Should migrate to highest version by default", (assert) => {
        //To highest version
        store.dispatch({
            type: "MIGRATE",
            toVersion: undefined
        });
        assert.ok(store.getState().version == 3);
        assert.ok(store.getState().nested == undefined);
    });

    QUnit.test("Should not revert back to lower version", (assert) => {
        //To revert back
        store.dispatch({
            type: "MIGRATE",
            toVersion: 2
        });
        assert.ok(store.getState().version == 3);
    });

    QUnit.test("Should gracefully handle out of bound version", (assert) => {
        //To non existent version
        store.dispatch({
            type: "MIGRATE",
            toVersion: 100
        });
        assert.ok(store.getState().version == 3);
    });
}
