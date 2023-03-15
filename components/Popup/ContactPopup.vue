<template>
  <BackDrop
    @closePopup="$emit('closePopup')"
    is-active="true"
    class="absolute z-[100]"
  >
    <div
      class="absolute z-30 rounded-2xl top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] min-w-[800px] h-[500px] mobile:w-[80%] mobile:min-w-[200px] bg-white"
    >
      <img
        @click="$emit('closePopup')"
        src="~/assets/images/popup/cross.png"
        alt="cross"
        class="absolute top-[10px] right-[10px] cursor-pointer"
      />

      <img
        class="absolute w-[300px] mobile:w-[200px] top-[-150px] mobile:top-6 left-[50px] mobile:left-[21%]"
        src="~/assets/images/popup/contact-popup-logo.png"
        alt="contact-popup-logo"
      />
      <div
        class="mobile:hidden absolute rounded-xl right-[60px] top-[40px] px-9 py-2 w-fit bg-primary-red text-white font-bold select-none"
      >
        <span class="text-[40px]">CONTACT</span>
      </div>
      <div
        class="absolute bottom-[60px] left-[60px] mobile:left-[30px] w-fit h-fit flex flex-col gap-4"
      >
        <div class="flex gap-5 mobile:gap-2 items-center">
          <img
            src="~/assets/images/popup/line-logo.png"
            alt=""
            class="w-[80px] mobile:w-[40px]"
          />
          <span class="text-[48px] mobile:text-[24px]">@273cozby</span>
        </div>
        <div class="flex gap-5 mobile:gap-2 items-center">
          <img
            src="~/assets/images/popup/phone-logo.png"
            alt=""
            class="w-[80px] mobile:w-[40px]"
          />
          <span class="text-[48px] mobile:text-[24px]">065-256-1979</span>
        </div>
        <div class="flex gap-5 mobile:gap-2 items-center">
          <img
            src="~/assets/images/popup/mail-logo.png"
            alt=""
            class="w-[80px] mobile:w-[40px]"
          />
          <span class="text-[48px] mobile:text-[20px]">sami.comeon@gmail.com</span>
        </div>
      </div>
    </div>
  </BackDrop>
</template>

<script setup>
import BackDrop from './BackDrop.vue';
</script>

<style lang="scss" scoped></style>
