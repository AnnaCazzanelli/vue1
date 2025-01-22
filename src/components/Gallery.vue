<script setup>
import { inject, onMounted } from 'vue';
import GalleryItem from './GalleryItem.vue';

const data = inject('data');
onMounted(() => {
  console.log("data", data.value);
});

</script>


<template>
  <div class="gallery mb-8">
    <div v-if="data?.works?.length > 0">
     <div class="grid sm:grid-cols-1 md:grid-cols-2  gap-8">
      <GalleryItem v-for="work in data.works" :key="work.id" :work="work" />
    </div>
    </div>
    <div v-else>
      <p> No data to display. </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .gallery {
    margin-top: 80px;
    //border: 1px solid red;
  }
</style>