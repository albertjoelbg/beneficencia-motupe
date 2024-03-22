import { c as create_ssr_component, f as escape } from "./ssr.js";
const css = {
  code: ".tipografia-lora.svelte-z5855a{font-family:'Lora Variable', serif}",
  map: null
};
const Titulo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { texto } = $$props;
  if ($$props.texto === void 0 && $$bindings.texto && texto !== void 0)
    $$bindings.texto(texto);
  $$result.css.add(css);
  return `<h1 class="text-5xl font-bold text-center text-primary-700 p-4 m-4 tipografia-lora svelte-z5855a">${escape(texto)}</h1>`;
});
export {
  Titulo as T
};
