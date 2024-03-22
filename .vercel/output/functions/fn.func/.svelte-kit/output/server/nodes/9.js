

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/noticias/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.BaUCyzCC.js","_app/immutable/chunks/scheduler.CiQcZxFi.js","_app/immutable/chunks/index.DBFcScdj.js"];
export const stylesheets = [];
export const fonts = [];
