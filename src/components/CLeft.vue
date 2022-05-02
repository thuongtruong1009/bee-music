<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

import CDarkMode from "./CDarkMode.vue";
</script>

<template>
  <div class="left-nav-container rounded-l-3xl dark:bg-$dark_strong text-gray-500  dark:text-gray-400">
    <div class="p-6">
      <div class="flex justify-between items-center">
        <CDarkMode />
        <i class="fas fa-stream js-hide-navbar cursor-pointer"></i>
      </div>
      <div class="logo py-7">
        <i class="navbar__logo fab fa-forumbee text-orange-300 text-3xl"></i>
        <span class="navbar__primary-text text-orange-300 text-xl">Bee</span><span class="text-xl">music</span>
      </div>
      <nav class="relative">
        <li>
          <a href="#"><i class="fas fa-home"></i>Home</a>
        </li>
        <li>
          <a href="#"><i class="fas fa-chart-line"></i>Trend</a>
        </li>
        <li>
          <a href="#"><i class="far fa-compass"></i>Feed</a>
        </li>
      </nav>

      <nav class="relative">
        <p class="text-[#9ca3af] dark:text-[#9ca3af99] text-xs">Discover</p>
        <ul>
          <li>
            <a href="#"><i class="far fa-newspaper"></i>New and Notable</a>
          </li>
          <li>
            <a href="#"><i class="far fa-calendar-alt"></i>Realese Calendar</a>
          </li>
          <li>
            <a href="#"><i class="fas fa-ticket-alt"></i>Events</a>
          </li>
        </ul>
      </nav>

      <nav class="relative">
        <p class="text-[#9ca3af] dark:text-[#9ca3af99] text-xs">Your Collection</p>
        <ul>
          <li>
            <a href="#"><i class="far fa-heart"></i>Favorite Songs</a>
          </li>
          <li>
            <a href="#"><i class="far fa-user"></i>Artist</a>
          </li>
          <li>
            <a href="#"><i class="far fa-star"></i>Albums</a>
          </li>
        </ul>
      </nav>
    </div>
    <div
      class="navbar-user flex justify-between items-center p-5 border-1 border-solid border-t-[#e9e9e9] dark:border-t-gray-600 border-b-transparent border-l-transparent border-r-transparent rounded-bl-3xl dark:bg-[#1E293B]">
      <a href="">
        <div class="user-avt flex items-center">
          <img src="https://avatars.githubusercontent.com/thuongtruong1009?v=2&s=37" alt="avatar"
            class="rounded-full mr-2" />
          <p class="text-sm cursor-pointer">thuongtruong1009</p>
        </div>
      </a>
      <RouterLink to="/about"><i class="fas fa-chevron-right text-gray-400"></i></RouterLink>
    </div>
  </div>
</template>

<style scoped>
i {
  margin-right: 0.8rem;
  margin-left: 0.2rem;
}

nav p {
  padding: 0.6rem 0.5rem;
}

nav li {
  padding: 0.6rem 0.5rem;
  transition: 0.1s linear;
  border-radius: 0.75rem;
  cursor: pointer;
  font-size: 0.875rem;
}

nav li:hover {
  color: white;
  background: black;
}

nav li::after {
  content: "";
  position: absolute;
  background: transparent;
  width: 2px;
  transform: translateY(-0.5rem);
  height: 2.6rem;
  right: -1.5rem;
}

nav li:hover::after {
  background: black;
}

@media (max-width: 800px) {
  li {
    font-size: 0.75rem;
  }
}
</style>
