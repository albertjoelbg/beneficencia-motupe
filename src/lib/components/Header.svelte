<script>
    import logo from "$lib/img/logobeneficencia.png";
    import {
        Avatar,
        Dropdown,
        DropdownDivider,
        DropdownItem,
        Navbar,
        NavBrand,
        NavHamburger,
        NavLi,
        NavUl
    } from "flowbite-svelte";
    import TextMenu from "$lib/components/TextMenu.svelte";
    import {ChevronDown} from "carbon-icons-svelte";
</script>

<Navbar let:hidden let:toggle rounded
        class="top-0 left-0 z-50 flex place-content-center bg-gradient-to-r from-orange-200 via-teal-100 to-orange-200 fixed shadow-md shadow-gray-400">
    <NavBrand href="/">
        <div class="rtl:space-x-reverse">
            <Avatar src={logo} alt="Logo de la Beneficencia de Motupe" size="lg"/>
        </div>
    </NavBrand>
    <NavHamburger/>
    <NavUl>
        <NavLi class="font-bold lg:text-lg"
               href="/" on:click={hidden?hidden:toggle}>
            <TextMenu texto="INICIO"/>
        </NavLi>
        <NavLi class="cursor-pointer font-bold lg:text-lg">
            <TextMenu texto="NOSOTROS"/>
            <ChevronDown class="w-3 h-3 ms-2 text-primary-800 dark:text-white inline"/>
        </NavLi>
        <Dropdown class="w-50 z-20">
            <DropdownItem class="lg:text-lg text-black" href="/nosotros/historia" on:click={hidden?hidden:toggle}>
                Historia
            </DropdownItem>
            <DropdownDivider/>
            <DropdownItem class="lg:text-lg text-black" href="/nosotros/mision-vision"
                          on:click={hidden?hidden:toggle}>Misión y Visión
            </DropdownItem>
            <DropdownDivider/>
            <DropdownItem class="lg:text-lg text-black" href="/nosotros/organigrama"
                          on:click={hidden?hidden:toggle}>Organigrama
            </DropdownItem>
            <DropdownDivider/>
            <DropdownItem class="lg:text-lg text-black" href="/nosotros/contacto"
                          on:click={hidden?hidden:toggle}>Contacto
            </DropdownItem>
        </Dropdown>
        <NavLi class="cursor-pointer font-bold lg:text-lg">
            <TextMenu texto="SERVICIOS DE PROTECCIÓN SOCIAL"/>
            <ChevronDown class="w-3 h-3 ms-2 text-primary-800 dark:text-white inline"/>
        </NavLi>
        <Dropdown class="w-50 z-20">
            <DropdownItem class="lg:text-lg text-black" href="/servicios-proteccion-social/comedor-institucional"
                          on:click={hidden?hidden:toggle}>Comedor Institucional
            </DropdownItem>
        </Dropdown>
        <NavLi class="cursor-pointer font-bold lg:text-lg">
            <TextMenu texto="SERVICIOS"/>
            <ChevronDown class="w-3 h-3 ms-2 text-primary-800 dark:text-white inline"/>
        </NavLi>
        <Dropdown class="w-50 z-20">
            <DropdownItem class="lg:text-lg text-black" href="/servicios/cementerio"
                          on:click={hidden?hidden:toggle}>Cementerio
            </DropdownItem>
        </Dropdown>
        <NavLi class="font-bold lg:text-lg" href="/noticias" on:click={hidden?hidden:toggle}>
            <TextMenu texto="NOTICIAS"/>
        </NavLi>
    </NavUl>
</Navbar>
