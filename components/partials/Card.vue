<template>
  <div class="card relative h-64 group bg-cover bg-no-repeat w-full flex flex-col justify-end rounded-md"  :style="'background-image: linear-gradient(0deg, rgba(var(--color-teal-rgb), 0.3), rgba(var(--color-gray-rgb), 0.3)), url(' + img + ')'"> 
        <h3 class="font-bold mb-2 ml-4 md:ml-2 text-3xl text-white text-center z-10">{{title}}</h3>
        <p class="content-center text-center font-bold transition-max-height duration-300 ease overflow-hidden max-h-0 text-white group-hover:max-h-96 pb-0 px-3 group-hover:pb-3 z-10">{{description}}</p>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        img: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
        }
    },
}
</script>

<style scoped>
    .card::before {
        opacity: 0;
        content: '';
    }
    .card:hover::before {
        background: var(--color-mint-dark);
        position: absolute;
        content: '';
        z-index: 0;
        opacity: .7;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        border-radius: .375rem;
        transition: 300ms ease;
    }
</style>