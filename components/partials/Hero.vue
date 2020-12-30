<template>
    <section class="bg-teal-dark hero">
        <div class="container mx-auto md:flex flex-col justify-center pt-32 pb-40">
            <div class="shadow-xl rounded self-center text-center">
                <img class="w-48 mx-auto rounded-full border-solid border-8 border-mint transform hover:scale-125 duration-300" src="~assets/images/nadeem.jpeg" alt="Nadeem Hanna">
                <h1 class="font-bold text-4xl text-white z-10">Nadeem Hanna</h1>
                <p class="text-xl text-white mb-4">Part 2 Architect Assistant</p>  
                <nuxt-link class="rounded-full py-4 px-6 inline-block bg-mint border border-transparent hover:bg-white hover:text-teal-dark hover:border hover:border-solid hover:border-2 hover:border-whit shadow-md text-white font-bold  duration-75 ease-in-out transition transform hover:scale-110" to="/">Get to know me</nuxt-link>
            </div>
            <div class="mx-auto mt-6 space-x-2 text-center">
                <a href="https://www.linkedin.com/in/nadeemhanna" target="_blank" class="text-white">
                    <font-awesome-icon class="text-xl hover:text-linkedin" :icon="['fab', 'linkedin']"/>
                </a>
                <a href="https://twitter.com/nadeemhanna" target="_blank" class="text-white">
                    <font-awesome-icon class="text-lg hover:text-twitter" :icon="['fab', 'twitter']"/>
                </a>
                <a href="mailto:nadeemhanna@gmail.com" target="_blank" class="text-white">
                    <font-awesome-icon class="text-lg hover:text-mint" :icon="['fas', 'envelope']"/>
                </a>
            </div> 
        </div>
    </section>
</template>

<script>

export default {
  name: "Hero",
  computed: {
    bgImg() {
      return require("~/assets/images/city-render.jpg");
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

</style>
