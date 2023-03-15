<template>
  <BackDrop @closePopup="$emit('closePopup')" class="absolute z-[100]">
    <div
      class="absolute z-30 rounded-2xl top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] min-w-[800px] h-[500px] bg-white mobile:w-[80%] mobile:min-w-[200px]"
    >
      <img
        @click="$emit('closePopup')"
        src="~/assets/images/popup/cross.png"
        alt="cross"
        class="absolute top-[10px] right-[10px] cursor-pointer"
      />
      <img
        class="absolute w-[300px] top-[-150px] left-[50px] mobile:w-[200px] mobile:top-6 mobile:left-[21%]"
        src="~/assets/images/popup/catalogue-popup-logo.png"
        alt="contact-popup-logo"
      />
      <div
        class="mobile:hidden absolute rounded-xl right-[60px] top-[40px] px-9 py-2 w-fit bg-primary-red text-white font-bold select-none"
      >
        <span class="text-[40px]">CATALOGUE</span>
      </div>
      <div
        class="mobile:flex-col mobile:gap-[1rem] absolute bottom-[60px] mobile:bottom-[20px] px-12 w-full h-fit flex flex-row justify-center gap-[3rem]"
      >
        <img
          src="~/assets/images/popup/qr.png"
          alt=""
          class="w-[250px] mobile:w-[150px] self-center justify-self-start"
        />
        <div class="flex justify-center items-center">
          <span class="font-bold text-lg">or</span>
        </div>
        <button
          @click="downloadCatalogue"
          class="bg-secondary h-fit w-min px-[2rem] text-[35px] font-normal flex-grow py-[0.5rem] rounded-md shadow-lg self-center justify-self-center mobile:text-[15px]"
        >
          Download
        </button>
        <a
          v-show="false"
          id="downloadPDF"
          :href="pdf"
          download
        >
        </a>
      </div>
    </div>
  </BackDrop>
</template>

<script setup>
import BackDrop from './BackDrop.vue';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import pdf from '@/static/Come-On_International.pdf';
import Qrcode from 'qrcode.vue';

const URL = await downloadURL()
// const downloadURL =
//   'https://firebasestorage.googleapis.com/v0/b/come-on-international.appspot.com/o/Come-On%20International.pdf?alt=media&token=2a4c4566-930b-41f9-953b-cb1f23a25ced';
// const props = defineProps({
//   isActive: Boolean,
// });

const downloadCatalogue = () => {
  document.getElementById("downloadPDF").click();
  const target = document.getElementById("rerenderTarget");
  const targetChildrens = target.childNodes;
  targetChildrens.forEach((node) => {
    target.replaceChild(node);
  });
};


const downloadPDF = () => {
  const url = 'https://firebasestorage.googleapis.com/v0/b/come-on-international.appspot.com/o/Come-On%20International.pdf?alt=media&token=2a4c4566-930b-41f9-953b-cb1f23a25ced'
      const aTag = document.getElementById("downloadPDF")
      aTag.src = url
      aTag.click()
}
</script>

<style lang="scss" scoped>
img {
  user-select: none;
}
</style>
