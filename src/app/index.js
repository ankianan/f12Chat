import { hydrate } from "./storage.js";
import Root from "./root/component.js";

let { Virtual, VirtualDom } = window.interfaces;

hydrate().then((lastState) => {
    let newElement = document.createElement("div");
    document.body.appendChild(newElement);
    VirtualDom.render(<Root lastState={lastState} />, newElement);
});


