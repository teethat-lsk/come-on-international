<template>
  <nav
    class="flex items-center bg-primary-red w-screen h-max gap-20 py-5 px-5 z-50 shadow-sm shadow-black/60"
  >
    <div class="flex-1 justify-start items-center">
      <img
        @click="scrollTo('TOP')"
        src="~/assets/images/navbar-logo.png"
        alt="ComeOn-Logo"
        class="w-[7rem] mobile:w-[4rem] cursor-pointer"
      />
    </div>
    <div class="flex-1 flex gap-4 justify-end items-center mobile:hidden">
      <button
        @click="$emit('buttonClicked', 'CATALOGUE')"
        class="bg-secondary px-4 py-3 rounded-xl flex items-center gap-2 max-h-[60px] min-w-fit"
      >
        <span class="text-black text-2xl font-bold">Catalogue</span>
        <img src="~/assets/images/catalogue-logo.png" alt="Catalog logo" />
      </button>
      <div class="w-[1px] h-[80%] bg-secondary rounded-lg"></div>
      <button
        @click="$emit('buttonClicked', 'CONTACT')"
        class="bg-secondary px-4 py-3 rounded-xl flex items-center gap-2 max-h-[60px] min-w-fit"
      >
        <span class="text-black text-2xl font-bold">Contact</span>
        <img src="~/assets/images/contact-logo.png" alt="Contact logo" />
      </button>
    </div>
    <div class="hidden mobile:block relative">
      <HamburgerButton @click="toggleHiddenNavbar" />
    </div>
    <div
    v-if="display"
      class="hidden mobile:flex items-end flex-col absolute bg-primary-red py-4 rounded-b-xl px-4 translate-x-full top-[100%] left-[40px] gap-2"
    >
      <button
        @click="$emit('buttonClicked', 'CATALOGUE')"
        class="bg-secondary px-4 py-1 rounded-xl flex justify-end items-center gap-2 max-h-[60px] min-w-fit mobile:w-fit"
      >
        <span class="text-black text-2xl mobile:text-lg font-bold w-fit">Catalogue</span>
        <img src="~/assets/images/catalogue-logo.png" alt="Catalog logo" class="mobile:h-[20px]" />
      </button>
      <button
        @click="$emit('buttonClicked', 'CONTACT')"
        class="bg-secondary px-4 py-1 rounded-xl flex justify-end items-center gap-2 max-h-[60px] min-w-fit mobile:w-fit"
      >
        <span class="text-black text-2xl mobile:text-lg font-bold w-fit">Contact</span>
        <img src="~/assets/images/contact-logo.png" alt="Contact logo" class="mobile:h-[25px]" />
      </button>
    </div>
  </nav>
</template>

<script setup>
import HamburgerButton from './HamburgerButton.vue';
const scrollTo = (position) => {
  document.documentElement.scrollTo({ behavior: 'smooth', top: 0 });
};
const display = ref(false);
const toggleHiddenNavbar = () => {
  display.value = !display.value
};
</script>
<style lang="scss" scoped></style>
