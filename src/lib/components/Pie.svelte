<script>
    import {Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup} from "flowbite-svelte";
    import {LogoFacebook, LogoTwitter, LogoYoutube} from "carbon-icons-svelte";
</script>
<Footer class="mt-4" footerType="sitemap">
    <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Institucionalidad</h2>
            <FooterLinkGroup ulClass="text-gray-300">
                <FooterLink liClass="mb-4" href="/">Portal de Transparencia</FooterLink>
                <FooterLink liClass="mb-4" href="/">Reglamento Interno</FooterLink>
                <FooterLink liClass="mb-4" href="/">Normativas Vigentes</FooterLink>
            </FooterLinkGroup>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold uppercase text-gray-400">Redes Sociales</h2>
            <FooterLinkGroup ulClass="text-gray-300">
                <FooterLink liClass="mb-4" href="/">Youtube</FooterLink>
                <FooterLink liClass="mb-4" href="/">Twitter</FooterLink>
                <FooterLink liClass="mb-4" href="https://web.facebook.com/sociedad.motupe">Facebook</FooterLink>
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
                <FooterLink liClass="mb-4" href="/noticias">Noticias</FooterLink>
                <FooterLink liClass="mb-4" href="/">Logros</FooterLink>
            </FooterLinkGroup>
        </div>
    </div>
    <div class="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
        <FooterCopyright spanClass="text-sm text-gray-300 sm:text-center" href="/"
                         by="Sociedad de Beneficencia Motupe"/>
        <div class="flex mt-4 space-x-6 rtl:space-x-reverse sm:justify-center md:mt-0">
            <FooterIcon href="https://web.facebook.com/sociedad.motupe">
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