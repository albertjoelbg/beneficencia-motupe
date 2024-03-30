<script>
    import Titulo from '$lib/components/Titulo.svelte';
    import organigrama from '$lib/img/organigrama.png';
</script>
<svelte:head>
    <title>Organigrama</title>
</svelte:head>
<Titulo texto="Organigrama"/>
<h2 class="tipografia-roboto-condensed text-center m-2 p-2">SOCIEDAD DE BENEFICENCIA DE MOTUPE</h2>
<h3 class="tipografia-roboto-condensed text-center mb-3 p-2">Estructura Orgánica</h3>

<article class="p-5 flex flex-1 mb-10">
    <section class="mx-auto max-w-5xl mx-auto">
        <img src={organigrama} alt="Organigrama de la Sociedad de Beneficencia de Motupe">
    </section>
</article>
