<script setup lang="ts">
import { RouterView } from "vue-router"
import CLeft from "~/components/CLeft.vue"
</script>

<template>
    <main
        class="bg-[#e9e9e9] dark:bg-[#888] px-[12%] py-5 min-h-screen grid justify-center items-center"
    >
        <div
            class="main-conntainer border-1 border-solid border-[#d9d9d9] shadow-lg shadow-gray-300 dark:shadow-gray-600 dark:border-none grid grid-cols-4 rounded-3xl"
        >
            <CLeft class="col-span-1 bg-white" />
            <RouterView class="col-span-3 bg-[#E7E8F3]" />
        </div>
        <div class="text-center text-xs text-gray-400 dark:text-gray-600">
            <p>
                Copyright 2022-PRESENT <sup>&copy;</sup>
                <a href="https://github.com/thuongtruong1009/bee-music"
                    >thuongtruong1009</a
                >.
                <a
                    href="https://github.com/thuongtruong1009/bee-music/blob/main/LICENSE"
                    >All rights reserved</a
                >!
            </p>
        </div>
    </main>
</template>

<style>
@import "~/assets/base.css";
@import "~/assets/_variables.css";
</style>
