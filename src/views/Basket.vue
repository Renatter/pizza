<template>
  <div style="max-width: 950px; margin: 0 auto;">
    <h1 class="text-[40px] font-[900] pt-[30px] text-[#F7D22D] pb-[50px]">Корзина</h1>
 <div class="flex items-center justify-between py-[15px] border-y-[1px] h-[130px]">
      <img class="w-[70px] h-[70px]" src="https://cdn.dodostatic.net/static/Img/Products/b9e9517672f94fd98640017e61d35205_146x146.png" alt="">
      <div class="ml-[25px] w-[450px]">
        <h1 class="font-bold">С креветками и трюфелями</h1>
        <p class="font-medium text-[13px] text-[#686466]">Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г
        </p>
      </div>
      <p class="text-[#F7D22D] text-[30px] font-bold"> 120 ₽</p>
      <div class="ml-[15px] py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700" data-hs-input-number>
        <div class="flex items-center gap-x-1.5">
          <button @click="quantity--" type="button" class="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-input-number-decrement>
            <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
          </button>
          <input class="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white" type="text" v-model="quantity" data-hs-input-number-input>
          <button @click="quantity++" type="button" class="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-input-number-increment>
            <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          </button>
        </div>
      </div>
     <div>
       <button type="button" class=" focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Отменить</button>
     </div>
    </div>
     <h1 class="text-[35px] font-[900] pt-[30px] text-[#F7D22D] pb-[20px]">Добавить к заказу?</h1>

     <div class="flex justify-between ">
        <div v-for="item in 3" class="w-[255px] flex items-center border-[1px] border-[#E2E2E9] rounded-[12px] p-[17px]">
            <img class="w-[70px] h-[70px]" src="https://xn----7sbatzcnpe0ae.xn--p1ai/sites/default/files/2022-07/%D1%81%D0%B0%D0%BB%D1%84%D0%B5%D1%82%D0%BA%D0%B8.png" alt="">
            <div class="text-[20px] ml-[15px]">
                <h1 class="font-medium ">Салфетки</h1>
                <p class="text-[#FF2E65]">от 80тг</p>
            </div>
        </div>
     </div>
     <h1 class="text-[30px] font-[900] pt-[30px] text-[#F7D22D] pb-[20px]">Соусы к бортикам и закускам</h1>
     <div class="flex justify-between">
        <Element v-for="item in 6"></Element>
     </div>
     <h1 class="text-[30px] font-[900] pt-[30px] text-[#FF2E65] pb-[20px]">Промокод</h1>
  </div>
</template>

<script>
import Element from '../components/Element.vue';
export default {
    components: {
        Element
    },
  data() {
    return {
      quantity: 0
    };
  }
}
</script>

<style lang="scss" scoped>
</style>
