<script>
    import {Card, Button} from 'flowbite-svelte';
    import {Phone, Location, Email} from 'carbon-icons-svelte';
    import Titulo from '$lib/components/Titulo.svelte';
</script>
<svelte:head>
    <title>Contacto</title>
</svelte:head>

<Titulo texto="Contacto"/>
<main class="m-5 p-2 flex gap-5 flex-wrap place-content-center">
    <Card class="text-center" size="sm" padding="sm">
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Ubícanos</h5>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Calle Emiliano Niño Pastor #505, Motupe</p>
        <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <Button>
                <Location class="w-3.5 h-3.5 ml-2 text-white mr-2"/>
                <a href="https://maps.app.goo.gl/NVh5RaBx5su6NK6T6" target="_blank"
                   rel="noopener noreferrer">Mapa</a>
            </Button>
        </div>
    </Card>

    <Card class="text-center" size="sm" padding="sm">
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Teléfono</h5>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Fijo: (074) 426740
        </p>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Celular: ---------</p>
        <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <Button>
                <Phone class="w-3.5 h-3.5 ml-2 text-white mr-2"/>
                <a href="https://api.whatsapp.com/send?phone=#" target="_blank"
                   rel="noopener noreferrer">Whatsapp</a></Button>
        </div>
    </Card>
    <Card class="text-center" size="sm" padding="sm">
        <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Correo</h5>
        <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">-------@beneficencia.org</p>
        <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <Button>
                <Email class="w-3.5 h-3.5 ml-2 text-white mr-2"/>
                <a href="mailto:--------@beneficencia.org" target="_blank">Enviar</a>
            </Button>
        </div>
    </Card>

</main>