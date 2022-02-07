<script setup lang="ts">
import CLeft from "../components/CLeft.vue";
import CBetween from "../components/CBetween.vue";
import CRight from "../components/CRight.vue";
</script>

<template>
  <main
    class="main-conntainer border-1 border-bg-gray-300 shadow-md shadow-gray-500/50 grid grid-cols-4 rounded-3xl"
  >
    <CLeft class="col-span-1 bg-white" />
    <CBetween class="col-span-2 bg-[#E7E8F3] pl-7 pr-3 py-5" />
    <CRight class="col-span-1 bg-[#E7E8F3] p-5" />
  </main>
</template>

<style scoped>
@media (max-width: 800px) {
  .left,
  .right {
    display: none;
  }
  main {
    grid-template-columns: 0 1fr 0;
    border-radius: 1rem;
  }
}
</style>
