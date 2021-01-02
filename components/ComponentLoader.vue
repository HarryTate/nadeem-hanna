<template>
  <component :is="getComponent" />
</template>

<script>
import helpers from "~/mixins/helpers";
export default {
    nmae: "ComponentLoader",
    mixins: [helpers],
    props: {
        componentName: {
            type:String,
            required: true
        }
    },
    computed: {
        getComponent() {
            const componentNameUpperCase = this.toPascalCase(this.componentName);
            return () => import(`~/components/partials/${componentNameUpperCase}`);
        }
    }
}
</script>

<style>
    
</style>