<script setup>
import { ref } from "vue";
const isDark = ref(false);
const onDarkMode = () => {
  if (isDark.value == false) {
    isDark.value = true;
  } else {
    isDark.value = false;
  }
};
</script>

<template>
  <div
    class="left-nav-container rounded-l-3xl divide-1 divide-solid divide-y divide-gray-300"
  >
    <div class="p-6">
      <div class="flex justify-between items-center">
        <div
          class="mode-toggle"
          @click="onDarkMode"
          :class="{ 'dark-mode': isDark }"
        >
          <div class="toggle" :class="{ 'dark-mode': isDark }">
            <div
              id="dark-mode"
              type="checkbox"
              :class="{ 'dark-mode': isDark }"
            ></div>
          </div>
        </div>
        <i class="fas fa-stream js-hide-navbar cursor-pointer"></i>
      </div>
      <div class="logo py-3">
        <i class="navbar__logo fab fa-forumbee text-orange-300 text-3xl"></i>
        <span class="navbar__primary-text text-orange-300 text-xl">Bee</span
        ><span class="text-xl">music</span>
      </div>
      <div class="navbar-content text-gray-500 pl-1 relative">
        <nav>
          <li class="navbar-content__icon">
            <a href="#"><i class="fas fa-home"></i>Home</a>
          </li>
          <li class="navbar-content__icon">
            <a href="#"><i class="fas fa-chart-line"></i>Trend</a>
          </li>
          <li class="navbar-content__icon">
            <a href="#"><i class="fas fa-compass"></i>Feed</a>
          </li>
        </nav>

        <nav>
          <p class="navbar-content__title">Discover</p>
          <ul>
            <li class="navbar-content__icon">
              <a href="#"><i class="far fa-newspaper"></i>New and Notable</a>
            </li>
            <li class="navbar-content__icon">
              <a href="#"
                ><i class="fas fa-calendar-alt"></i>Realese Calendar</a
              >
            </li>
            <li class="navbar-content__icon">
              <a href="#"><i class="fas fa-ticket-alt"></i>Events</a>
            </li>
          </ul>
        </nav>

        <nav>
          <p class="navbar-content__title">Your Collection</p>
          <ul>
            <li class="navbar-content__icon">
              <a href="#"><i class="fas fa-heart"></i>Favorite Songs</a>
            </li>
            <li class="navbar-content__icon">
              <a href="#"><i class="fas fa-users"></i>Artist</a>
            </li>
            <li class="navbar-content__icon">
              <a href="#"><i class="fas fa-star"></i>Albums</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="navbar-user flex justify-between items-center mt-2 py-5 px-4">
      <div class="user-avt flex items-center">
        <img
          src="https://avatars.githubusercontent.com/thuongtruong1009?v=2&s=37"
          alt=""
          class="rounded-full mr-2"
        />
        <p class="text-sm cursor-pointer">thuongtruong1009</p>
      </div>
      <a href="/about"><i class="fas fa-chevron-right"></i></a>
    </div>
  </div>
</template>

<style scoped>
.mode-toggle {
  position: relative;
  padding: 0;
  width: 44px;
  height: 24px;
  min-width: 36px;
  min-height: 20px;
  background-color: #262626;
  border: 0;
  border-radius: 24px;
  outline: 0;
  overflow: hidden;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-touch-callout: none;
  appearance: none;
  transition: background-color 0.5s ease;
}
.mode-toggle .toggle {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid transparent;
  box-shadow: inset 0 0 0 2px #a5abba;
  overflow: hidden;
  transition: transform 0.5s ease;
}
.mode-toggle .toggle #dark-mode {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 50%;
}
.mode-toggle .toggle #dark-mode:before {
  content: "";
  position: relative;
  width: 100%;
  height: 100%;
  left: 50%;
  float: left;
  background-color: #a5abba;
  transition: border-radius 0.5s ease, width 0.5s ease, height 0.5s ease,
    left 0.5s ease, transform 0.5s ease;
}
.dark-mode .mode-toggle {
  background-color: #333;
}
.dark-mode .mode-toggle .toggle {
  transform: translateX(19px);
}
.dark-mode .mode-toggle .toggle #dark-mode:before {
  border-radius: 50%;
  width: 150%;
  height: 85%;
  left: 40%;
  transform: translate(-10%, -40%), rotate(-35deg);
}
li:hover {
  color: white;
  background: black;
}
i {
  margin-right: 0.8rem;
  margin-left: 0.2rem;
}

.navbar-content li {
  margin: 0.1rem 0;
  padding: 0.6rem 0.3rem;
  list-style: none;
  transition: 0.1s linear;
  border-radius: 0.75rem;
  cursor: pointer;
}
.navbar-content li::after {
  content: "";
  position: absolute;
  background: transparent;
  width: 2px;
  transform: translateY(-0.5rem);
  height: 2.6rem;
  right: -1.5rem;
}
.navbar-content li:hover::after {
  background: black;
}
@media (max-width: 800px) {
  li {
    font-size: 0.75rem;
  }
}
</style>
