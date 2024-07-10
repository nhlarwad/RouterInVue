<script setup>
import { useRoute } from "vue-router";
import cars from "../data/cars.json";

const route = useRoute();
const car = cars.find((c) => c.id === parseInt(route.params.id));
</script>

<template>
  <div class="owner-contact">
    <h1>this is Car Owner's Contact</h1>
    <p>{{ car.contact.dealer }}</p>
    <p>{{ car.contact.number }}</p>
  </div>
</template>

<style scoped>
.owner-contact {
  color: red;
}
</style>
