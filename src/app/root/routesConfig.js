let { page } = window.interfaces;
import config from "../config.js";
import actions from "./routeActions.js";
export default (boundedActions) => {

    //Configuration
    page.start({
        popstate: true
    });

    page.base(config.base);

    page('/', () => {
        page.redirect('/chat/register')
    });

    page('/chat/contacts/{id}', (id) => {
        boundedActions.searchForm(...arguments);
    })
    page('/chat/window/{id}/{connId}', (id,connId) => {
        boundedActions.searchResult(...arguments);
    })
    page('*', () => {
        boundedActions.notFound();
    });

}
