<template>
  <div>
    <h1>About</h1>
    <input class="bg-gray-100" type="text" v-model="search" />
    <p>search term: {{ search }}</p>
    <div class="text-center" v-for="name in searchNames" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const search = ref("");
    const names = ref(["nail", "arbaz", "imtaz", "tarek", "sish", "shohel"]);

    const searchNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    return { names, search, searchNames };
  },
};
</script>

<style></style>
