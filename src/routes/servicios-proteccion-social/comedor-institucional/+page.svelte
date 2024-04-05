<script>
    import Titulo from '$lib/components/Titulo.svelte';
    import Subtitulo from '$lib/components/Subtitulo.svelte';
    import {Timeline, TimelineItem} from 'flowbite-svelte';
    import CheckmarkFilled from "carbon-icons-svelte/lib/CheckmarkFilled.svelte";
    import {Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell} from 'flowbite-svelte';
    import {Gallery} from 'flowbite-svelte';

    export let data;
    let images = data.imagenes;
</script>
<svelte:head>
    <title>Comedor Institucional</title>
</svelte:head>
<Titulo texto="Comedor Institucional"/>
<Subtitulo>
    "Señor de la Divina Misericordia"
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
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 max-w-4xl">La Sociedad de
                    Beneficencia
                    de Motupe cuenta con un Comedor Institucional, "Señor de la Divina Misericordia", que atiende
                    a personas en situación económica de pobreza y probreza extrema, con desayunos y almuerzos a las
                    beneficiarios que viven en la zona urbana, y también se les otorga alimentos en crudo a los
                    beneficiarios de las zonas rurales o alejadas de la ciudad.
                </p>
            </TimelineItem>
            <TimelineItem title="Beneficiarios">
                <svelte:fragment slot="icon">
      <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
        <CheckmarkFilled class="w-3 h-3 text-primary-600 dark:text-primary-400"/>
      </span>
                </svelte:fragment>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400 max-w-4xl">Contamos con 200
                    beneficiarios en
                    total a los cuales 50 llegan a diario a consumir su desayuno y almuerzo, y 150 beneficiarios que
                    se les entrega en crudo.</p>
            </TimelineItem>
            <TimelineItem title="Requisitos">
                <svelte:fragment slot="icon">
      <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
        <CheckmarkFilled class="w-3 h-3 text-primary-600 dark:text-primary-400"/>
      </span>
                </svelte:fragment>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400 max-w-4xl">Los requisitos para ser
                    beneficiario del Comedor Institucional, son:</p>
                <ul>
                    <li>Estar registrado en el SISFOH con una situación económica de pobreza o pobreza extrema</li>
                    <li>No ser beneficiario de otro programa similar en alguna otra institución del estado</li>
                </ul>
            </TimelineItem>
            <TimelineItem title="Horario">
                <svelte:fragment slot="icon">
      <span class="flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900">
        <CheckmarkFilled class="w-3 h-3 text-primary-600 dark:text-primary-400"/>
      </span>
                </svelte:fragment>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400 max-w-4xl pb-3">Nuestro horario de
                    atención es de lunes a viernes</p>
                <Table>
                    <TableHead>
                        <TableHeadCell>Comida</TableHeadCell>
                        <TableHeadCell>Hora</TableHeadCell>
                    </TableHead>
                    <TableBody class="divide-y">
                        <TableBodyRow>
                            <TableBodyCell>Desayuno</TableBodyCell>
                            <TableBodyCell>8:30 am - 10:30 am</TableBodyCell>
                        </TableBodyRow>
                        <TableBodyRow>
                            <TableBodyCell>Almuerzo</TableBodyCell>
                            <TableBodyCell>12:00 pm - 2:00 pm</TableBodyCell>
                        </TableBodyRow>
                    </TableBody>
                </Table>

            </TimelineItem>
        </Timeline>

    </section>
</article>

<section class="p-2 mx-2 mb-10 md:p-4 md:mx-4">
    <Gallery items={images} class="gap-4 grid-cols-2 md:grid-cols-3"/>
</section>
