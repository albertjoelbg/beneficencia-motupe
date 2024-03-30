<script>
    import Titulo from '$lib/components/Titulo.svelte';
    import Card from '$lib/components/Card.svelte';
    import {P} from "flowbite-svelte";
</script>
<svelte:head>
    <title>Misión y Visión</title>
</svelte:head>
<Titulo texto="Misión y Visión"/>
<article class="flex flex-wrap place-content-center">
    <section class="max-w-5xl m-3">
        <Card>
            Nuestra misión <span class="text-indigo-400 font-medium">institucional</span>
        </Card>

        <P color="text-gray-500 dark:text-gray-400 p-3 m-3 max-w-[1200px] text-lg">La Sociedad de Beneficencia Pública
            de
            Motupe es una
            entidad pública "Comprometida en brindar apoyo social a los niños, adolescentes, jóvenes, mujeres, ancianos,
            enfermos y discapacitados de los sectores más pobres, que se encuentran en estado de desamparo familiar y
            social,
            con equidad, solidaridad, eficiencia en forma oportuna y en lo posible creando capacidades para el auto
            desarrollo de la persona".</P>
    </section>

    <br>
    <section class="max-w-5xl m-3">
        <Card>
            Nuestra visión <span class="text-indigo-400 font-medium">institucional</span>
        </Card>

        <P color="text-gray-500 dark:text-gray-400 p-3 m-3 max-w-[1200px] text-lg">"Somos una Institución reconocida por
            la
            comunidad,
            que
            lidera
            a las organizaciones que desarrollan acciones de asistencia social en la región, efectuado un trabajo
            coordinado e integrador a favor de los más pobres de la población, caracterizada por contribuir a la
            creación
            de opciones de desarrollo para los beneficiarios".</P>
    </section>

    <br>
</article>
