<template>
    <div v-if="loaded">
        {{ cars }}
    </div>
    <div v-else>
        Loading
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "Cars",

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
