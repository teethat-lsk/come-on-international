<template>
  <div
  @click="scrollTo(category.name.toLocaleLowerCase())"
    class="bg-white w-[300px] mobile:w-[110px] h-[300px] mobile:h-[130px] rounded-lg shadow-md shadow-black/60 mobile:flex flex-col items-center"
  >
    <img :src="getUrl(props.category.icon)" alt="icon" class="mt-4 ml-4 mobile:w-[50px] mobile:ml-0" />
    <span 
    class="block mt-4 mobile:mt-2 ml-4 mobile:ml-0 text-left mobile:text-center text-[25px] mobile:text-[13px]"
    >{{ category.name }}</span>
    <ul class=" mobile:hidden list-disc text-left pl-16">
      <li class="text-[20px]"  v-for="text in props.category.examples">{{ text }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Props {
  category: ICategory;
}
const props = defineProps<Props>();

const icon = ref();
// icon.value = useAsset(props.category.icon);
const scrollTo = (position: string) => {
  const target = document.getElementById(position)
  target?.scrollIntoView({behavior:'smooth'})
};
const getUrl = (path: string) => {
  return new URL(
    `/assets/images/category/${path}`,
    import.meta.url
  ).href.toString();
};
// const useAsset = (path:string) => {
//     const assets =  import.meta.glob('../assets/images/category/*', {
//         eager: true,
//         import: 'default'
//     })
//     return assets['/assets/images/category/'+path]
// }
</script>

<style lang="scss" scoped></style>
