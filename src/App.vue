<script setup>

import { ref, onMounted, provide } from 'vue';
import Links from './components/Links.vue';
import Footer from './components/Footer.vue';

const loading = ref(true);
const data = ref({});
provide('data', data);

import { useRouter, RouterLink } from 'vue-router'
const router = useRouter();

const loadData = async () => {
  const url = '/data.json';
  const response = await fetch(url);
  const json = await response.json();
  data.value = json;
  setTimeout(() => {
    loading.value = false;
  }, 500);
}

onMounted(() => {
  console.log("gallery component mounted");
  loadData();
});



const shuffle = (array) => { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}; 


const handleClick = () => {
  //works.value.shift();
  data.value.works = shuffle(data.value.works);
  console.log("button clicked");
}

</script>



<template>
  <div v-if="loading">
    <div class="loading-container">
      
        <h1>Loading...</h1>
    </div>
  </div>
  <div v-else class="container">
    <nav class="mb-8">
      <template v-for="route in router.options.routes.filter(route => route.inMenu)" :key="route.name">
        <RouterLink :to="route.path" :class="{ 'active': $route.path === route.path }">{{ route.name }}</RouterLink>
      </template>
    </nav>
    <div class="mb-8">
      <RouterView/>
    </div>
    <Links class="section"/>
    <Footer class="section"/>
  </div>
</template>

<style scoped>
.container {

}

.section {
  @apply mb-8;
}
.loading-container {
  @apply flex justify-center items-center h-screen;
}

nav {
  @apply mt-4;
  a {
    @apply text-xl mr-4;
    &.active {
      color: var(--primary);
    }
  }
}
</style>
