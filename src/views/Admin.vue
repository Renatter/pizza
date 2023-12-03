<template>
  <div class="flex flex-wrap gap-[15px] justify-between mt-[15px]">
    <div v-for="(item, index) in menuItems" :key="index">
      <router-link
        :to="{ path: item.path + '/' + item.url + '/' + item.title }"
      >
        <div
          class="w-[270px] h-[270px] border-[#94a3b8] border-[2px] rounded-[15px] flex flex-col justify-center items-center cursor-pointer"
          @click="changeBorderColor(item)"
          :style="{ borderColor: item.bordercolor }"
          :class="{
            'hover:bg-gray-300': item.hovered,
            'text-white': item.hovered,
          }"
          @mouseenter="item.hovered = true"
          @mouseleave="item.hovered = false"
        >
          <img class="w-[180px] h-[180px]" alt="" :src="item.img" />
          <span class="mt-2 text-[30px] font-medium">{{ item.title }}</span>
        </div>
      </router-link>
    </div>
    <router-link :to="{ path: '/AdminOrder' }">
      <div
        class="h w-[270px] h-[270px] border-[#94a3b8] border-[2px] rounded-[15px] flex flex-col justify-center items-center cursor-pointer"
      >
        <img class="w-[180px] h-[180px]" alt="" src="../assets/order.png" />
        <span class="mt-2 text-[30px] font-medium">Тапсырыс</span>
      </div>
    </router-link>
    <router-link :to="{ path: '/Promo' }">
      <div
        class="h w-[270px] h-[270px] border-[#94a3b8] border-[2px] rounded-[15px] flex flex-col justify-center items-center cursor-pointer"
      >
        <img class="w-[180px] h-[180px]" alt="" src="../assets/promo.png" />
        <span class="mt-2 text-[30px] font-medium">Промокод</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import pizzaImage from "../assets/pizza.png";
import HotDogImage from "../assets/hot-dog.png";
import CockTail from "../assets/cocktail.png";
import Coffe from "../assets/coffe.png";
import Tort from "../assets/tort.png";
import Cok from "../assets/cok.png";
import Sous from "../assets/sous.png";
export default {
  data() {
    return {
      bordercolor: "#94a3b8",
      originalColor: "#94a3b8",
      menuItems: [
        {
          title: "Пицца",
          img: pizzaImage,
          url: "pizza",
          path: "AddItem",
        },
        {
          title: "Тағамдар",
          img: HotDogImage,
          url: "snacks",
          path: "AddSnake",
        },
        {
          title: "Коктейльдер",
          img: CockTail,
          url: "cocktails",
          path: "AddSnake",
        },
        { title: "Кофе", img: Coffe, url: "coffe", path: "AddSnake" },
        { title: "Десерттер", img: Tort, url: "deserts", path: "AddSnake" },
        { title: "Сусындар", img: Cok, url: "juices", path: "AddSnake" },
        { title: "Тұздықтар", img: Sous, url: "sous", path: "AddSnake" },
      ],
    };
  },
  methods: {
    changeBorderColor(item) {
      if (item.bordercolor === item.originalColor) {
        item.bordercolor = "#FF2E65";
      } else {
        item.bordercolor = item.originalColor;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
/* Стили для hover */
.hover\:bg-gray-300:hover {
  background-color: rgb(255, 102, 102);
}
.hover\:text-white:hover {
  color: white;
}
.h:hover {
  color: white;
  background-color: rgb(255, 102, 102);
}
</style>
