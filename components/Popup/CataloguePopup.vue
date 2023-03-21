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
          type="application/pdf"
          href="/Come-On_International.pdf"
          download
        >
        </a>
      </div>
    </div>
  </BackDrop>
</template>

<script setup>
import BackDrop from "./BackDrop.vue";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
// import pdf from '@/static/Come-On_International.pdf';

import Qrcode from "qrcode.vue";

// const pdf = "https://ff04467ee7bdedd50c8d22185d81b6e9ed13e16be85da623b79e784-apidata.googleusercontent.com/download/storage/v1/b/comon_international/o/Come-On_International.pdf?jk=AahUMltnqRtbLwNCfyQd5zKAjGTrToipRO_rhdOBmiUhr6WoWFo3mrwZ8fsYxioLVxocf3Tg6D7nDu4kU8_8qsL4m-e4X4M5trkwGzQH8apd87xOLrmdXkz4w-GAB95-Xo6-2ay_kIHmA7UL1loK93c5K8awiYSD1DJGCbXA6iLvJCEv3thZjyBZ3OMGk-nw179fimmX80yakpWTodY6f_7zDdW7Q4TmF1k-rMj23yGAzncaDoW5oJQKYFz_iPEFij_rXig79p4xB90Q4kSTN1RQL90x9JseJmV0CFkgN0IXDJGrx98GRqCXqyapv8LwoL5VbNcFLf1TXg7i7xNzMdzzW2IlrbQpvoNCWVFzVyFm9aaTrbc44DbHWlgt-_hxQP6djUxNyWr0HEFumZcEoz_YNTt5x2Fz78sZQ7OmdLyjpLDCE65KW9UfEr_GxQWwTrIyzHH4nWGc8thCqwjtyZnSwEr58XkW5F6n3VQSfKNuHRiboJ8uZ9keT-442LvCKGZ8dFYH4NhVB9AGohlQy7XzJBo9Znp5WKVIUcoe55MPF0cLCeFN-kJpxIJpuWg6nW5anUqFpdHo5rs62Jsopn0jP0oFD6Mico1-tAZcjfFy3mhMVH3BWYoLhJPyJAyri_nv-ZkdP88BU321xL2LaqIi_Qd4DMyLBHEgq-6ed-2u_BFLpoNrIvkAUMQ__mqQr0kPYiMrhC1HVZXqKyHgcZVoN3NEXjbhC9mnuvqY4u50fWfkXJFqC4ONJDoalDTCseWLGOMXKWZDDqJOwL63m_7I7L1ZNQ8zLq07taJ-xZgZJ6wurZkF27wcaICGJE6-EzGsal8bYfj8jYL_U4Y09bhogxGlsyeoibtWb29ovUbOLg82F2Hj0oTHhn9rLJWLdQf5w4QtZMyxy-UU2rkAqrWBhsflCfVwr5XZrSKQhkptjjnc4rPDOeKvf5vmcftD-NT5orcIsXd4iAes92Fp0si-err-QdxhMbEJi3CG2a09OUC1jjpap0atjRGdw6OaVFcL0r62AFykC48AyNOKBcck2d_L17coDtwPCRgEU4wheTBfh9QngpxI-Uo5D7ybG7fAymbctFD1rs0iiwVxmdAmmUq11GD8Kh-zeAvc2beWb6C9j8eUypwNHeUZntC7LOfjWpHw03rKfbDF0uaKbJs8LrVOeskB-uxa7HK2AXzgptgb&isca=1"
const URL = await downloadURL();
const pdf = "/public/Come-On_International.pdf";
// const downloadURL =
//   'https://firebasestorage.googleapis.com/v0/b/come-on-international.appspot.com/o/Come-On%20International.pdf?alt=media&token=2a4c4566-930b-41f9-953b-cb1f23a25ced';
// const props = defineProps({
//   isActive: Boolean,
// });

const downloadCatalogue = async () => {
  document.getElementById("downloadPDF").click();
  const target = document.getElementById("rerenderTarget");
  const targetChildrens = target.childNodes;
  targetChildrens.forEach((node) => {
    target.replaceChild(node, node);
  });
};

const downloadPDF = () => {
  const url =
    "https://firebasestorage.googleapis.com/v0/b/come-on-international.appspot.com/o/Come-On%20International.pdf?alt=media&token=2a4c4566-930b-41f9-953b-cb1f23a25ced";
  const aTag = document.getElementById("downloadPDF");
  aTag.src = url;
  aTag.click();
};
</script>

<style lang="scss" scoped>
img {
  user-select: none;
}
</style>
