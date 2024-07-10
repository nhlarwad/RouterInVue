<script setup>
import cars from "../data/cars.json";
import { RouterLink } from "vue-router";
</script>

<template>
  <h1>Blog</h1>
  <div class="main-card">
    <router-link :to="`/cars/${car.id}`" class="cars" v-for="car in cars" :key="car.id" href="" >{{ car.name }}</router-link >

  </div>
</template>

<style scoped>
.main-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.cars {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(235, 220, 245);
  border: 5px solid white;
  padding: 30px;
  margin: 10px 0;
  width: 200px;
  height: 100px;
  text-decoration: none;
  color: black;
}
h1 {
  text-align: center;
}
</style>
