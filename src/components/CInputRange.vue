<script setup>
import { onMounted, ref, watchEffect } from "vue"

const inputValue = ref(10)

onMounted(() => {
    $(function () {
        $(".wrap").addClass("loaded")
        $(".range").bind("change mousemove", function () {
            var val = $(this).val()
            var buf = (100 - val) / 4 + parseInt(val)
            $(this).css(
                "background",
                "linear-gradient(to right, #8D53EC 0%, #8D53EC " +
                    val +
                    "%, #777 " +
                    val +
                    "%, #777 " +
                    buf +
                    "%, #444 " +
                    buf +
                    "%, #444 100%)"
            )
        })
    })
})
</script>

<template>
    <div class="wrap loaded w-full px-2 pb-4">
        <input
            v-model="inputValue"
            type="range"
            min="1"
            max="100"
            class="range"
        />
    </div>
</template>

<style scoped>
.range {
    -webkit-appearance: none;
    background: linear-gradient(
        to right,
        #cc181e 0%,
        #cc181e 50%,
        #777 50%,
        #777 62.5%,
        #444 62.5%,
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

.loaded .range,
.loaded .range::-webkit-slider-thumb {
    transition: 0.1s ease-in;
}
</style>
