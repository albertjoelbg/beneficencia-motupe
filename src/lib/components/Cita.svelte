<script>
    import '@fontsource-variable/lora/wght-italic.css';
    import {Heading, Span} from "flowbite-svelte";

</script>

<Heading tag="h3" class="pb-4 mb-6 tipografia-lora-italic"
         customSize="text-center text-xl font-bold md:text-2xl lg:text-3xl">
    <Span class="text-gray-600"><slot></slot></Span>
</Heading>