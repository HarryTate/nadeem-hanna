<template>
  <footer class="bg-teal-dark">
    <div class="py-10 mx-auto container text-white">
      <div class="flex flex-wrap -mx-3 overflow-hidden">
        <div class="my-3 px-3 w-full overflow-hidden md:w-1/2">
          <h3 class="text-xl font-bold">Explore</h3>
          <ul></ul>
        </div>
        <div class="my-3 px-3 w-full overflow-hidden md:w-1/2">
          <h3 class="text-xl font-bold">Social</h3>
          <div class="mx-auto mt-3 space-x-2">
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
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style>

</style>