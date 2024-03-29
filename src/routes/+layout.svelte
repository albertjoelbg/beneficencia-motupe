<script>
    import "../app.pcss";
    import logo from "$lib/img/logobeneficencia.png";
    import {ChevronDown, LogoFacebook, LogoTwitter, LogoYoutube} from 'carbon-icons-svelte';
    import {
        Dropdown, DropdownItem, DropdownDivider, Navbar, NavBrand, NavLi, NavUl, NavHamburger,
        Avatar, Footer, FooterLinkGroup, FooterLink, FooterIcon, FooterCopyright
    }
        from 'flowbite-svelte';
    import TextMenu from "$lib/components/TextMenu.svelte";
</script>

<div class="relative overflow-hidden">
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
                <TextMenu texto="PROGRAMAS SOCIALES"/>
                <ChevronDown class="w-3 h-3 ms-2 text-primary-800 dark:text-white inline"/>
            </NavLi>
            <Dropdown class="w-50 z-20">
                <DropdownItem class="lg:text-lg text-black" href="/programas-sociales/comedor-social"
                              on:click={hidden?hidden:toggle}>Comedor Social
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

    <main class="w-full my-0 mx-auto box-border pt-24">
        <slot></slot>
    </main>

    <Footer class="mt-4" footerType="sitemap">
        <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Institucionalidad</h2>
                <FooterLinkGroup ulClass="text-gray-300">
                    <FooterLink liClass="mb-4" href="/">Portal de Transparencia</FooterLink>
                    <FooterLink liClass="mb-4" href="/">Reglamento Interno</FooterLink>
                    <FooterLink liClass="mb-4" href="/">Normativas Vigentes</FooterLink>
                    <FooterLink liClass="mb-4" href="/">Blog</FooterLink>
                </FooterLinkGroup>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Redes Sociales</h2>
                <FooterLinkGroup ulClass="text-gray-300">
                    <FooterLink liClass="mb-4" href="/">Youtube</FooterLink>
                    <FooterLink liClass="mb-4" href="/">Twitter</FooterLink>
                    <FooterLink liClass="mb-4" href="/">Facebook</FooterLink>
                </FooterLinkGroup>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Contacto</h2>
                <FooterLinkGroup ulClass="text-gray-300">
                    <FooterLink liClass="mb-4" href="/">Correo Institucional</FooterLink>
                    <FooterLink liClass="mb-4" href="/">Teléfono</FooterLink>
                    <FooterLink liClass="mb-4" href="/">Whatsapp</FooterLink>
                </FooterLinkGroup>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Novedades</h2>
                <FooterLinkGroup ulClass="text-gray-300">
                    <FooterLink liClass="mb-4" href="/">Eventos</FooterLink>
                    <FooterLink liClass="mb-4" href="/">Noticias</FooterLink>
                    <FooterLink liClass="mb-4" href="/">Logros</FooterLink>
                    <FooterLink liClass="mb-4" href="/">Incentivo Cultural</FooterLink>
                </FooterLinkGroup>
            </div>
        </div>
        <div class="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
            <FooterCopyright spanClass="text-sm text-gray-300 sm:text-center" href="/"
                             by="Sociedad de Beneficencia Motupe"/>
            <div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center md:mt-0">
                <FooterIcon href="/">
                    <LogoFacebook
                            class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"/>
                </FooterIcon>
                <FooterIcon href="/">
                    <LogoTwitter
                            class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"/>
                </FooterIcon>
                <FooterIcon href="/">
                    <LogoYoutube
                            class="w-4 h-4 text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white"/>
                </FooterIcon>
            </div>
        </div>
    </Footer>
</div>
