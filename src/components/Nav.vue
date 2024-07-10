<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="main-nav">
    <router-link active-class="active" to="/" class="home">Blogs</router-link>

    <router-link active-class="active" to="/about">About</router-link>

    <router-link active-class="active" to="/project">Project</router-link>
  </div>
</template>

<style scoped>
.active {
  font-weight: bold;
  color: blue;
  padding: 20px;
}

.home {
  padding: 20px;
}

.main-nav {
  padding: 20px;
  background: white;
  text-align: center;
}
</style>
