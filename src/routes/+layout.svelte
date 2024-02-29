<script>
    import "../app.pcss";
    import {Navbar, NavBrand, NavLi, NavUl, NavHamburger} from 'flowbite-svelte';
</script>
<Navbar>
    <NavBrand href="/">
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
    </NavBrand>
    <NavHamburger/>
    <NavUl>
        <NavLi href="/">Home</NavLi>
        <NavLi href="/nosotros">Nosotros</NavLi>
        <NavLi href="/docs/components/navbar">Navbar</NavLi>
        <NavLi href="/pricing">Pricing</NavLi>
        <NavLi href="/contact">Contact</NavLi>
    </NavUl>
</Navbar>
<slot></slot>