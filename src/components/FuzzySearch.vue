<template>
    <div class="flex bg-white shadow-md p-1 rounded-md shadow-md flex-wrap">
        <span
            class="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer">
            BTC
        </span>
        <span
            class="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer">
            DOGE
        </span>
        <span
            class="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer">
            BCH
        </span>
        <span
            class="inline-flex items-center px-2 m-1 rounded-md text-xs font-medium bg-gray-300 text-gray-800 cursor-pointer">
            CHD
        </span>
    </div>
</template>

<script setup>
import { getAllCurrencyList } from './api.js'
import Fuse from 'fuse.js'


onMounted(() => {
    console.log(data.Data)

    let structuredData = [];

    for (let key in data.Data) {
        structuredData.push({
            name: key,
            isTrading: data.Data[key].IsTrading,
        });
    }
    const fuse = new Fuse(data, {
        keys: ["name"],
        includeScore: true
    })

    this.dataIsLoaded = true
})

</script>