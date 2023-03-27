<template>
  <BackDrop is-active="true" class="absolute z-[700]">
    <div
      class="flex flex-col gap-8 items-center justify-center absolute z-30 rounded-2xl top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] min-w-[800px] mobile:h-[300px] h-[500px] mobile:w-[80%] mobile:min-w-[200px] bg-white"
    >
      <Spinner class=" mt-[2rem]" />
      <div class="flex flex-col justify-center items-center">
        <span class="block mobile:text-xl text-2xl">Downloading Catalogue</span>
        <span class="block mobile:text-md text-lg">Please Wait . . .</span>
      </div>
    </div>
  </BackDrop>
</template>

<script setup>
import BackDrop from './BackDrop.vue';
import Spinner from './Spinner.vue';
</script>

<style lang="scss" scoped></style>
