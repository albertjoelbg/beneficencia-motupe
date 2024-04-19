<script>
    import Titulo from '$lib/components/Titulo.svelte';
    import Cita from '$lib/components/Cita.svelte';
    import CheckmarkFilled from "carbon-icons-svelte/lib/CheckmarkFilled.svelte";
    import Subtitulo from "$lib/components/Subtitulo.svelte";
    import {
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell, Timeline,
        TimelineItem
    } from "flowbite-svelte";
</script>
<svelte:head>
    <title>Servicio Funerario Integral</title>
</svelte:head>
<Titulo texto="Servicio Funerario Integral"/>
<Subtitulo>
    "SERFIN"
</Subtitulo>

<article class="p-3 m-3">
    <section class="flex flex-1">
        <Timeline class="mx-auto" order="vertical">
            <TimelineItem title="Presentación">
                <svelte:fragment slot="icon">
      <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
        <CheckmarkFilled class="w-3 h-3 text-primary-600 dark:text-primary-400"/>
      </span>
                </svelte:fragment>
                <p class="text-base font-normal text-gray-700 dark:text-gray-400 max-w-4xl">El Servicio
                    Funerario Integral (SERFIN) de la Sociedad Beneficencia de Motupe, te acompaña en los
                    momentos más difíciles, cómo es el fallecimiento de nuestros seres queridos, por eso para
                    asegurar una digno funeral y no tener que preocuparte por los gastos que conllevan, SERFIN nos
                    ofrece una afiliación económica a sus servicios funerarios.</p>
            </TimelineItem>
            <TimelineItem title="Ofrecemos">
                <svelte:fragment slot="icon">
      <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
        <CheckmarkFilled class="w-3 h-3 text-primary-600 dark:text-primary-400"/>
      </span>
                </svelte:fragment>
                <ul class="text-gray-700">
                    <li>
                        Nicho Perpetuo
                    </li>
                    <li>
                        Ataúd de Primera Clase
                    </li>
                    <li>Derecho de Sepultura</li>
                    <li>Ofrenda floral</li>
                    <li>Trámites Administrativos</li>
                </ul>
            </TimelineItem>

            <TimelineItem title="Afiliación">
                <svelte:fragment slot="icon">
      <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
        <CheckmarkFilled class="w-3 h-3 text-primary-600 dark:text-primary-400"/>
      </span>
                </svelte:fragment>
                <p class="text-base font-normal text-gray-700 dark:text-gray-400 max-w-4xl">Afiliamos
                    grupo de 05 integrantes, 04 personas hasta 60 años y 01 miembro sin límite de
                    edad.</p>

            </TimelineItem>
            <TimelineItem title="Costos">
                <svelte:fragment slot="icon">
      <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
        <CheckmarkFilled class="w-3 h-3 text-primary-600 dark:text-primary-400"/>
      </span>
                </svelte:fragment>
                <ul class="text-base font-normal text-gray-700 dark:text-gray-400 max-w-4xl pb-3">
                    <li>INSCRIPCIÓN: Único pago S/.30.00</li>
                    <li>MENSUALIDAD: S/.30.00</li>
                </ul>
            </TimelineItem>
            <TimelineItem title="Contáctanos">
                <svelte:fragment slot="icon">
      <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
        <CheckmarkFilled class="w-3 h-3 text-primary-600 dark:text-primary-400"/>
      </span>
                </svelte:fragment>
                <ul class="text-base font-normal text-gray-700 dark:text-gray-400 max-w-4xl pb-3">
                    <li>CELULAR: +51 (----------)</li>
                    <li>FIJO: (074) (------)</li>
                </ul>
            </TimelineItem>
        </Timeline>
    </section>
    <Cita>
        "Es momento de planificar y brindar tranquilidad a tu familia"
    </Cita>
</article>
