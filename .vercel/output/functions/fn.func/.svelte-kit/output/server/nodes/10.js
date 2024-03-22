

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/patrimonio-cultural/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.C4CNWCBN.js","_app/immutable/chunks/scheduler.CiQcZxFi.js","_app/immutable/chunks/index.DBFcScdj.js"];
export const stylesheets = [];
export const fonts = [];
