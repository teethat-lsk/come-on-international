<template>
  <div class="relative bg-secondary"> 
    <CataloguePopup
      @closePopup="disablePopup"
      v-if="cataloguePopupActive"
      class="absolute"
    />
    <ContactPopup
      @closePopup="disablePopup"
      v-if="contactPopupActive"
      class="absolute"
    />
    <TopBar @buttonClicked="(type) => enablePopup(type)" class="sticky top-0" />
    <section id="rerenderTarget" class="px-12 mobile:px-3">
      <Landing />
      <Divider />
      <CategoryList />
      <Divider />
    </section>
    <section>
      <ProductList />
    </section>
  </div>
</template>

<script setup>
import Divider from '~/components/Divider.vue';
import TopBar from '~/components/TopBar.vue';
import Landing from '~/components/Landing.vue';
import CataloguePopup from '~~/components/Popup/CataloguePopup.vue';
import ContactPopup from '~~/components/Popup/ContactPopup.vue';
import CategoryCard from '~~/components/CategoryCard.vue';
import CategoryList from '~~/components/CategoryList.vue';
import ProductList from '~~/components/ProductList.vue';

const freezeScrolling = (isEnabled) => {
  if (isEnabled) {
    document.body.style.position = 'fixed';
  } else {
    document.body.style.position = '';
  }
};
const cataloguePopupActive = ref(false);
const contactPopupActive = ref(false);
const enablePopup = (type) => {
  console.log('>>>', type);
  freezeScrolling(true);
  if (type === 'CATALOGUE') {
    cataloguePopupActive.value = true;
  } else {
    contactPopupActive.value = true;
  }
};
const disablePopup = () => {
  freezeScrolling(false);
  cataloguePopupActive.value = false;
  contactPopupActive.value = false;
};

const scrollTo = (position) => {
  document.getElementById(position).scrollIntoView(true);
};
</script>

<style scoped>

</style>
