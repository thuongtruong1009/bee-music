<script setup>
import CLeft from "../components/CLeft.vue"
import { ref, onMounted } from "vue"
import { useCounterStore } from "../stores/counter"
import { formatNumber } from "../utils/format"
import CInputRange from "./CInputRange.vue"

const main = useCounterStore()

const isLoading = ref(true)
onMounted(async () => {
    await fetch(
        "https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST?fbclid=IwAR3lI6UNrh62He0eIZeVzJLiQ7fnUkqX7HAKUmrYwxiToUEuHxIXO8PDOwI"
    )
        .then((response) => response.json())
        .then((data) => {
            main.results = data["songs"]["top100_VN"][0]["songs"]
            isLoading.value = false
        })
})

const isLeftToggleActive = ref(false)
const onLeftToggleClick = () => {
    isLeftToggleActive.value = !isLeftToggleActive.value
}

const isHeart = ref(false)
const onHeart = () => {
    isHeart.value = !isHeart.value
}
const currentVolume = ref(30)
const currentTime = ref(10)
const isPlaying = ref(false)
const onPlaySong = () => {
    isPlaying.value = !isPlaying.value
}

const song = ref("")
const loadSound = (sound) => {
    if (sound) {
        song.value = String(sound)
        isPlaying.value = true

        // this.$refs.audioPlayer.play();
    }
}
</script>

