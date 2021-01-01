<template>
  <section class="bg-gray py-20 text-white">
      <div class="container mx-auto">
        <div class="text-2xl mb-10" data-aos="fade-down" data-aos-duration="500" data-aos-anchor-placement="bottom-bottom" >
            <h2 class="font-bold text-4xl">My Journey so far</h2>
        </div>
        <div class="md:flex divide-y" :key="block.date" v-for="block in timeline" data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" data-aos-duration="500">
            <div class="border-l-4 border-lightgreen px-4 timeline relative py-10 text-md" :data-date="block.date">
                <h2 class="text-2xl font-bold">{{block.title}}</h2>
                <span class="font-bold">{{block.date}}</span>
                <p>{{ block.description }}</p>
            </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
    name: "Timeline",
    data() {
        return {
            timeline: [
                {
                    date: "2017 - 2018",
                    title: "Graduation",
                    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo minus dolore quibusdam dolor harum accusantium iusto labore suscipit. Quam, adipisci"
                },
                {
                    date: "2018 - 2019",
                    title: "Work Experience",
                    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo minus dolore quibusdam dolor harum accusantium iusto labore suscipit. Quam, adipisci"
                },
                {
                    date: "2019 - 2020",
                    title: "Masters",
                    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo minus dolore quibusdam dolor harum accusantium iusto labore suscipit. Quam, adipisci"
                },
                {
                    date: "2020 - Present",
                    title: "PLP Architects",
                    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo minus dolore quibusdam dolor harum accusantium iusto labore suscipit. Quam, adipisci"
                }
            ]
        }
    }
}
</script>

<style>
.timeline:after {
    content: "";
    top: 50%;
    box-shadow: 0 0 0 4px #8ac587;
    width: 6px;
    height: 6px;
    border-radius: 10px;
    background: #313534;
    position: absolute;
    left: -5px;
    color: white;
    font-weight: bold;
    font-size: 2rem;
}

</style>