<script setup>
import CLeft from "../components/CLeft.vue";
import { ref, computed } from "vue";
import { useCounterStore } from "../stores/counter";
import { storeToRefs } from "pinia";
const numberFormatter = (n) => {
  return (n < 10 ? "0" : "") + n;
};

const isLeftToggleActive = ref(false);
const onLeftToggleClick = () => {
  isLeftToggleActive.value = !isLeftToggleActive.value;
};

const main = useCounterStore();
const { counter } = storeToRefs(main);

// const slider = document.getElementById("myRange2");
// const output = document.getElementById("demo2");
// output.innerHTML = slider.value;

// slider.oninput = function () {
//   output.innerHTML = this.value;
// };
const isPlaying = ref(false);
const onPlaySong = () => {
  isPlaying.value = !isPlaying.value;
};
const isHeart = ref(false);
const onHeart = () => {
  isHeart.value = !isHeart.value;
};
const currentTime = ref(0);
const currentVolume = ref(30);
</script>

<template>
  <div class="between-container">
    <CLeft
      class="absolute h-full w-58 bg-white z-10 top-0 left-0"
      v-if="isLeftToggleActive === true"
    />
    <header class="flex justify-between items-center text-gray-500">
      <i
        class="fas fa-bars text-2xl px-2 hidden"
        @click="onLeftToggleClick"
      ></i>
      <i class="fas fa-arrow-left px-2 cursor-pointer hover:text-black"></i>
      <i class="fas fa-arrow-right px-4 cursor-pointer hover:text-black"></i>

      <div
        class="main-content__search-form flex justify-around px-5 py-2.25 rounded-2xl bg-white w-full"
      >
        <i class="fas fa-search search-btn pr-3"></i>
        <input
          type="text"
          class="search-input outline-none border-none bg-transparent w-full"
          placeholder="Search for artist, songs....."
        />
      </div>
      <i class="fas fa-bars text-2xl px-4 hidden"></i>
    </header>

    <div class="pt-4 pb-1">
      <p class="main-content__des text-[0.6rem]">
        What's hot<span
          ><img src="/img/fire.png" alt="" width="16px" height="17px"
        /></span>
      </p>
    </div>
    <div class="main-content__trend flex justify-between items-center pb-3.5">
      <div class="main-content__trend-title font-semibold">Trending</div>
      <div
        class="main-content__trend-more text-xs flex items-center text-gray-500 rounded-3xl py-1 duration-200 cursor-pointer hover:(text-white bg-black px-2)"
      >
        More
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
    <div
      class="main-content__banner grid grid-rows-3 rounded-lg h-40 relative p-5"
    >
      <p class="main-content__banner-artist text-xs">Artist</p>
      <h4 class="main-content__banner-des">On Top Of The World</h4>
      <div class="flex justify-between items-center">
        <div class="main-content__banner-btn">
          <button
            class="play-btn text-white bg-black rounded-3xl py-1 px-3 text-[0.7rem] cursor-pointer mr-2"
          >
            PLAY
          </button>
          <button
            class="follow-btn text-[0.7rem] rounded-3xl py-1 px-3 border-1 border-solid border-black cursor-pointer"
          >
            FOLLOW
          </button>
        </div>
        <span
          class="main-content__view text-white text-xs text-right font-light"
          >Monthly listeners
          <p class="font-medium">50.000</p>
        </span>
      </div>
    </div>
    <div class="my-playlist">
      <div class="playlist-head pt-5 flex justify-between items-center">
        <h4>My Playlist</h4>
        <a
          class="playlist-more btn-hover hover:(text-white bg-black px-2) rounded-3xl duration-200 cursor-pointer text-xs"
          >Show all</a
        >
      </div>
      <div
        class="playlist-list flex justify-between text-xs pr-3 py-1 text-gray-600"
      >
        <p class="playlist__number -mr-30">#</p>
        <p class="playlist__title">TITLE</p>
        <p class="playlist__artist">ARTIST</p>
        <p class="playlist__time">TIME</p>
      </div>
    </div>

    <div class="overflow-y-scroll h-56 my-1">
      <div
        v-for="i in 10"
        :key="i"
        class="flex justify-between items-center pr-3 py-3 hover:(pl-2 pr-5 bg-white) duration-200 rounded-md cursor-pointer text-gray-500 text-xs"
      >
        <p class="-mr-30">{{ numberFormatter(i) }}</p>
        <p>name song {{ i }}</p>
        <p>artics name {{ i }}</p>
        <p>{{ main.counter }}</p>
      </div>
    </div>

    <div class="play-song p-3 bg-white rounded-lg">
      <div class="play-control flex justify-between items-center">
        <div
          class="play-control__act flex justify-between items-center text-gray-500 w-[18%]"
        >
          <i
            class="far fa-heart"
            @click="onHeart"
            v-show="isHeart === false"
          ></i>
          <i
            class="fas fa-heart text-red-600"
            @click="onHeart"
            v-show="isHeart === true"
          ></i>
          <i class="fas fa-music"></i>
          <i class="fas fa-expand-alt"></i>
        </div>
        <div
          class="play-control__main w-[30%] flex justify-between items-center cursor-pointer"
        >
          <i class="fas fa-redo-alt play-repeat text-gray-500"></i>
          <i class="fas fa-fast-backward play-backward main-icon"></i>
          <i
            class="fas fa-pause-circle"
            @click="onPlaySong"
            v-show="isPlaying === true"
          ></i>
          <i
            class="fas fa-play-circle"
            @click="onPlaySong"
            v-show="isPlaying === false"
          ></i>
          <i class="fas fa-fast-forward play-forward main-icon"></i>
          <i class="fas fa-random shuffle-song text-gray-500"></i>
        </div>
        <div class="play-control__volume w-[30%] flex justify-end items-center">
          <i class="fas fa-volume-down text-gray-500"></i>
          <div class="slidecontainer1 relative">
            <span
              class="w-full h-0.25 bg-red-500 absolute top-1/2 left-0"
            ></span>
            <input
              type="range"
              min="1"
              max="100"
              class="slider1"
              id="myRange1"
              v-model="currentVolume"
            />
          </div>
          <i class="fas fa-volume-up text-gray-500"></i>
        </div>
      </div>
      <div class="play-seekbar flex justify-between items-center">
        <div class="timer__left text-gray-500" id="demo2">
          {{ currentTime }}
        </div>
        <div class="slidecontainer2 relative">
          <span
            class="w-full h-0.75 bg-gray-500 absolute top-1/2 left-0"
          ></span>
          <input
            type="range"
            min="1"
            max="100"
            class="slider2"
            id="myRange2"
            v-model="currentTime"
          />
        </div>
        <audio src="/mp3/ntt.mp3" id="song"></audio>
        <div class="timer__right text-gray-500">3.00</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-content__banner {
  background: linear-gradient(
      to right,
      white,
      rgba(255, 255, 255, 0.85),
      rgba(255, 255, 255, 0)
    ),
    url(../img/banner.jpg) no-repeat center center/cover;
}
i {
  margin: 0 0.2rem;
}
.play-control i {
  cursor: pointer;
}
/* **************************************************** */
.slidecontainer2 {
  width: 85%;
  height: 1.5rem;
}

