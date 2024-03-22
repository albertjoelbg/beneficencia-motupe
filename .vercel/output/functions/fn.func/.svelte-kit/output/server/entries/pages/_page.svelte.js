import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_attribute_value, d as escape_object, f as escape, h as add_attribute, g as getContext, k as subscribe, v as validate_component, l as each, j as createEventDispatcher, s as setContext } from "../../chunks/ssr.js";
import { C as Card, B as Button } from "../../chunks/Card.js";
import { w as writable } from "../../chunks/index.js";
import { t as twMerge, i as is_void } from "../../chunks/Frame.js";
import { I as Indicator } from "../../chunks/Indicator.js";
const ArrowRight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M18 6L16.57 7.393 24.15 15 4 15 4 17 24.15 17 16.57 24.573 18 26 28 16 18 6z"></path></svg>`;
});
const Quotes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  )}>${title ? `<title>${escape(title)}</title>` : ``}<path d="M12 15H6.11A9 9 0 0110 8.86l1.79-1.2L10.69 6 8.9 7.2A11 11 0 004 16.35V23a2 2 0 002 2h6a2 2 0 002-2V17A2 2 0 0012 15zM26 15H20.11A9 9 0 0124 8.86l1.79-1.2L24.7 6 22.9 7.2A11 11 0 0018 16.35V23a2 2 0 002 2h6a2 2 0 002-2V17A2 2 0 0026 15z"></path></svg>`;
});
const ControlButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { forward } = $$props;
  let { name } = $$props;
  let buttonCls;
  if ($$props.forward === void 0 && $$bindings.forward && forward !== void 0)
    $$bindings.forward(forward);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  buttonCls = twMerge("flex absolute top-0 z-30 justify-center items-center px-4 h-full group focus:outline-none text-white dark:text-gray-300", forward ? "end-0" : "start-0", $$props.class);
  return `<button type="button"${add_attribute("class", buttonCls, 0)}>${slots.default ? slots.default({}) : ` <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">${forward ? `<svg aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>` : `<svg aria-hidden="true" class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>`} <span class="sr-only">${escape(name)}</span></span> `}</button> `;
});
const canChangeSlide = ({ lastSlideChange, slideDuration, slideDurationRatio = 1 }) => {
  if (lastSlideChange && (/* @__PURE__ */ new Date()).getTime() - lastSlideChange.getTime() < slideDuration * slideDurationRatio) {
    console.warn("Can't change slide yet, too soon");
    return false;
  }
  return true;
};
const Controls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  const state = getContext("state");
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  const { update } = state;
  function changeSlide(forward) {
    if (!canChangeSlide({
      lastSlideChange: $state.lastSlideChange,
      slideDuration: $state.slideDuration,
      slideDurationRatio: 0.75
    })) {
      return;
    }
    if (forward) {
      update((_state) => {
        _state.forward = true;
        _state.index = _state.index >= _state.images.length - 1 ? 0 : _state.index + 1;
        _state.lastSlideChange = /* @__PURE__ */ new Date();
        return { ..._state };
      });
    } else {
      update((_state) => {
        _state.forward = false;
        _state.index = _state.index <= 0 ? _state.images.length - 1 : _state.index - 1;
        _state.lastSlideChange = /* @__PURE__ */ new Date();
        return { ..._state };
      });
    }
  }
  $$unsubscribe_state();
  return ` ${slots.default ? slots.default({ ControlButton, changeSlide }) : ` ${validate_component(ControlButton, "ControlButton").$$render(
    $$result,
    {
      name: "Previous",
      forward: false,
      class: twMerge($$props.class)
    },
    {},
    {}
  )} ${validate_component(ControlButton, "ControlButton").$$render(
    $$result,
    {
      name: "Next",
      forward: true,
      class: twMerge($$props.class)
    },
    {},
    {}
  )} `}`;
});
const Indicators = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $state, $$unsubscribe_state;
  let { activeClass = "opacity-100" } = $$props;
  let { inactiveClass = "opacity-60" } = $$props;
  const state = getContext("state");
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  if ($$props.activeClass === void 0 && $$bindings.activeClass && activeClass !== void 0)
    $$bindings.activeClass(activeClass);
  if ($$props.inactiveClass === void 0 && $$bindings.inactiveClass && inactiveClass !== void 0)
    $$bindings.inactiveClass(inactiveClass);
  $$unsubscribe_state();
  return `<div${add_attribute("class", twMerge("flex absolute bottom-5 start-1/2 z-30 space-x-3 rtl:space-x-reverse -translate-x-1/2 rtl:translate-x-1/2", $$props.class), 0)}>${each($state.images, (_, idx) => {
    let selected = $state.index === idx;
    return ` <button>${slots.default ? slots.default({ Indicator, selected, index: idx }) : ` ${validate_component(Indicator, "Indicator").$$render(
      $$result,
      {
        class: twMerge("bg-gray-100 hover:bg-gray-300", selected ? activeClass : inactiveClass)
      },
      {},
      {}
    )} `} </button>`;
  })}</div> `;
});
const Slide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let imgClass;
  let $$restProps = compute_rest_props($$props, ["image", "transition"]);
  let $state, $$unsubscribe_state;
  const state = getContext("state");
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  let { image } = $$props;
  let { transition = null } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  ({
    x: $state.forward ? "100%" : "-100%",
    opacity: 1,
    width: "100%",
    height: "100%",
    duration: $state.slideDuration
  });
  ({
    x: $state.forward ? "-100%" : "100%",
    opacity: 0.9,
    width: "100%",
    height: "100%",
    duration: $state.slideDuration
  });
  imgClass = twMerge("absolute block !w-full h-full object-cover", $$props.class);
  $$unsubscribe_state();
  return `${transition ? `<img${spread(
    [
      { alt: "..." },
      escape_object(image),
      escape_object($$restProps),
      { class: escape_attribute_value(imgClass) }
    ],
    {}
  )}>` : `<img${spread(
    [
      { alt: "..." },
      escape_object(image),
      escape_object($$restProps),
      { class: escape_attribute_value(imgClass) }
    ],
    {}
  )}>`} `;
});
let divClass = "grid overflow-hidden relative rounded-lg h-56 sm:h-64 xl:h-80 2xl:h-96";
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "images",
    "index",
    "slideDuration",
    "transition",
    "duration",
    "ariaLabel",
    "imgClass"
  ]);
  let { images } = $$props;
  let { index = 0 } = $$props;
  let { slideDuration = 1e3 } = $$props;
  let { transition = null } = $$props;
  let { duration = 0 } = $$props;
  let { ariaLabel = "Draggable Carousel" } = $$props;
  let { imgClass = "" } = $$props;
  const dispatch = createEventDispatcher();
  const { set, subscribe: subscribe2, update } = writable({
    images,
    index,
    forward: true,
    slideDuration,
    lastSlideChange: /* @__PURE__ */ new Date()
  });
  const state = {
    set: (_state) => set({
      index: _state.index,
      images: _state.images,
      lastSlideChange: /* @__PURE__ */ new Date(),
      slideDuration,
      forward
    }),
    subscribe: subscribe2,
    update
  };
  let forward = true;
  setContext("state", state);
  subscribe2((_state) => {
    index = _state.index;
    forward = _state.forward;
    dispatch("change", images[index]);
  });
  let carouselDiv;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.slideDuration === void 0 && $$bindings.slideDuration && slideDuration !== void 0)
    $$bindings.slideDuration(slideDuration);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.imgClass === void 0 && $$bindings.imgClass && imgClass !== void 0)
    $$bindings.imgClass(imgClass);
  return ` ${$$result.head += `<!-- HEAD_svelte-h5oyes_START -->${images.length > 0 ? `${each(images, (image) => {
    return `<link rel="preload"${add_attribute("href", image.src, 0)} as="image">`;
  })}` : ``}<!-- HEAD_svelte-h5oyes_END -->`, ""}   <div class="relative" role="button"${add_attribute("aria-label", ariaLabel, 0)} tabindex="0"${add_attribute("this", carouselDiv, 0)}><div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(
          divClass,
          "transition-transform",
          $$props.class
        ))
      }
    ],
    {}
  )}>${slots.slide ? slots.slide({ Slide, index }) : ` ${validate_component(Slide, "Slide").$$render(
    $$result,
    {
      image: images[index],
      class: imgClass,
      transition
    },
    {},
    {}
  )} `}</div> ${slots.default ? slots.default({ index, Controls, Indicators }) : ``}</div> `;
});
const Blockquote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["border", "italic", "borderClass", "bgClass", "bg", "baseClass", "alignment", "size"]);
  let { border = false } = $$props;
  let { italic = true } = $$props;
  let { borderClass = "border-s-4 border-gray-300 dark:border-gray-500" } = $$props;
  let { bgClass = "bg-gray-50 dark:bg-gray-800" } = $$props;
  let { bg = false } = $$props;
  let { baseClass = "font-semibold text-gray-900 dark:text-white" } = $$props;
  let { alignment = "left" } = $$props;
  let { size = "lg" } = $$props;
  let alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl"
  };
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.italic === void 0 && $$bindings.italic && italic !== void 0)
    $$bindings.italic(italic);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0)
    $$bindings.borderClass(borderClass);
  if ($$props.bgClass === void 0 && $$bindings.bgClass && bgClass !== void 0)
    $$bindings.bgClass(bgClass);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.baseClass === void 0 && $$bindings.baseClass && baseClass !== void 0)
    $$bindings.baseClass(baseClass);
  if ($$props.alignment === void 0 && $$bindings.alignment && alignment !== void 0)
    $$bindings.alignment(alignment);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<blockquote${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(baseClass, alignmentClasses[alignment], sizes[size], bg && bgClass, border && borderClass, italic && "italic", $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</blockquote> `;
});
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "color", "customSize"]);
  let { tag = "h1" } = $$props;
  let { color = "text-gray-900 dark:text-white" } = $$props;
  let { customSize = "" } = $$props;
  const textSizes = {
    h1: "text-5xl font-extrabold",
    h2: "text-4xl font-bold",
    h3: "text-3xl font-bold",
    h4: "text-2xl font-bold",
    h5: "text-xl font-bold",
    h6: "text-lg font-bold"
  };
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.customSize === void 0 && $$bindings.customSize && customSize !== void 0)
    $$bindings.customSize(customSize);
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        escape_object($$restProps),
        {
          class: escape_attribute_value(twMerge(customSize ? customSize : textSizes[tag], color, "w-full", $$props.class))
        }
      ],
      {}
    )}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)} `;
});
const Span = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "italic",
    "underline",
    "linethrough",
    "uppercase",
    "gradient",
    "highlight",
    "highlightClass",
    "decorationClass",
    "gradientClass"
  ]);
  let { italic = false } = $$props;
  let { underline = false } = $$props;
  let { linethrough = false } = $$props;
  let { uppercase = false } = $$props;
  let { gradient = false } = $$props;
  let { highlight = false } = $$props;
  let { highlightClass = "text-blue-600 dark:text-blue-500" } = $$props;
  let { decorationClass = "decoration-2 decoration-blue-400 dark:decoration-blue-600" } = $$props;
  let { gradientClass = "text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400" } = $$props;
  let underlineClass = twMerge("underline", decorationClass);
  let classSpan = twMerge(
    italic && "italic",
    underline && underlineClass,
    linethrough && "line-through",
    uppercase && "uppercase",
    gradient ? gradientClass : "font-semibold text-gray-900 dark:text-white",
    highlight && highlightClass,
    $$props.class
  );
  if ($$props.italic === void 0 && $$bindings.italic && italic !== void 0)
    $$bindings.italic(italic);
  if ($$props.underline === void 0 && $$bindings.underline && underline !== void 0)
    $$bindings.underline(underline);
  if ($$props.linethrough === void 0 && $$bindings.linethrough && linethrough !== void 0)
    $$bindings.linethrough(linethrough);
  if ($$props.uppercase === void 0 && $$bindings.uppercase && uppercase !== void 0)
    $$bindings.uppercase(uppercase);
  if ($$props.gradient === void 0 && $$bindings.gradient && gradient !== void 0)
    $$bindings.gradient(gradient);
  if ($$props.highlight === void 0 && $$bindings.highlight && highlight !== void 0)
    $$bindings.highlight(highlight);
  if ($$props.highlightClass === void 0 && $$bindings.highlightClass && highlightClass !== void 0)
    $$bindings.highlightClass(highlightClass);
  if ($$props.decorationClass === void 0 && $$bindings.decorationClass && decorationClass !== void 0)
    $$bindings.decorationClass(decorationClass);
  if ($$props.gradientClass === void 0 && $$bindings.gradientClass && gradientClass !== void 0)
    $$bindings.gradientClass(gradientClass);
  return `<span${spread([escape_object($$restProps), { class: escape_attribute_value(classSpan) }], {})}>${slots.default ? slots.default({}) : ``}</span> `;
});
const vasoDeLeche = "/_app/immutable/assets/vasodeleche.AxqNUphQ.jpg";
const beca18 = "/_app/immutable/assets/beca18.BhQQg9SQ.png";
const presidenteBeneficencia = "/_app/immutable/assets/presidentebeneficencia.Bbm912oE.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let images = data.imagenes;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="overflow-hidden w-full">${validate_component(Carousel, "Carousel").$$render($$result, { images, duration: 3900 }, {}, {
    slide: ({ index, Slide: Slide2 }) => {
      return `<div slot="slide">${validate_component(Slide2, "Slide").$$render($$result, { image: images[index] }, {}, {})}</div>`;
    },
    default: ({ Indicators: Indicators2 }) => {
      return `${validate_component(Indicators2, "Indicators").$$render($$result, {}, {}, {})}`;
    }
  })}</div> ${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h1",
      class: "m-4 p-4",
      customSize: " text-center text-3xl font-extrabold  md:text-5xl lg:text-6xl"
    },
    {},
    {
      default: () => {
        return `${validate_component(Span, "Span").$$render($$result, { gradient: true }, {}, {
          default: () => {
            return `Bienvenidos`;
          }
        })}`;
      }
    }
  )} <article class="flex justify-center m-4 p-4">${validate_component(Card, "Card").$$render($$result, { img: presidenteBeneficencia }, {}, {
    default: () => {
      return `<figure class="mx-auto max-w-screen-md text-center">${validate_component(Quotes, "Quotes").$$render(
        $$result,
        {
          class: "mx-auto mb-3 w-12 h-12 text-gray-400 dark:text-gray-600"
        },
        {},
        {}
      )} ${validate_component(Blockquote, "Blockquote").$$render($$result, { alignment: "center", size: "2xl" }, {}, {
        default: () => {
          return `&quot;Servir al pueblo con dedicación y perseverancia.&quot;`;
        }
      })} <figcaption class="flex justify-center items-center mt-6 space-x-3 rtl:space-x-reverse" data-svelte-h="svelte-ukf335"><div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700"><cite class="pe-3 font-medium text-gray-900 dark:text-white">Lic. Jesús Gabriel Reyes
                        Sánchez</cite> <cite class="ps-3 text-sm font-light text-gray-500 dark:text-gray-400">Presidente de la Sociedad
                        de
                        Beneficencia.</cite></div></figcaption></figure>`;
    }
  })}</article> <section class="bg-primary-100">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h1",
      class: "m-4 p-4",
      customSize: " text-center text-3xl font-extrabold  md:text-5xl lg:text-6xl"
    },
    {},
    {
      default: () => {
        return `${validate_component(Span, "Span").$$render($$result, { gradient: true }, {}, {
          default: () => {
            return `Programas Sociales`;
          }
        })}`;
      }
    }
  )} <article class="size-1/2 m-2 p-2 flex justify-center gap-5">${validate_component(Card, "Card").$$render($$result, { class: "m-2", img: vasoDeLeche }, {}, {
    default: () => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          class: "outline text-white",
          href: "/programas-sociales/vaso-de-leche"
        },
        {},
        {
          default: () => {
            return `<h6 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 text-white" data-svelte-h="svelte-1t7ei03">Vaso de Leche</h6> ${validate_component(ArrowRight, "ArrowRight").$$render($$result, { class: "w-3.5 h-3.5 ms-2 text-white" }, {}, {})}`;
          }
        }
      )}`;
    }
  })} ${validate_component(Card, "Card").$$render($$result, { img: beca18 }, {}, {
    default: () => {
      return `${validate_component(Button, "Button").$$render(
        $$result,
        {
          class: "outline text-white",
          href: "/programas-sociales/beca18"
        },
        {},
        {
          default: () => {
            return `<h6 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 text-white" data-svelte-h="svelte-8vk3y4">Beca 18</h6> ${validate_component(ArrowRight, "ArrowRight").$$render($$result, { class: "w-3.5 h-3.5 ms-2 text-white" }, {}, {})}`;
          }
        }
      )}`;
    }
  })}</article></section> <section>${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h1",
      class: "m-4 p-4",
      customSize: " text-center text-3xl font-extrabold  md:text-5xl lg:text-6xl"
    },
    {},
    {
      default: () => {
        return `${validate_component(Span, "Span").$$render($$result, { gradient: true }, {}, {
          default: () => {
            return `Noticias`;
          }
        })}`;
      }
    }
  )}</section>`;
});
export {
  Page as default
};
