import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.C4lSzZ9T.js","_app/immutable/chunks/scheduler.CM8gWTHg.js","_app/immutable/chunks/index.0sI8AnVS.js","_app/immutable/chunks/Card.DTFqrtb3.js","_app/immutable/chunks/Frame.CY57CAhS.js","_app/immutable/chunks/index.CIW4ENOb.js","_app/immutable/chunks/Indicator.BglQc-0C.js"];
export const stylesheets = [];
export const fonts = [];
