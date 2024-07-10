<script setup>
import { useRoute, useRouter, RouterView } from "vue-router";
import cars from "../data/cars.json";

const route = useRoute();
const router = useRouter();
const carId = parseInt(route.params.id);

const car = cars.find((c) => c.id === parseInt(route.params.id));

const ShowCar = () => {
  router.push(`/cars/${carId}/contact`);
};
</script>

<template>
  <div v-if="car" class="car-view">
    <h1>CarView</h1>
    <p>{{ car.name }}</p>
    <p>{{ car.year }}</p>
    <p>{{ car.price }}</p>
    <img :src="car.img" />

    <p class="blog">{{ car.text }}</p>
    <button @click="ShowCar">Contact Us</button>
    <RouterView />
  </div>
  <div v-else>
    <h1>this car is Unavailable currently</h1>
  </div>
</template>

<style scoped>
.blog {
  padding: 10px;
  color: gray;
}
.car-view {
  display: flex;
  flex-direction: column; /* Ensures the cards are stacked vertically */
  align-items: center; /* Center children horizontally */
  justify-content: center; /* Center children vertically */
  height: 100vh; /* Full height of the viewport */
  text-align: center; /* Center text inside the container */
  background-color: rgb(223, 210, 90);
  border: 5px solid white;
  padding: 30px;
  margin: 10px 0; /* Adds some space between each card */
  width: 100%; /* Fixed width for each card */
  height: 100%; /* Fixed height for each card */
  text-decoration: none; /* Ensures the text is not underlined */
  color: black; /* Sets the text color */
}
button {
  padding: 10px;
  margin: 5px;
  font-size: 30px;
  cursor: pointer;
}
</style>
