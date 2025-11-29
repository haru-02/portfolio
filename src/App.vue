<script setup lang="ts">
import GlassNav from './components/GlassNav.vue'
</script>

<template>
  <div class="app-bg">
    <GlassNav />
    <RouterView />
  </div>
</template>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

.app-bg {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('./assets/background.jpg');
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  color: #fff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 1rem;
}
</style>
