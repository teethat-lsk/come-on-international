<template>
  <div
    class="absolute"
    :class="{
      'bg-primary-red text-white': index == 1,
      'bg-secondary text-black': index == 0,
    }"
  >
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
    index: number
}
const props = defineProps<Props>();
</script>

<style lang="scss" scoped></style>
