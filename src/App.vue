<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="bg-[#DBDBDB] px-[12%] py-5 min-h-screen">
    <RouterView />
  </div>
</template>

<style>
@import "@/assets/base.css";

/* #app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
} */
</style>
