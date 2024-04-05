<script>
    import '@fontsource-variable/lora/wght-italic.css';
    import {Heading, Span} from "flowbite-svelte";

</script>

<Heading tag="h1" class="pb-4 mb-6 tipografia-lora-italic"
         customSize="text-center text-2xl font-bold md:text-4xl lg:text-5xl">
    <Span class="text-gray-600"><slot></slot></Span>
</Heading>