import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_attribute_value, d as escape_object, f as escape, v as validate_component } from "../../../chunks/ssr.js";
import { C as Card, B as Button } from "../../../chunks/Card.js";
import { T as Titulo } from "../../../chunks/Titulo.js";
const Email = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM25.8,8,16,14.78,6.2,8ZM4,24V8.91l11.43,7.91a1,1,0,0,0,1.14,0L28,8.91V24Z"></path></svg>`;
});
const Location = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M16,18a5,5,0,1,1,5-5A5.0057,5.0057,0,0,1,16,18Zm0-8a3,3,0,1,0,3,3A3.0033,3.0033,0,0,0,16,10Z"></path><path d="M16,30,7.5645,20.0513c-.0479-.0571-.3482-.4515-.3482-.4515A10.8888,10.8888,0,0,1,5,13a11,11,0,0,1,22,0,10.8844,10.8844,0,0,1-2.2148,6.5973l-.0015.0025s-.3.3944-.3447.4474ZM8.8125,18.395c.001.0007.2334.3082.2866.3744L16,26.9079l6.91-8.15c.0439-.0552.2783-.3649.2788-.3657A8.901,8.901,0,0,0,25,13,9,9,0,1,0,7,13a8.9054,8.9054,0,0,0,1.8125,5.395Z"></path></svg>`;
});
const Phone = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let labelled;
  let attributes;
  let $$restProps = compute_rest_props($$props, ["size", "title"]);
  let { size = 16 } = $$props;
  let { title = void 0 } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  labelled = $$props["aria-label"] || $$props["aria-labelledby"] || title;
  attributes = {
    "aria-hidden": labelled ? void 0 : true,
    role: labelled ? "img" : void 0,
    focusable: Number($$props["tabindex"]) === 0 ? true : void 0
  };
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 32 32" },
      { fill: "currentColor" },
      { preserveAspectRatio: "xMidYMid meet" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      escape_object(attributes),
      escape_object($$restProps)
    ],
    {}
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M26,29h-.17C6.18,27.87,3.39,11.29,3,6.23A3,3,0,0,1,5.76,3h5.51a2,2,0,0,1,1.86,1.26L14.65,8a2,2,0,0,1-.44,2.16l-2.13,2.15a9.37,9.37,0,0,0,7.58,7.6l2.17-2.15A2,2,0,0,1,24,17.35l3.77,1.51A2,2,0,0,1,29,20.72V26A3,3,0,0,1,26,29ZM6,5A1,1,0,0,0,5,6v.08C5.46,12,8.41,26,25.94,27A1,1,0,0,0,27,26.06V20.72l-3.77-1.51-2.87,2.85L19.88,22C11.18,20.91,10,12.21,10,12.12l-.06-.48,2.84-2.87L11.28,5Z"></path></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Titulo, "Titulo").$$render($$result, { texto: "Contacto" }, {}, {})} <main class="m-5 p-2 flex gap-5 flex-wrap place-content-center">${validate_component(Card, "Card").$$render(
    $$result,
    {
      class: "text-center",
      size: "sm",
      padding: "sm"
    },
    {},
    {
      default: () => {
        return `<h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white" data-svelte-h="svelte-1qg2f47">Ubícanos</h5> <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400" data-svelte-h="svelte-1b4eov6">Calle Túpac Amaru #---, Motupe.</p> <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Location, "Location").$$render(
              $$result,
              {
                class: "w-3.5 h-3.5 ml-2 text-white mr-2"
              },
              {},
              {}
            )} <a href="#" data-svelte-h="svelte-1sl749e">Mapa</a>`;
          }
        })}</div>`;
      }
    }
  )} ${validate_component(Card, "Card").$$render(
    $$result,
    {
      class: "text-center",
      size: "sm",
      padding: "sm"
    },
    {},
    {
      default: () => {
        return `<h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white" data-svelte-h="svelte-psforp">Teléfono</h5> <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400" data-svelte-h="svelte-1s9uwk1">Fijo: 98765465</p> <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400" data-svelte-h="svelte-38491l">Celular: 98765465</p> <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Phone, "Phone").$$render(
              $$result,
              {
                class: "w-3.5 h-3.5 ml-2 text-white mr-2"
              },
              {},
              {}
            )} <a href="https://api.whatsapp.com/send?phone=#" target="_blank" rel="noopener noreferrer" data-svelte-h="svelte-1051k7b">Whatsapp</a>`;
          }
        })}</div>`;
      }
    }
  )} ${validate_component(Card, "Card").$$render(
    $$result,
    {
      class: "text-center",
      size: "sm",
      padding: "sm"
    },
    {},
    {
      default: () => {
        return `<h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white" data-svelte-h="svelte-1m42p6v">Correo</h5> <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400" data-svelte-h="svelte-1iui288">informes@beneficencia.org</p> <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">${validate_component(Button, "Button").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Email, "Email").$$render(
              $$result,
              {
                class: "w-3.5 h-3.5 ml-2 text-white mr-2"
              },
              {},
              {}
            )} <a href="mailto:informes@beneficencia.org" target="_blank" data-svelte-h="svelte-ds7ald">Enviar</a>`;
          }
        })}</div>`;
      }
    }
  )}</main>`;
});
export {
  Page as default
};
