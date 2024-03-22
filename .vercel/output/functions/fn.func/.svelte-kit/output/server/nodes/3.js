import * as server from '../entries/pages/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/3.BgDRmXmF.js","_app/immutable/chunks/scheduler.CiQcZxFi.js","_app/immutable/chunks/index.DBFcScdj.js","_app/immutable/chunks/Button.CEjCIA1q.js","_app/immutable/chunks/bundle-mjs.C064607j.js","_app/immutable/chunks/index.mJN51mbs.js","_app/immutable/chunks/Heading.ZCRL9GUk.js"];
export const stylesheets = [];
export const fonts = [];
