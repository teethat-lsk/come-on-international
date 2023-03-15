<template>
  <div
    :id="product.title.toLocaleLowerCase()"
    class="bg-primary-red px-12 py-8 scroll-mt-[100px]"
    :class="{
      'bg-primary-red text-white': index == 0,
      'bg-secondary text-black': index == 1,
    }"
  >
    <div
      v-if="index == 0"
      class="flex justify-center gap-[10%] mobile:flex-col mobile:gap-4"
    >
      <div>
        <h1 class="text-[64px] mobile:text-[32px]">
          {{ product.title }}
        </h1>
        <ul class="list-disc pl-12 text-[36px] mobile:text-[18px]">
          <li v-for="detail in product.details">
            {{ detail }}
          </li>
        </ul>
      </div>
      <div class="self-center">
        <div class="relative">
          <div class="relative z-20 top-0 left-0">
            <img
              :src="getUrl(product.image)"
              alt="product-image"
              class="rounded-xl shadow-lg shadow-black/40"
            />
          </div>
          <div class="absolute top-[50%] translate-y-[-45%] translate-x-[15px]">
            <img
              src="../assets/images/product/even-product-bg.png"
              alt="even-product-bg"
              class="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>

    <div v-if="index == 1" class="flex justify-center gap-[10%] mobile:flex-col mobile:gap-4">
    <div class="hidden mobile:block">
        <h1 class="text-[64px] mobile:text-[32px]">
          {{ product.title }}
        </h1>
        <ul class="list-disc pl-12 text-[36px] mobile:text-[18px]">
          <li v-for="detail in product.details">
            {{ detail }}
          </li>
        </ul>
      </div>
      <div class="self-center">
        <div class="relative">
          <div class="relative z-20 top-0 left-0">
            <img
              :src="getUrl(product.image)"
              alt="product-image"
              class="rounded-xl shadow-lg shadow-black/40"
            />
          </div>
          <div
            class="absolute top-[50%] translate-y-[-45%] translate-x-[-15px]"
          >
            <img
              src="../assets/images/product/odd-product-bg.png"
              alt="odd-product-bg"
              class="rounded-xl"
            />
          </div>
        </div>
      </div>
      <div class="mobile:hidden">
        <h1 class="text-[64px] mobile:text-[32px]">
          {{ product.title }}
        </h1>
        <ul class="list-disc pl-12 text-[36px] mobile:text-[18px]">
          <li v-for="detail in product.details">
            {{ detail }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  product: IProduct;
  index: number;
}
const props = defineProps<Props>();

const getUrl = (path: string) => {
  return new URL(
    `/assets/images/product/${path}`,
    import.meta.url
  ).href.toString();
};
</script>

<style lang="scss" scoped></style>
