<template>
    <div class="bg-gray-900">
        <div class="pt-12 sm:pt-16 lg:pt-24">
            <div class="max-w-screen-xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <div class="max-w-3xl mx-auto space-y-2 lg:max-w-none">
                    <h1 class="text-3xl leading-9 font-extrabold text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
                        The right car for you
                    </h1>
                    <p class="text-xl leading-7 text-gray-300">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sequi unde repudiandae natus.
                    </p>
                </div>
            </div>
        </div>

        <div class="mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
            <div class="relative">
                <div class="absolute inset-0 h-3/4 bg-gray-900" />
                <div class="relative z-10 mx-auto px-4 lg:px-8">
                    <div class="flex justify-center mx-auto space-y-4 lg:space-y-0">
                        <Card v-for="car in cars" :key="car.id" :car="car" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Card from "../components/Card"

export default {
    name: "Cars",

    components: {
        Card
    },

    data () {
        return {
            loaded: false,
            cars: []
        }
    },

    created () {
        this.fetchCars().then(() => this.loaded = true)
    },

    methods: {
        async fetchCars () {
            axios.get('https://demo-api.getmygrades.co.uk/cars')
                .then(response => this.cars = response.data)
        }
    }
}
</script>
