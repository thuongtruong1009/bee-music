<script setup>
import { ref } from "vue"

const inputValue = ref(0)
const rangeBackground = ref("")
const onChange = (e) => {
    inputValue.value = e.target.value
    let buf = (100 - inputValue.value) / 4 + parseInt(inputValue.value)
    rangeBackground.value = `background: linear-gradient(to right, #8D53EC 0%, #8D53EC ${inputValue.value}%, #777 ${inputValue.value}%, #777 ${buf}%, #444 ${buf}%, #444 100%)`
}
</script>

<template>
    <div class="wrap w-full px-2 pb-4">
        <input
            v-model="inputValue"
            type="range"
            min="1"
            max="100"
            class="range"
            :style="rangeBackground"
            @change="onChange($event)"
        />
    </div>
</template>

<style scoped>
.range {
    -webkit-appearance: none;
    background: linear-gradient(
        to right,
        #777 0%,
        #777 50%,
        #777 62.5%,
        #777 32.5%,
        #444 30.5%,
        #444 100%
    );
    cursor: pointer;
    height: 0.5rem;
    margin: 0;
    transition: 0.1s ease-in;
    vertical-align: bottom;
    width: 100%;
    border-radius: 0.5rem;
}
.wrap.hover .range {
    height: 8px;
}

.range::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #aeaeae;
    border-radius: 8px;
    box-shadow: inset 0 0 0 5px #eaeaea;
    height: 0;
    transition: 0.1s ease-in;
    width: 0;
}
/* .wrap:hover .range::-webkit-slider-thumb, */
.wrap .range::-webkit-slider-thumb,
.wrap.hover .range::-webkit-slider-thumb {
    width: 16px;
    height: 16px;
}

.wrap .range,
.wrap .range::-webkit-slider-thumb {
    transition: 0.1s ease-in;
}
</style>
