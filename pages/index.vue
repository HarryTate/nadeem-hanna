<template>
  <main>
    <Hero /> 
    <Intro />
    <div>
      {{data.attributes.blocks[0].template}}
    </div>
    <Timeline />
    <Projects />
    <Skills />
  </main>
</template>

<script>

export default {
  name: "Home",
  computed: {
    bgImg() {
      return require("~/assets/images/city-render.jpg");
    }
  },
  async asyncData() {
    try {
        const data = await import(`~/content/pages/home.md`);
        return {
        data
        }
    } catch(err) {
        return false
    }
  }
}
</script>

