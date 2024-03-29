<script>
    import '@fontsource-variable/lora';
    import {Heading, Span} from "flowbite-svelte";

    export let texto;
</script>

<Heading tag="h1" class="pt-8 pb-4 m-5 tipografia-lora"
         customSize="text-center text-3xl font-extrabold md:text-5xl lg:text-6xl">
    <Span class="text-gray-700">{texto}</Span>
</Heading>

<!--<h1 class="text-5xl font-bold text-center text-primary-700 pt-8 pb-4 m-4 tipografia-lora">{texto}</h1>-->
