<template>
  <main>
    <Hero /> 
    <Intro />
    <Timeline />
    <Projects />
    <Skills />
  </main>
</template>

<script>

export default {
  computed: {
    bgImg() {
      return require("~/assets/images/city-render.jpg");
    }
  },
}
</script>

