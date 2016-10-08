let { page } = window.interfaces;
import * as staticRoutes from "./routeStatic.js";
import config from "../config.js";
import actions from "./routeActions.js";
export default (boundedActions) => {

    //Configuration
    page.start({
        popstate: true
    });

    page.base(config.base);

    page('/', () => {
        page.redirect(staticRoutes.ROUTE_REGISTER)
    });

    page(staticRoutes.ROUTE_REGISTER, () => {
        boundedActions.register();
    })

    page(staticRoutes.ROUTE_CONTACTS + '/:id', (ctx) => {
        boundedActions.contacts(ctx.params.id);
    })
    page(staticRoutes.ROUTE_CONNECT + '/:id/:connId', (ctx) => {
        boundedActions.connect(ctx.params.id,ctx.params.connId);
    })
    page('*', () => {
        boundedActions.notFound();
    });

}
