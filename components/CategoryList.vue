<template>
  <span class="block mb-16 mobile:mb-2 text-[40px] mobile:text-[20px]"
    >OUR PRODUCTS</span
  >
  <div class="px-[10px]">
    <Carousel :items-to-show="showedItem" snap-align="end">
      <Slide v-for="cat in CategoryData" :key="cat.name" class="py-4">
        <CategoryCard class="cursor-pointer" :category="cat" />
      </Slide>
      <template #addons>
        <!-- <Navigation /> -->
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import CategoryCard from './CategoryCard.vue';
import CategoryData from '~/assets/data/category.json';

const screenWidth = window.innerWidth;
const showedItem = computed(() => {
  if (screenWidth <= 640) {
    return 3;
  } else {
    return 5;
  }
});
</script>

<style lang="scss" scoped></style>
