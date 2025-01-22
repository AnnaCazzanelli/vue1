<script setup>
import Intro from '../components/Intro.vue';
import Gallery from '../components/Gallery.vue';
import About from '../components/About.vue';
import { onMounted, inject, provide } from 'vue';

const data = inject('data');
provide('data', data);


</script>

<template>
  <Intro class="section" />
  <a @click="handleClick">button</a>
  <Gallery class="section" />
  <About class="section" />
</template>
