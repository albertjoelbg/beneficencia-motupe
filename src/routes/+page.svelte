<script>
    import {Carousel, Card, Button, Heading, Span, Blockquote} from 'flowbite-svelte'
    import {Quotes} from 'carbon-icons-svelte'
    import comedor from "$lib/img/comedor-institucional/comedor-institucional-4.jpg";
    import noticia1 from "$lib/img/noticias/mondragonsinviolencia/mondragonsinviolencia-1.jpg";
    import noticia2 from "$lib/img/noticias/diadelninoperuano/diadelninoperuano-1.jpg";
    import presidenteBeneficencia from "$lib/img/presidentebeneficencia.png";
    import serfin from "$lib/img/servicios/serfin.jpg"
    import Titulo from "$lib/components/Titulo.svelte";
    import '@fontsource/poppins/500.css';
    import '@fontsource/poppins/600.css';
    import '@fontsource/poppins/700.css';

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
        <Span gradient class="text-gray-100 opacity-90 tipografia-poppins">SOCIEDAD DE BENEFICENCIA DE
            MOTUPE</Span>
    </Heading>
    <div class="absolute z-30 inset-0 bg-gradient-to-t from-blue-600 via-gray-800 to-red-600 opacity-30"></div>
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
            <Blockquote alignment="center" size="2xl">"Si no se vive para los demás, la vida carece de sentido."
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

<section class="bg-gradient-to-tl from-green-100 to-white p-3">
    <Titulo texto="Servicios de Protección Social"/>

    <article class="size-2/3 m-auto p-2 flex justify-center gap-5">
        <Card class="m-2 text-center" img={comedor}>
            <Button class="outline text-white" href="/servicios-proteccion-social/comedor-institucional">
                <h6 class="text-md font-semibold tracking-tight text-gray-900 text-white md:text-xl">Comedor
                    Institucional</h6>

            </Button>
        </Card>
    </article>
</section>

<section class="bg-gradient-to-tl from-gray-100 to-white p-3">
    <Titulo texto="Servicios"/>

    <article class="size-2/3 mx-auto p-2 flex justify-center gap-5">
        <Card class="m-2 text-center" img={serfin}>
            <Button class="outline text-white" href="/servicios/servicio-funerario-integral">
                <h6 class="text-md font-semibold tracking-tight text-gray-900 text-white md:text-xl">Servicio
                    Funerario Integral</h6>
            </Button>
        </Card>
    </article>
</section>

<section class="bg-gradient-to-tl from-green-100 to-white p-3">
    <Titulo texto="Noticias"/>

    <article class="size-2/3 mx-auto p-2 flex justify-center gap-5">
        <Card class="m-2 text-center" img={noticia1}>
            <Button class="outline text-white" href="/noticias/mondragonsinviolencia">
                <h6 class="text-md font-semibold tracking-tight text-gray-900 text-white md:text-xl">Mongragón sin
                    Violencia</h6>
            </Button>
        </Card>

        <Card class="m-2 text-center" img={noticia2}>
            <Button class="outline text-white" href="/noticias/diadelninoperuano">
                <h6 class="text-md font-semibold tracking-tight text-gray-900 text-white md:text-xl">Día del niño
                    peruano</h6>
            </Button>
        </Card>
    </article>
</section>