.slider2 {
  -webkit-appearance: none;
  width: 100%;
  height: 100%;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider2::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 1.4rem;
  height: 1.4rem;
  border: 0;
  background: url("https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/25/000000/external-right-arrow-arrow-flatart-icons-lineal-color-flatarticons-4.png");
  cursor: pointer;
}

.slider2::-moz-range-thumb {
  width: 1.4rem;
  height: 1.4rem;
  border: 0;
  background: url("https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/25/000000/external-right-arrow-arrow-flatart-icons-lineal-color-flatarticons-4.png");
  cursor: pointer;
}
/* ****************************************************** */
.slidecontainer1 {
  width: 80%;
  height: 1.5rem;
}

.slider1 {
  -webkit-appearance: none;
  width: 100%;
  height: 100%;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider1::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 1.4rem;
  height: 1.4rem;
  border: 0;
  background: url("https://img.icons8.com/material-two-tone/24/000000/circled.png");
  cursor: pointer;
  transform: scale(0.6);
}

.slider1::-moz-range-thumb {
  width: 1.4rem;
  height: 1.4rem;
  border: 0;
  background: url("https://img.icons8.com/material-two-tone/24/000000/circled.png");
  cursor: pointer;
  transform: scale(0.6);
}
/* ****************************************************** */

@media (max-width: 800px) {
  .between-container {
    border-radius: 1rem;
  }
  .main-content__trend-more,
  .playlist-more {
    background: black;
    color: white;
    padding: 0.1rem 0.5rem;
  }
  header > i {
    margin: 0 1.25rem;
  }
  .fa-bars {
    display: block;
  }
  .fa-arrow-right {
    padding: 0.5rem;
    margin-left: -0.5rem;
  }
  .fa-arrow-left,
  .fa-arrow-right {
    font-size: 1.4rem;
  }
}
</style>
