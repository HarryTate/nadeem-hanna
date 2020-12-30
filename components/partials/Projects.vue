<template>
<section class="py-20" >
    <div class="container mx-auto mb-4" data-aos="fade-down" data-aos-duration="500" data-aos-anchor-placement="bottom-bottom" >
        <h2 class="font-bold text-4xl text-center mb-6">Projects</h2>
    </div>
    <div class="container mx-auto" data-aos="fade-down" data-aos-duration="500" data-aos-anchor-placement="bottom-bottom" >
        <div class="flex flex-wrap -mx-2 px-2 md:px-0">
            <div class="group my-2 px-2 w-full lg:w-1/3" v-for="project in projects" :key="project.id">
                <Card :img="project.img" :title="project.title" :description="project.description" class="shadow-lg"/>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import Card from "./Card";

export default {
    name: "Projects",
    components: {Card},
    data() {
        return {
            projects: [
                {
                    id: 1,
                    img: require("assets/images/city-render.jpg"), 
                    title: "Hulme",
                    description: "A neighbourhood design of an area within Hulme, Manchester."
                },
                {
                    id: 2,
                    img: "https://picsum.photos/500/300",
                    title: "reIMAGN pavilion",
                    description: "The first project within my 6th-year thesis was the design of the Serpentine Pavilion."
                },
                {
                    id: 3,
                    img: "https://picsum.photos/500/300",
                    title: "Gin Distillery",
                    description: " A Gin Distillery, bar and restaurant within six grade II* listed rail arches"
                },
            ]
        }
    },

}
</script>

<style>

</style>