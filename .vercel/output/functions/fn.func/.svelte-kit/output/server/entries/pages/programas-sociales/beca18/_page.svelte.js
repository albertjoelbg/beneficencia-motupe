import { c as create_ssr_component, v as validate_component } from "../../../../chunks/ssr.js";
import { H as Heading } from "../../../../chunks/Heading.js";
import { P } from "../../../../chunks/P.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="text-center m-4">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h1",
      class: "mb-4",
      customSize: "text-2xl font-bold lg:text-2xl"
    },
    {},
    {
      default: () => {
        return `Beca 18`;
      }
    }
  )} ${validate_component(P, "P").$$render(
    $$result,
    {
      class: "mb-6 text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
    },
    {},
    {
      default: () => {
        return `Es un programa social dirigido a niños
        menores de 6 años.`;
      }
    }
  )} ${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum distinctio doloremque magni minima nam natus
        possimus veniam? Alias eligendi esse et ex excepturi id molestias recusandae sapiente soluta suscipit. Sit!`;
    }
  })}</div>`;
});
export {
  Page as default
};
