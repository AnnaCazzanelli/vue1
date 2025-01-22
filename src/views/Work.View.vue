<script setup>
import { ref, onMounted, inject } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const work = ref({});
const data = inject('data');

onMounted(() => {
  work.value = data?.value?.works.find(work => work.id == route.params.id);
});

</script>


<template v-if="work">
  <pre v-if="false">
  {{ work }}
</pre>
  <div class="page-title">
    {{ work.title }}
  </div>
  <p class="description mb-4">
    {{ work.description }}
  </p>
  <img class="image img-fluid mb-4" :src="work.img" alt="work.title" />

  <RouterLink :to="{ name: 'home' }">Back to home</RouterLink>
</template>
