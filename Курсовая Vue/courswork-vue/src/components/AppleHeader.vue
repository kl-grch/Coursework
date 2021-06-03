<template>
<nav :style="{backgroundColor: background}">
    <router-link v-for="tab in tabs" :key="tab.path" :to="tab.path" :style="{fontSize: size}">
{{tab.name}}
    </router-link>
</nav>
</template>

<script>
export default {
    name: "AppleHeader",
    props: {
    background: String,
    tabs: Array,
    size: String
}
}
</script>

<style scoped>
.router-link-active{ /*стили для активной вкладки*/
    background-color: whitesmoke;
    color: black;
}

nav {
    display: flex;
    justify-content: space-around;
}

nav a {
    flex: 1;
    text-decoration: none;
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
    color: white;
}

</style>