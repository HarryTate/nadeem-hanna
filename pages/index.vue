<template>
  <main>
    <Hero /> 
    <Intro />
    <component v-for="(component, index) in data.attributes.blocks" :is="component.template" :key="index"/>
      <div>
        {{data.attributes.blocks[0].heading}}
        {{data.attributes.blocks[0].strapline}}
        {{data.attributes.blocks[0].profile_picture}}
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

