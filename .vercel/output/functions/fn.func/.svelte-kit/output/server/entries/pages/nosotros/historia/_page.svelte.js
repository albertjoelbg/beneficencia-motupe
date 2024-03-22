import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { T as Titulo } from "../../../../chunks/Titulo.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Titulo, "Titulo").$$render($$result, { texto: "Historia" }, {}, {})}`;
});
export {
  Page as default
};
