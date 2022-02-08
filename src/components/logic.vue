<template>
  <input
    type="range"
    min="0"
    max="100"
    step="1"
    v-model="seekValue"
    @change="onSeek"
  />
  <audio
    src="https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
    ref="audioPlayer"
    @timeupdate="onPlaying"
  >
    Your browser does not support the element.
  </audio>
  <p>{{ currentTime }}</p>
  <div>
    <button @click="play">play</button>
    <button @click="pause">pause</button>
    <button @click="stop">stop</button>
    <button @click="setSpeed(0.5)">0.5x</button>
    <button @click="setSpeed(1)">1x</button>
    <button @click="setSpeed(1.5)">1.5x</button>
    <button @click="setSpeed(2)">2x</button>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      currentTime: 0,
      seekValue: 0,
    };
  },
  methods: {
    play() {
      this.$refs.audioPlayer.play();
    },
    pause() {
      this.$refs.audioPlayer.pause();
    },
    stop() {
      const { audioPlayer } = this.$refs;
      audioPlayer.pause();
      audioPlayer.currentTime = 0;
    },
    setSpeed(speed) {
      this.$refs.audioPlayer.playbackRate = speed;
    },
    onPlaying() {
      const { audioPlayer } = this.$refs;
      if (!audioPlayer) {
        return;
      }
      this.currentTime = audioPlayer.currentTime;
      this.seekValue = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    },
    onSeek() {
      const { audioPlayer } = this.$refs;
      const seekto = audioPlayer.duration * (this.seekValue / 100);
      audioPlayer.currentTime = seekto;
    },
  },
};
</script>
