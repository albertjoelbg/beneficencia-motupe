<script>
    import Titulo from "$lib/components/Titulo.svelte";
    import {Card} from 'flowbite-svelte';
    export let data;

    let hCard = false;
</script>

<Titulo texto="Noticias"/>
<div class="container mx-auto">
    <article class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 m-2 p-2">
        {#each data.summaries as {slug, title, image}}
            <section class="p-4 max-w-3xl min-w-2xl">
                <Card img={image.src} href="/noticias/{slug}" horizontal size="md" reverse={hCard}>
                    <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </Card>
            </section>
        {/each}
    </article>
</div>





