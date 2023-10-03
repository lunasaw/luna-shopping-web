<template>
  <div class="permission_denied">
    <vue-particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="options"
    />
    <div class="denied__wrapper">
      <h1>{{ notFound.code }}</h1>
      <h3 v-html="notFound.message"></h3>
      <img id="astronaut" src="@/assets/images/astronaut.svg" />
      <img id="planet" src="@/assets/images/planet.svg" />
      <a href="#"
        ><button class="denied__link" @click="goHome">Go Home</button></a
      >
    </div>
  </div>
</template>

<script>
import particles from "@/assets/json/presets/particles_star.json";

import { loadFull } from "tsparticles";
import { mapState } from "vuex";
export default {
  name: "NotFound",
  computed: {
    ...mapState(["notFound"]),
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
    goHome() {
      this.$router.push({ path: "/" });
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
