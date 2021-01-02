<template>
  <main>
    <div v-for="(component, i) in data.attributes.blocks" :key="i" >
      <component-loader :component-name="component.template" />
    </div>
    <Timeline />
    <Projects />
    <Skills />
  </main>
</template>

<script>
import ComponentLoader from '~/components/ComponentLoader.vue';

export default {
  components: { ComponentLoader },
  name: "Home",
  computed: {
    bgImg() {
      return require("~/assets/images/city-render.jpg");
    },
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
  },
}
</script>

