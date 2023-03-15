<template>
  <div>
    <ProductCard
      v-for="(item, index) in ProductData"
      :product="item"
      :index="index % 2"
    />
  </div>
</template>

<script setup>
import ProductData from '~/assets/data/product.json';
import ProductCard from './ProductCard.vue';
</script>

<style lang="scss" scoped></style>
