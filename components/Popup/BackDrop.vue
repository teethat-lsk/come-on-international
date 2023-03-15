<template>
  <div>
    <slot />
    <div @click="$emit('closePopup')" class="w-screen h-screen bg-black opacity-60"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
