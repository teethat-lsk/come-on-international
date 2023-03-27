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
          @click="downloadWithAxios()"
          class="bg-secondary h-fit w-min px-[2rem] text-[35px] font-normal flex-grow py-[0.5rem] rounded-md shadow-lg self-center justify-self-center mobile:text-[15px]"
        >
          Download
        </button>
        <a v-show="false" id="downloadPDF" type="application/pdf" download> </a>
      </div>
    </div>
  </BackDrop>
</template>

<script setup>
import BackDrop from './BackDrop.vue';
import Axios from 'axios';

const emit = defineEmits(['downloadClick','downloadSuccess'])

const URL = await downloadURL();


const downloadCatalogue = async () => {
  const aTag = document.createElement('a');
  const url = URL;
  // const aTag = document.getElementById("downloadPDF");
  aTag.download = 'ComeOn-International.pdf';
  aTag.href = url;
  aTag.target = '_blank';
  aTag.click();
};

const forceFileDownload = (response, title) => {
  console.log(title);
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', title);
  document.body.appendChild(link);
  link.click();
};
const downloadWithAxios = () => {
  emit('downloadClick')
  Axios({
    method: 'GET',
    url: URL,
    responseType: 'arraybuffer',
  })
    .then((response) => {
      forceFileDownload(response, 'ComeOn-International.pdf');
      if(response.status == 200){
       emit('downloadSuccess')
      }
    })
    .catch(() => console.log('error occured'));
};
</script>

<style lang="scss" scoped>
img {
  user-select: none;
}
</style>
