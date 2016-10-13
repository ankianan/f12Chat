//import { hydrate } from "./storage.js";
import Root from "./root/RootComponent.js";

let { Virtual, VirtualDom } = window.interfaces;

//hydrate().then((lastState) => {
    VirtualDom.render(<Root />, document.getElementById("root"));
//});


