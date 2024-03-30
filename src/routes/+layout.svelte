<script>
    import "../app.pcss";
    import Pie from "$lib/components/Pie.svelte";
    import Header from "$lib/components/Header.svelte";
</script>

<div class="relative overflow-hidden ">
    <Header/>
    <main class="w-full my-0 mx-auto box-border pt-24">
        <slot></slot>
    </main>
</div>

<Pie/>