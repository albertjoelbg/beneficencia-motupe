<script>
    import Titulo from "$lib/components/Titulo.svelte";
    import {P} from 'flowbite-svelte';
    import {Gallery} from 'flowbite-svelte';

    export let data;
</script>

<div class="m-2">
    <Titulo texto={data.publicacion.title}/>
</div>

<section class="flex flex-1">
    <P class="pt-5 px-8 pb-10 text-xl max-w-5xl text-center mx-auto" weight="normal"
       color="text-gray-700 dark:text-gray-400">{@html data.publicacion.content}</P>
</section>
<div class="container mx-auto">
    <Gallery items={data.publicacion.images} class="mx-auto p-3 gap-5 grid-cols-2 md:grid-cols-3"/>
</div>
