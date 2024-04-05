<script>
    import '@fontsource-variable/lora';
    import {Heading, Span} from "flowbite-svelte";

    export let texto;
</script>

<Heading tag="h1" class="pt-9 pb-3 mt-8 mb-5 tipografia-lora"
         customSize="text-center text-3xl font-extrabold md:text-5xl lg:text-6xl">
    <Span class="text-gray-700">{texto}</Span>
</Heading>