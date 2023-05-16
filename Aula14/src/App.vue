<template>
  <DisneyComponente />
</template>

<script>
  import DisneyComponente from './components/DisneyComponente.vue';
  import PrimeiroComponente from "./components/PrimeiroComponente.vue";

export default {
    name: "App",
    components: {
      PrimeiroComponente,
      DisneyComponente
    }
  }
</script>
