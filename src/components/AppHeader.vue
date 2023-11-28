<script>
export default {
    name: 'AppHeader',
}
</script>
<template>
    <ul id="my_menu" class="d-flex fs-4 h-25">
        <li>
            <router-link data-hover="Home" :class="{ 'active': $route.name === 'home' }" to="/">
                Home
            </router-link>
        </li>
        <li>
            <router-link data-hover="Projects" :class="{ 'active': $route.name === 'projects' }" to="/projects">
                Projects
            </router-link>
        </li>
        <li>
            <router-link data-hover="About" :class="{ 'active': $route.name === 'about' }" to="/about">
                About
            </router-link>
        </li>
        <li>
            <router-link data-hover="Contact" :class="{ 'active': $route.name === 'contacts' }" to="/contacts">
                Contact
            </router-link>
        </li>
    </ul>
</template>


<style lang="scss" scoped>
#my_menu * {
    box-sizing: border-box;
    -webkit-transition: all 0.35s ease;
    transition: all 0.35s ease;
}

#my_menu {

    li {
        display: inline-block;
        list-style: outside none none;
        margin: 0 1.2em;
        overflow: hidden;
    }

    a {
        padding: 0 0.5em 0 0.2em;
        color: white;
        position: relative;
        display: inline-block;
        letter-spacing: 1px;
        margin: 0;
        text-decoration: none;
    }

    a:before,
    a:after {
        position: absolute;
        -webkit-transition: all 0.35s ease;
        transition: all 0.35s ease;
    }

    a:before {
        right: 100%;
        display: block;
        width: 3px;
        height: 100%;
        content: "";
        background-color: #CC2680;
    }

    a:after {
        padding: 0 0.5em 0 0.2em;
        position: absolute;
        right: 100%;
        top: 0;
        content: attr(data-hover);
        color: white;
        white-space: nowrap;
    }

    li:hover a,
    .current a {
        transform: translateX(100%);
    }
}
</style>