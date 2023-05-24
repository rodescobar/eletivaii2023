<script setup>
import { RouterLink, RouterView } from "vue-router";
import Menu from './components/layout/Menu.vue'
import Rodape from './components/layout/Rodape.vue'
</script>

<template>
  <div>    
    <Menu />
    <RouterView />
    <Rodape />
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
</style>
