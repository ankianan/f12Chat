import { normalize, Schema, arrayOf } from 'normalizr';
import response from "./response.js";
import objectHash from "object-hash";

const log = new Schema("log", {
    idAttribute: (entity) => {
        return objectHash.sha1(entity);
    }
});
const contact = new Schema("contact", {
    defaults: { messageField: "" },
    idAttribute: (entity) => {
        return entity.detail.id;
    }
});
const user = new Schema("user");
const account = new Schema("account", { connected: null });

contact.define({
    detail: user,
    //pendingLogs: arrayOf(log),
    //logs: arrayOf(log)
});

account.define({
    detail: user,
    contacts: arrayOf(contact)
});


var normalizedObj = normalize(response, account);
console.log(normalizedObj);
