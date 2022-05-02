<template>
  <div
    class="mode-toggle flex items-center"
    :class="isDark ? 'justify-end bg-white' : 'justify-start bg-[#262626]'"
    @click="onThemeChange"
  >
    <div class="toggle">
      <div
        class="dark-mode"
        :class="isDark ? 'before:bg-black' : 'before:bg-[#a5abba]'"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isDark = ref<boolean>(false);

const onThemeChange = () => {
  isDark.value = !isDark.value;

  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
};
</script>

<style scoped>
.mode-toggle {
  padding: 0.25rem;
  width: 3rem;
  height: 1.5rem;
  min-width: 2.5rem;
  min-height: 1.5rem;
  border-radius: 1.75rem;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  transition: 0.5s linear;
}

.mode-toggle .toggle {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  box-shadow: inset 0 0 0 2px #a5abba;
}

.mode-toggle .toggle .dark-mode {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;
}

.mode-toggle .toggle .dark-mode:before {
  content: "";
  position: relative;
  width: 100%;
  height: 100%;
  left: 50%;
  float: left;
  transition: border-radius 0.5s ease, width 0.5s ease, height 0.5s ease,
    left 0.5s ease, transform 0.5s ease;
}
</style>
