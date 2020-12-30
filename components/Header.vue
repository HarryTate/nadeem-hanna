<template>
  <header class="px-10 lg:px-0 flex h-16 items-center shadow-xs sticky top-0 bg-teal-dark text-gray z-20">
    <div class="container mx-auto flex justify-between">
      <div class="text-xl font-extrabold text-white">
        Nadeem Hanna
      </div>
      <nav class="flex items-center">
        <button class="text-white text-bold" @click="toggleMenu">
          <img class="w-6" src="~assets/icons/menu.svg" alt="Hamburger Navigation Icon">
          </button>
      </nav>
    </div>
    <NavDrawer :isVisible="showMenu" @closeNav="toggleMenu" />
  </header>
</template>

<script>
import NavDrawer from "./NavDrawer"
export default {
  name: "Header",
  components: {NavDrawer},
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      if(this.showMenu) {
        document.body.classList.add("overflow-hidden")
      } else {
        document.body.classList.remove("overflow-hidden")
      }
    }
  }
}
</script>

<style>

</style>