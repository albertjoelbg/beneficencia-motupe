<script>
    import {Carousel, Card, Button, Heading, Span, P, Avatar, Blockquote} from 'flowbite-svelte'
    import {ArrowRight, Quotes} from 'carbon-icons-svelte'
    import vasoDeLeche from "$lib/img/vasodeleche.jpg";
    import beca18 from "$lib/img/beca18.png";
    import presidenteBeneficencia from "$lib/img/presidentebeneficencia.png";
    import Titulo from "$lib/components/Titulo.svelte";
    import '@fontsource/montserrat/800.css';

    export let data;
    let images = data.imagenes;
</script>
<svelte:head>
    <title>Sociedad de Beneficencia Motupe</title>
</svelte:head>

<div class="relative overflow-hidden w-full h-full">
    <Heading tag="h1"
             class="mb-4 absolute z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white bg-transparent"
             customSize="text-3xl font-extrabold  md:text-5xl lg:text-6xl">
        <Span gradient class="text-white opacity-90 tipografia-montserrat">Sociedad de Beneficencia de Motupe</Span>
    </Heading>
    <div class="absolute z-30 inset-0 bg-red-700 opacity-50"></div>
    <Carousel {images} duration={3900} let:Indicators>
        <div slot="slide" let:Slide let:index>
            <Slide image={images[index]}/>
        </div>
        <Indicators/>
    </Carousel>
</div>

<Titulo texto="Bienvenidos"/>

<article class="flex justify-center m-4 p-4">
    <Card img={presidenteBeneficencia}>
        <figure class="mx-auto max-w-screen-md text-center">
            <Quotes class="mx-auto mb-3 w-12 h-12 text-gray-400 dark:text-gray-600"/>
            <Blockquote alignment="center" size="2xl">"Servir al pueblo con dedicación y perseverancia."
            </Blockquote>
            <figcaption class="flex justify-center items-center mt-6 space-x-3 rtl:space-x-reverse">
                <div class="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                    <cite class="pe-3 font-medium text-gray-900 dark:text-white">Lic. Jesús Gabriel Reyes
                        Sánchez</cite>
                    <cite class="ps-3 text-sm font-light text-gray-500 dark:text-gray-400">Presidente de la Sociedad
                        de
                        Beneficencia.</cite>
                </div>
            </figcaption>
        </figure>
    </Card>
</article>

<section class="bg-green-100">
    <Titulo texto="Servicios de Protección Social"/>

    <article class="size-1/2 m-2 p-2 flex justify-center gap-5">
        <Card class="m-2" img={vasoDeLeche}>
            <Button class="outline text-white" href="/programas-sociales/vaso-de-leche">
                <h6 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 text-white">Vaso de Leche</h6>
                <ArrowRight class="w-3.5 h-3.5 ms-2 text-white"/>
            </Button>
        </Card>

        <Card img={beca18}>
            <Button class="outline text-white" href="/programas-sociales/beca18">
                <h6 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 text-white">Beca 18</h6>
                <ArrowRight class="w-3.5 h-3.5 ms-2 text-white"/>
            </Button>
        </Card>
    </article>
</section>

<section>
    <Heading tag="h1" class="m-4 p-4" customSize=" text-center text-3xl font-extrabold  md:text-5xl lg:text-6xl">
        <Span gradient>Noticias</Span>
    </Heading>
</section>
