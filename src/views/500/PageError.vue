<template>
  <div class="permission_denied">
    <vue-particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="options"
    />
    <div class="denied__wrapper">
      <h1>{{ pageError.code }}</h1>
      <h3 v-html="pageError.message"></h3>
      <img id="astronaut" src="@/assets/images/astronaut.svg" />
      <img id="planet" src="@/assets/images/planet.svg" />
      <a href="#"
        ><button class="denied__link" @click="goBack">Go Back</button></a
      >
    </div>
  </div>
</template>

<script>
import particles from "@/assets/json/presets/particles.json";

import { loadFull } from "tsparticles";
import { mapState } from "vuex";
export default {
  name: "PageError",
  computed: {
    ...mapState(["pageError"]),
  },
  data() {
    return {
      particlesLoaded: {},
      options: {},
    };
  },
  methods: {
    particlesInit(engine) {
      loadFull(engine);
    },
    goBack() {
      this.$router.back();
    },
  },
  mounted() {
    this.options = particles;
    this.particlesInit = async (engine) => {
      await loadFull(engine);
    };

    this.particlesLoaded = async (container) => {
      console.log("Particles container loaded", container);
    };
  },
};
</script>
<style scoped>
@import "@/assets/css/404.css";
</style>
