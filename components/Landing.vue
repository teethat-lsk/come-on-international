<template>
  <div id="LANDING" class="mobile:w-100%">
    <Carousel :wrap-around="true" :autoplay="3000">
      <Slide index="0">
        <div>
          <h1
            class="text-left text-[64px] mobile:text-[20px] text-primary-red mb-4"
          >
            COME ON INTERNATIONAL,CO.,LTD. <br />
            บริษัท คัมออน อินเตอร์เนชั่นแนล จำกัด
          </h1>
          <div
            class="flex gap-12 mobile:gap-10 justify-center mobile:items-center"
          >
            <div class="flex-1 flex flex-col gap-12">
              <h1 class="text-left text-[40px] mobile:text-[17px] text-black">
                จำหน่ายสินค้างานรถยนต์ทุกชนิด <br />
                และสินค้าสิ้นเปลืองในงานอุตสาหกรรม
              </h1>
              <p
                class="mobile:hidden text-left text-[32px] mobile:text-[15px] text-black"
              >
                ที่อยู่ : 3 ซอยโสภณ2 ถนนวัดโสภณ ตำบลมาบตาพุด <br />
                อำเภอเมืองระยอง จังหวัดระยอง 21150 <br />
                เลขประจำตัวผู้เสียภาษี:0215565007753 <br />
                Tel: 065-256-1979,081-6397465 <br />
                Email: sami.comeon@gmail.com
              </p>
            </div>
            <div>
              <img
                src="~/assets/images/landing-logo.png"
                alt="TurnOn-Logo"
                class="w-[360px] h-[360px] mobile:h-[80px] mobile:w-[80px]"
              />
            </div>
          </div>
          <div>
            <p
              class="text-left text-[32px] mobile:text-[15px] hidden text-black mobile:block mt-4"
            >
              ที่อยู่ : 3 ซอยโสภณ2 ถนนวัดโสภณ ตำบลมาบตาพุด <br />
              อำเภอเมืองระยอง จังหวัดระยอง 21150 <br />
              เลขประจำตัวผู้เสียภาษี:0215565007753 <br />
              Tel: 065-256-1979,081-6397465 <br />
              Email: sami.comeon@gmail.com
            </p>
          </div>
        </div>
      </Slide>

      <Slide index="1">
        <div class="flex justify-center items-center gap-[4rem]">
          <img
            src="~/assets/images/landing-contact.png"
            alt="catalogue-logo"
            class="mobile:hidden"
          />
          <div class="flex flex-col item-center gap-4">
            <h1
              class="text-primary-red text-[96px] mobile:text-[40px] font-bold"
            >
              CONTACT US
            </h1>
            <div
              class="bottom-[60px] left-[60px] mobile:left-[30px] w-fit h-fit flex flex-col gap-8 mobile:gap-2"
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
                <span class="text-[48px] mobile:text-[20px]"
                  >sami.comeon@gmail.com</span
                >
              </div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide index="2">
        <div class="flex justify-center items-center gap-2">
          <img
            src="~/assets/images/landing-catalogue.png"
            alt="catalogue-logo"
            class="mobile:hidden"
          />
          <div class="flex flex-col gap-8 mobile:gap-4">
            <h1
              class="text-primary-red text-[96px] mobile:text-[40px] font-bold"
            >
              OUR CATALOGUE
            </h1>
            <div class="flex flex-col items-center gap-8 mobile:gap-4">
              <button
                @click="downloadWithAxios()"
                class="text-secondary bg-primary-red px-[2rem] text-[35px] mobile:text-[20px] rounded-md shadow-lg w-fit"
              >
                Download
              </button>
              <button
                @click="openPDF"
                class="text-secondary bg-primary-red px-[2rem] text-[35px] mobile:text-[20px] rounded-md shadow-lg w-fit"
              >
                Open
              </button>
            </div>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation v-if="disableCarouselAddon" />
        <Pagination />
      </template>
    </Carousel>
    <a v-show="false" id="open" :href="pdf" target="_blank"> </a>
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import Axios from 'axios';

const emit = defineEmits(['downloadClick','downloadSuccess'])
import pdf from '@/src/Come-On_International.pdf';
// const pdf = 'https://firebasestorage.googleapis.com/v0/b/come-on-international.appspot.com/o/Come-On%20International.pdf?alt=media&token=2a4c4566-930b-41f9-953b-cb1f23a25ced'
const screenWidth = window.innerWidth;
const disableCarouselAddon = computed(() => screenWidth < '640px');
const URL = await downloadURL();

const openPDF = () => {
  const downloadTag = document.getElementById('open');
  downloadTag.click();
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
    .catch(() => {emit('downloadSuccess')});
};
</script>

<style lang="scss" scoped></style>
