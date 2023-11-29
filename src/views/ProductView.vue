<template>
  <div>
    <h1>{{ id }}</h1>
    <div class="flex min-h-[600px] items-start">
    <div class="min-w-[500px] flex justify-center items-center">
  <img
    :class="{'w-[270px]': activeTab === 'Tab1', 'w-[350px]': activeTab === 'Tab2', 'w-[500px]': activeTab === 'Tab3'}"
    src="https://dodopizza-a.akamaihd.net/static/Img/Products/f32256e8cefd4655ae646f22cf83390d_292x292.webp"
    alt=""
  />
</div>

      <div class="text ml-[35px]">
        <h1 class="text-[70px] font-bold">Пицца Жюльен</h1>
        <p class="text-[25px]">{{ sm }} см, {{ muka }} тесто, {{ gm }} г</p>
        <p class="text-[#94a3b8] text-[25px] mt-[20px]">Моцарелла, соус альфредо</p>

        <ul class=" flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li class="me-2 text-[20px]">
            <a
              href="#"
              class="inline-block px-4 py-3"
              :class="{' bg-[#F7D22D] rounded-lg text-black': activeTab === 'Tab1', 'rounded-lg bg-gray-100 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white': activeTab !== 'Tab1'}"
              @click="changeTab('Tab1')"
            >
              Маленькая
            </a>
          </li>
          <li class="me-2 text-[20px]">
            <a
              href="#"
              class="inline-block px-4 py-3"
              :class="{'text-black bg-[#F7D22D] rounded-lg': activeTab === 'Tab2', 'rounded-lg  bg-gray-100 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white': activeTab !== 'Tab2'}"
              @click="changeTab('Tab2')"
            >
              Средняя
            </a>
          </li>
          <li class="me-2 text-[20px]">
            <a
              href="#"
              class="inline-block px-4 py-3"
              :class="{'text-black bg-[#F7D22D] rounded-lg': activeTab === 'Tab3', 'rounded-lg bg-gray-100 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white': activeTab !== 'Tab3'}"
              @click="changeTab('Tab3')"
            >
              Большая
            </a>
          </li>
        </ul>
         <ul class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mt-[15px]">
          <li class="me-2 text-[20px]">
            <a
              href="#"
              class="inline-block px-4 py-3 "
              :class="{' bg-[#F7D22D] rounded-lg text-black': selectTab === 'Tab1', 'rounded-lg bg-gray-100 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white': selectTab !== 'Tab1'}"
              @click="selectTabe('Tab1')"
            >
              Традиционное
            </a>
          </li>
          <li class="me-2 text-[20px]">
            <a
              href="#"
              class="inline-block px-4 py-3 w-[220px] "
              :class="{'text-black bg-[#F7D22D] rounded-lg': selectTab === 'Tab2', 'rounded-lg  bg-gray-100 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white': selectTab !== 'Tab2'}"
              @click="selectTabe('Tab2')"
            >
              Тонкое
            </a>
          </li>
        </ul>  
       <div class=" mt-[50px]">
           <button type="button" class="text-[18px] focus:outline-none text-black bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg  px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Добавить в корзину за 3600 тг</button>
       </div>
      </div>     
    </div>
     <h1 class="mt-[15px] font-bold text-[20px] mb-[15px]">Добавить по вкусу</h1>
            <div class="flex flex-wrap gap-[10px]">
         <Element v-for="item in 20" @item-clicked="handleItemClicked" :id="item"></Element>
        </div>
  </div>
</template>

<script>
import Element from "../components/Element.vue"
export default {
  components: {
    Element
  },
  data() {
    return {
      id: this.$route.params.id,
      sm: 25,
      gm: 430,
      muka:'Традиционное',
      activeTab: 'Tab1',
      selectTab: 'Tab1'
    };
  },
  methods: {
    handleItemClicked(clickedItemId) {
      console.log(`Item with id ${clickedItemId} was clicked.`);
      // Do something with the clicked item data
    },
    changeTab(tab) {
      this.activeTab = tab;
      switch (tab) {
        case 'Tab1':
          this.sm = 25;
          this.gm = 430;
          break;
        case 'Tab2':
          this.sm = 30;
          this.gm = 640;
          break;
        case 'Tab3':
          this.sm = 35;
          this.gm = 830;
          break;
      }
    },
    selectTabe(tab) {
        this.selectTab = tab
         switch (tab) {
        case 'Tab1':
          this.muka = 'Традиционное';
          break;
        case 'Tab2':
          this.muka = 'Тонкое';

    }}
    
  },
};
</script>

<style lang="scss" scoped>
</style>
