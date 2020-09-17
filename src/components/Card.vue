<template>
    <div class="flex flex-col mx-4 rounded-lg shadow-lg overflow-hidden" data-locator="card">
        <div class="px-6 py-6 bg-white">
            <h3 class="mt-4 mb-3 flex items-baseline text-4xl leading-none font-extrabold" data-locator="name">{{ car.name }}</h3>
            <div class="flex items-center text-sm mb-2" data-locator="seats">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="#6b7280" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
                {{ car.seats }} Seats
            </div>
            <div class="flex items-center text-sm">
                <svg v-if="car.convertible" class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor" data-locator="tick">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <svg v-else class="flex-shrink-0 mr-1.5 h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor" data-locator="cross">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                </svg>
                Convertible
            </div>
        </div>
        <div class="flex-1 px-6 pt-6 pb-8 bg-gray-50">
            <h6 class="mb-1 font-semibold text-indigo-600">Trims</h6>
            <ul class="mt-0 mb-8">
                <li v-for="trim in car.trim_levels" :key="trim.name" class="flex justify-between mb-1" data-locator="trim">
                    <span class="text-gray-800">{{ trim.name }}</span>
                    <span class="ml-10 text-gray-800 font-semibold" data-locator="price">{{ trim.price | sterling }}</span>
                </li>
            </ul>

            <h6 class="mb-1 font-semibold text-indigo-600">Paint</h6>
            <ul class="mt-0 mb-8">
                <li v-for="paint in car.paint" :key="paint.name" class="flex justify-between mb-1" data-locator="paint">
                    <span class="text-gray-800">{{ paint.name }}</span>
                    <span class="ml-10 text-gray-800 font-semibold">{{ paint.price | sterling }}</span>
                </li>
            </ul>

            <h6 class="mb-1 font-semibold text-indigo-600">Wheels</h6>
            <ul class="mt-0">
                <li v-for="wheel in car.wheels" :key="wheel.name" class="flex justify-between mb-1" data-locator="wheel">
                    <span class="text-gray-800">{{ wheel.name }}</span>
                    <span class="ml-10 text-gray-800 font-semibold">{{ wheel.price | sterling }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",

    props: {
        car: {
         type: Object,
         required: true
        }
    },

    filters: {
        sterling (value) {
            if (!value) return '£0.00'

            return `£${value}`
        }
    }
}
</script>
