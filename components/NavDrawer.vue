<template>
    <aside class="bg-gray text-white w-screen h-screen fixed inset-0 transform duration-500 ease" :class="isVisible ? '-translate-y-0' : '-translate-y-full'">
        <span class="inline-block absolute font-bold top-5 right-20 text-3xl cursor-pointer" @click="navDrawerToggle">X</span>
        <nav class="w-full h-full flex content-center justify-center">
            <ul class="text-white flex flex-col justify-center content-center text-center font-bold text-4xl space-y-3">
                <li><nuxt-link class="font-bold text-white" to="/about">about</nuxt-link></li>
                <li><nuxt-link class="font-bold text-white" to="/projects">projects</nuxt-link></li>
                <li><nuxt-link class="font-bold text-white" to="/portfolio">porfolio</nuxt-link></li>
            </ul>
        </nav>
    </aside>
</template>

<script>
export default {
    name: "NavDrawer",
    props:{
        isVisible: {
            type: Boolean
        },
    },
    methods: {
            navDrawerToggle(e) {
                this.$emit("closeNav", e);
            }
        }
}
</script>

<style>

</style>