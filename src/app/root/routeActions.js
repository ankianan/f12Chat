import staticRoutes from "./routeStatic.js";

let actions = {
    "register": () => {
        return {
            type: "CHANGE_ROUTE",
            route: staticRoutes.ROUTE_REGISTER
        }
    },
    "contacts": (id) => {
        return {
            type: "CHANGE_ROUTE",
            route: staticRoutes.ROUTE_CONTACTS + "/" + id
        }
    },
    "connect": (id, connId) => {
        return {
            type: "CHANGE_ROUTE",
            route: staticRoutes.ROUTE_CONNECT + "/" + id + "/" + connId
        }
    },
    "notFound": () => {
        return {
            type: "CHANGE_ROUTE",
            route: "/chat/notFound"
        }
    }
}

export default actions;
