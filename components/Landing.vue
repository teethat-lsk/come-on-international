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
            <h1 class="text-primary-red text-[96px] mobile:text-[40px] font-bold">
              OUR CATALOGUE
            </h1>
            <div class="flex flex-col items-center gap-8 mobile:gap-4">
              <button
                @click="downloadCatalogue"
                class="text-secondary bg-primary-red px-[2rem]  text-[35px] mobile:text-[20px] rounded-md shadow-lg w-fit"
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
    <a v-show="false" id="download" download rel="noreferrer noopener" href="/Come-On_International.pdf"> </a>
    <a v-show="false" id="open" href="/Come-On_International.pdf" target="_blank"> </a>
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

// import pdf from '@/static/Come-On_International.pdf';
// const pdf = 'https://firebasestorage.googleapis.com/v0/b/come-on-international.appspot.com/o/Come-On%20International.pdf?alt=media&token=2a4c4566-930b-41f9-953b-cb1f23a25ced'
const pdf = 'https://ff04467ee7bdedd50c8d22185d81b6e9ed13e16be85da623b79e784-apidata.googleusercontent.com/download/storage/v1/b/comon_international/o/Come-On_International.pdf?jk=AahUMltnqRtbLwNCfyQd5zKAjGTrToipRO_rhdOBmiUhr6WoWFo3mrwZ8fsYxioLVxocf3Tg6D7nDu4kU8_8qsL4m-e4X4M5trkwGzQH8apd87xOLrmdXkz4w-GAB95-Xo6-2ay_kIHmA7UL1loK93c5K8awiYSD1DJGCbXA6iLvJCEv3thZjyBZ3OMGk-nw179fimmX80yakpWTodY6f_7zDdW7Q4TmF1k-rMj23yGAzncaDoW5oJQKYFz_iPEFij_rXig79p4xB90Q4kSTN1RQL90x9JseJmV0CFkgN0IXDJGrx98GRqCXqyapv8LwoL5VbNcFLf1TXg7i7xNzMdzzW2IlrbQpvoNCWVFzVyFm9aaTrbc44DbHWlgt-_hxQP6djUxNyWr0HEFumZcEoz_YNTt5x2Fz78sZQ7OmdLyjpLDCE65KW9UfEr_GxQWwTrIyzHH4nWGc8thCqwjtyZnSwEr58XkW5F6n3VQSfKNuHRiboJ8uZ9keT-442LvCKGZ8dFYH4NhVB9AGohlQy7XzJBo9Znp5WKVIUcoe55MPF0cLCeFN-kJpxIJpuWg6nW5anUqFpdHo5rs62Jsopn0jP0oFD6Mico1-tAZcjfFy3mhMVH3BWYoLhJPyJAyri_nv-ZkdP88BU321xL2LaqIi_Qd4DMyLBHEgq-6ed-2u_BFLpoNrIvkAUMQ__mqQr0kPYiMrhC1HVZXqKyHgcZVoN3NEXjbhC9mnuvqY4u50fWfkXJFqC4ONJDoalDTCseWLGOMXKWZDDqJOwL63m_7I7L1ZNQ8zLq07taJ-xZgZJ6wurZkF27wcaICGJE6-EzGsal8bYfj8jYL_U4Y09bhogxGlsyeoibtWb29ovUbOLg82F2Hj0oTHhn9rLJWLdQf5w4QtZMyxy-UU2rkAqrWBhsflCfVwr5XZrSKQhkptjjnc4rPDOeKvf5vmcftD-NT5orcIsXd4iAes92Fp0si-err-QdxhMbEJi3CG2a09OUC1jjpap0atjRGdw6OaVFcL0r62AFykC48AyNOKBcck2d_L17coDtwPCRgEU4wheTBfh9QngpxI-Uo5D7ybG7fAymbctFD1rs0iiwVxmdAmmUq11GD8Kh-zeAvc2beWb6C9j8eUypwNHeUZntC7LOfjWpHw03rKfbDF0uaKbJs8LrVOeskB-uxa7HK2AXzgptgb&isca=1'
const screenWidth = window.innerWidth;
const disableCarouselAddon = computed(() => screenWidth < '640px');

const downloadCatalogue = () => {
  const downloadTag = document.getElementById('download');
  downloadTag.click();
};

const openPDF = () => {
  const downloadTag = document.getElementById('open');
  downloadTag.click();
};
</script>

<style lang="scss" scoped></style>
