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
  async asyncData() {
    try {
        const data = await import(`~/content/pages/home`);
        return {
        data
        }
    } catch(err) {
        return false
    }
  }
}
</script>

