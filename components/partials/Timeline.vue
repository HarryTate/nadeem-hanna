<template>
  <section class="bg-teal py-20">
      <div class="container mx-auto text-2xl md:flex pl-20 md:pl-0" data-aos="fade-down" data-aos-duration="500" data-aos-anchor-placement="bottom-bottom" >
          <h2 class="md:w-1/2 mx-auto text-white font-bold mb-6 text-4xl text-center">My Journey</h2>
      </div>
      <div class="container mx-auto md:flex pl-32 md:pl-0 divide-y" :key="block.date" v-for="block in timeline" data-aos="fade-down" data-aos-anchor-placement="bottom-bottom" data-aos-duration="500">
          <div class="mx-auto border-l-4 border-lightgreen px-4 md:w-1/2 timeline relative py-10 text-md" :data-date="block.date">
              <h2 class="text-white text-2xl font-bold">{{block.title}}</h2>
              <p class="text-white">{{ block.description }}</p>
          </div>
      </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            timeline: [
                {
                    date: "1996",
                    title: "Birth",
                    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo minus dolore quibusdam dolor harum accusantium iusto labore suscipit. Quam, adipisci"
                },
                {
                    date: "2017",
                    title: "Graduation",
                    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo minus dolore quibusdam dolor harum accusantium iusto labore suscipit. Quam, adipisci"
                },
                {
                    date: "2017",
                    title: "Work Experience",
                    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo minus dolore quibusdam dolor harum accusantium iusto labore suscipit. Quam, adipisci"
                },
                {
                    date: "2018-2019",
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
    top: 49%;
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
.timeline:before {
    content: attr(data-date);
    top: 44%;
    position: absolute;
    left: 0;
    transform: translateX(calc(-100% - 15px)); 
    color: white;
    font-weight: bold;
}

</style>