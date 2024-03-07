<script>
    import "../app.pcss";
    import logo from "$lib/img/logobeneficencia.jpg"
    import {Home, ChevronDown, LogoFacebook, LogoTwitter, LogoYoutube} from 'carbon-icons-svelte';
    import {
        Button, ButtonGroup, Dropdown, DropdownItem, DropdownDivider, Navbar, NavBrand, NavLi, NavUl, NavHamburger,
        Avatar, Footer, FooterLinkGroup, FooterLink, FooterBrand, FooterIcon, FooterCopyright
    }
        from 'flowbite-svelte';
</script>
<Navbar rounded class="bg-primary-100">
    <NavBrand href="/">
        <div class="flex space-x-4 rtl:space-x-reverse">
            <Avatar src={logo} alt="Logo de la Beneficencia de Motupe" size="xl"/>
        </div>
    </NavBrand>
    <ButtonGroup>
        <Button href="/" color="red">
            <Home/>
        </Button>
        <Button href="/beneficencia" outline color="primary">Beneficencia</Button>
        <Button href="/mesa-de-partes" outline color="primary">Mesa de Partes</Button>
    </ButtonGroup>
    <NavHamburger/>
    <NavUl class="rounded-2xl">
        <NavLi class="cursor-pointer">
            Programas Sociales
            <ChevronDown class="w-3 h-3 ms-2 text-primary-800 dark:text-white inline"/>
        </NavLi>
        <Dropdown class="w-44 z-20">
            <DropdownItem href="/programas-sociales/vaso-de-leche">Vaso de leche</DropdownItem>
            <DropdownDivider/>
            <DropdownItem href="/programas-sociales/pension65">Pensión 65</DropdownItem>
            <DropdownDivider/>
            <DropdownItem href="/programas-sociales/beca18">Beca 18</DropdownItem>
            <DropdownDivider/>
            <DropdownItem href="/programas-sociales/bonos">Bonos</DropdownItem>
        </Dropdown>
        <NavLi class="cursor-pointer">
            Patrimonio Cultural
            <ChevronDown class="w-3 h-3 ms-2 text-primary-800 dark:text-white inline"/>
        </NavLi>
        <Dropdown class="w-44 z-20">
            <DropdownItem>Cerro Cruz de Chalpón</DropdownItem>
            <DropdownDivider/>
            <DropdownItem>Jaguey Negro</DropdownItem>
            <DropdownDivider/>
            <DropdownItem>Cerro de la Vieja</DropdownItem>
            <DropdownDivider/>
            <DropdownItem>Cerro Rajado</DropdownItem>
        </Dropdown>
        <NavLi href="/noticias">Noticias</NavLi>
        <NavLi href="/contacto">Contacto</NavLi>
        <NavLi href="/ayuda">Ayuda</NavLi>
    </NavUl>
</Navbar>

<slot></slot>


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