<template>
    <div class="between-container dark:bg-$dark_weak">
        <CLeft
            v-if="isLeftToggleActive === true"
            class="absolute h-full w-58 bg-white z-10 top-0 left-0"
        />
        <header
            class="flex justify-between items-center text-gray-500 dark:text-$dark_text"
        >
            <i
                class="fas fa-bars text-2xl px-2 hidden"
                @click="onLeftToggleClick"
            ></i>
            <i
                class="fas fa-arrow-left px-2 cursor-pointer hover:text-black dark:hover:text-white"
            ></i>
            <i
                class="fas fa-arrow-right px-4 cursor-pointer hover:text-black dark:hover:text-white"
            ></i>

            <div
                class="main-content__search-form flex justify-around px-5 py-2.25 rounded-2xl bg-white dark:bg-$dark_input dark:hover:bg-[#2D4258] w-full cursor-pointer gap-2"
            >
                <i class="fas fa-search search-btn"></i>
                <input
                    type="text"
                    class="search-input outline-none border-none bg-transparent w-full placeholder-gray-400 dark:text-white"
                    placeholder="Search for artist, songs and..."
                />
            </div>
            <i class="fas fa-bars text-2xl px-4 hidden"></i>
        </header>

        <div class="pt-4 pb-1">
            <p
                class="main-content__des text-[0.6rem] flex items-center dark:text-$dark_text"
            >
                What's hot<span
                    ><img
                        src="/img/fire.png"
                        alt="fire_icon"
                        width="16px"
                        height="16px"
                /></span>
            </p>
        </div>
        <div
            class="main-content__trend flex justify-between items-center pb-3.5 dark:text-$dark_text"
        >
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
            <div
                class="playlist-head pt-5 flex justify-between items-center dark:text-$dark_text"
            >
                <h4>Top 100 VN</h4>
                <a
                    class="playlist-more btn-hover hover:(text-white bg-gray-600 px-2) text-gray-500 font-medium rounded-3xl duration-200 cursor-pointer text-xs"
                    >Show all</a
                >
            </div>
            <div
                class="playlist-list flex justify-between text-xs px-3 py-1 text-gray-400"
            >
                <p class="playlist__number -mr-30">#</p>
                <p class="playlist__title">TITLE</p>
                <p class="playlist__artist">ARTIST</p>
                <p class="playlist__time">TIME</p>
            </div>
        </div>

        <div class="overflow-y-scroll h-50 my-1">
            <div v-if="!isLoading">
                <div
                    v-for="(index, i) in main.results.length"
                    :key="i"
                    class="grid grid-cols-12 items-center p-3 hover:(pl-4 bg-white shadow-lg shadow-gray-300 text-gray-700 font-medium) dark:hover:bg-$dark_input duration-200 rounded-md cursor-pointer text-gray-500 dark:text-gray-400 dark:hover:(text-gray-200 shadow-gray-800) text-xs"
                    @click="loadSound(`${main.results[i]['music']}`)"
                >
                    <p>{{ formatNumber(index) }}</p>
                    <p class="col-span-5">{{ main.results[i]["title"] }}</p>
                    <p class="col-span-5">{{ main.results[i]["creator"] }}</p>
                    <p>{{ main.counter }}</p>
                </div>
            </div>
            <div v-if="isLoading">
                <div
                    v-for="i in 50"
                    :key="i"
                    class="animate-pulse grid grid-cols-12 items-center py-3 hover:(pl-2 pr-3 bg-white) duration-200 rounded-md cursor-pointer text-gray-500 text-xs"
                >
                    <p class="bg-gray-300/50 w-10 h-4 rounded-md"></p>
                    <p
                        class="col-span-5 bg-gray-300/50 w-4/5 min-h-full rounded-md"
                    ></p>
                    <p
                        class="col-span-5 bg-gray-300/50 w-4/5 min-h-full rounded-md"
                    ></p>
                    <p class="bg-gray-300/50 w-4/5 min-h-full rounded-md"></p>
                </div>
            </div>
        </div>

        <div class="play-song p-3 bg-white rounded-lg dark:bg-$dark_field">
            <div
                class="play-control grid grid-cols-3 justify-between items-center"
            >
                <div
                    class="play-control__act flex justify-start items-center text-gray-500 dark:text-$dark_text gap-2"
                >
                    <div
                        class="dark:bg-$dark_head dark:hover:(bg-$dark_highlight text-$dark_btn) p-1 rounded-md"
                    >
                        <i
                            v-show="isHeart === false"
                            class="far fa-heart"
                            @click="onHeart"
                        ></i>
                        <i
                            v-show="isHeart === true"
                            class="fas fa-heart text-red-600"
                            @click="onHeart"
                        ></i>
                    </div>
                    <div
                        class="dark:bg-$dark_head dark:hover:(bg-$dark_highlight text-$dark_btn) p-1 rounded-md"
                    >
                        <i class="fas fa-music"></i>
                    </div>
                    <div
                        class="dark:bg-$dark_head dark:hover:(bg-$dark_highlight text-$dark_btn) p-1 rounded-md"
                    >
                        <i class="fas fa-expand-alt"></i>
                    </div>
                </div>
                <div
                    class="play-control__main flex justify-center items-center dark:text-$dark_text gap-2"
                >
                    <div
                        class="text-gray-500 dark:text-$dark_text dark:hover:text-$dark_btn text-sm"
                    >
                        <i class="fas fa-redo-alt play-repeat"></i>
                    </div>
                    <div class="dark:text-$dark_btn dark:hover:text-white">
                        <i
                            class="fas fa-fast-backward play-backward main-icon"
                        ></i>
                    </div>
                    <div class="dark:text-$dark_btn dark:hover:text-white">
                        <i
                            v-show="isPlaying"
                            class="fas fa-pause-circle text-3xl"
                            @click="onPlaySong"
                        ></i>
                        <i
                            v-show="!isPlaying"
                            class="fas fa-play-circle text-3xl"
                            @click="onPlaySong"
                        ></i>
                    </div>
                    <div class="dark:text-$dark_btn dark:hover:text-white">
                        <i
                            class="fas fa-fast-forward play-forward main-icon"
                        ></i>
                    </div>
                    <div
                        class="text-gray-500 dark:text-$dark_text dark:hover:text-$dark_btn text-sm"
                    >
                        <i class="fas fa-random shuffle-song"></i>
                    </div>
                </div>
                <div
                    class="play-control__volume flex justify-end items-center text-gray-500"
                >
                    <div>
                        <i class="fas fa-volume-down"></i>
                    </div>
                    <div class="slidecontainer1 relative">
                        <span
                            class="w-[90%] h-0.5 bg-red-500 absolute top-1/2 left-1"
                        ></span>
                        <input
                            id="myRange1"
                            v-model="currentVolume"
                            type="range"
                            min="1"
                            max="100"
                            class="slider1 bg-transparent"
                        />
                    </div>
                    <div>
                        <i class="fas fa-volume-up text-sm"></i>
                    </div>
                </div>
            </div>
            <div
                class="play-seekbar flex justify-between items-center text-gray-500 text-sm"
            >
                <div class="timer__left">
                    {{ song.currentTime }}
                </div>
                <CInputRange />
                <audio ref="audioPlayer" :src="song" autoplay></audio>
                <div class="timer__right">3.00</div>
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

/* ****************************************************** */
.slidecontainer1 {
    width: 50%;
    height: 1.5rem;
}

.slider1 {
    -webkit-appearance: none;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
}

.slider1::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 0.6rem;
    background-color: #fff;
    border: 0.1rem solid #000;
    border-radius: 50%;
    height: 0.6rem;
    cursor: pointer;
    /* width: 1.4rem;
    height: 1.4rem;
    border: 0;
    background: url("https://img.icons8.com/material-two-tone/24/000000/circled.png");
    cursor: pointer;
    transform: scale(0.55); */
}

.slider1::-moz-range-thumb {
    width: 1.4rem;
    height: 1.4rem;
    border: 0;
    background: url("https://img.icons8.com/material-two-tone/24/000000/circled.png");
    cursor: pointer;
    transform: scale(0.55);
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
