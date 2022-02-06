<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="bg-[#DBDBDB] px-[12%] py-5 min-h-screen">
    <RouterView />
  </div>
</template>

<style scoped>
@media (max-width: 800px) {
  div{
    padding: 1.25rem;
  }
}
</style>
