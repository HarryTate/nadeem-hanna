<template>
  <section class="py-20 text-black">
      <div class="container mx-auto text-center" data-aos="fade-down" data-aos-duration="500" data-aos-anchor-placement="bottom-bottom" >
          <h2 class="font-bold text-4xl mb-10">Skills</h2>
      </div>
      <div class="container mx-auto md:flex md:flex-wrap" data-aos="fade-down" data-aos-duration="500" data-aos-anchor-placement="bottom-bottom" >
        <div class="w-full px-4 md:px-0 md:w-1/2 lg:w-1/4 mb-16" v-for="skill in skills" :key="skill.id">
            <font-awesome-icon class="text-5xl text-mint mb-3 block" :icon="['fab', 'python']"/>
            <h3 class="font-bold text-xl">{{skill.title}}</h3>
            <p>{{skill.description}}</p>
        </div>
      </div>
  </section>
</template>

<script>
export default {
    name: "Skills",
    data() {
        return {
            skills: [
                {   id: 1,
                    img: "~assets/images/skills/",
                    title: "Drawing",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repellat alias deserunt qui! Minus.",

                },
                {   id: 2,
                    img: "~assets/images/skills/",
                    title: "Sketching",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repellat alias deserunt qui! Minus.",
                },
                {   id: 3,
                    img: "~assets/images/skills/",
                    title: "Python",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repellat alias deserunt qui! Minus.",
                },
                {   id: 4,
                    img: "~assets/images/skills/",
                    title: "Straigt lines",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repellat alias deserunt qui! Minus.",
                },
                {   id: 5,
                    img: "~assets/images/skills/",
                    title: "Curved lines",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repellat alias deserunt qui! Minus.",
                },
                {   id: 6,
                    img: "~assets/images/skills/",
                    title: "Small Houses",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repellat alias deserunt qui! Minus.",
                },
                {   id: 7,
                    img: "~assets/images/skills/",
                    title: "Car parks",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repellat alias deserunt qui! Minus.",
                },
                {   id: 8,
                    img: "~assets/images/skills/",
                    title: "Big Houses",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repellat alias deserunt qui! Minus.",
                }
            ]
        }
    }

}
</script>

<style>

</style>