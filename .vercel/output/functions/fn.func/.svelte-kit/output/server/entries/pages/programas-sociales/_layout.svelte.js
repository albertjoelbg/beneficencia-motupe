import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="text-2xl font-semibold text-center bg-primary-600 text-white p-4" data-svelte-h="svelte-79s183">Programas Sociales</h1> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
