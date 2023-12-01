<template>
  <div>
    <h1 class="text-[40px] font-[900] pt-[30px] text-[#FF2E65] pb-[50px]">
      Заказ на доставку
    </h1>
    <div class="flex justify-between">
      <div class="order-items w-[700px]">
        <div class="flex justify-between items-end">
          <label
            for="first_name"
            class="block mb-2 text-[17px] font-medium text-gray-900 dark:text-white"
            >Имя</label
          >
          <input
          disabled
          v-model="name"
            type="text"
            id="first_name"
            class="cursor-not-allowed bg-gray-50 w-[500px] border text-[#71717a] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Имя"
            required
          />
        </div>
        <div class="flex justify-between items-end mt-[24px]">
          <label
            for="first_name"
            class="block mb-2 text-[17px] font-medium text-gray-900 dark:text-white"
            >Номер телефона</label
          >
          <input
          disabled
          v-model="phone"
            type="text"
            id="first_name"
            class="cursor-not-allowed bg-gray-50 w-[500px] border text-[#71717a] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Номер телефона"
            required
          />
        </div>
        <div class="flex justify-between items-start mt-[24px]">
          <label
            for="first_name"
            class="block mb-2 text-[17px] font-medium text-gray-900 dark:text-white"
            >Адрес доставки</label
          >
          <input
          disabled
          v-model="fullAdress"
            type="text"
            id="first_name"
            class="cursor-not-allowed bg-gray-50 h-[130px] w-[500px] border border-gray-300 text-[#a1a1aa] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Адрес доставки"
            required
          />
        </div>
        <div class="flex justify-between items-end mt-[24px]">
          <label
            for="first_name"
            class="block mb-2 text-[17px] font-medium text-gray-900 dark:text-white"
            >Время доставки</label
          >
          <input
            v-model="time"
            @click="openModal"
            type="text"
            id="first_name"
            class="bg-gray-50 w-[500px] border text-[#71717a] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Время доставки"
            required
          />
        </div>
      </div>
      <div class="w-[340px] rounded-[15px] border-[1px]">
        <p class="text-[#FF2E65] font-medium p-[20px]">Состов заказа</p>
        <div
          v-for="item in 3"
          class="flex justify-between items-start p-[20px]"
        >
          <div class="">
            <p class="font-bold text-[16px]">Кломбо за 2шт</p>
            <p class="text-[#231F20CC] text-[11px]">
              Средняя 30 см, традиционное тесто
            </p>
          </div>
          <div class="price font-bold">599₽</div>
        </div>
        <div class="flex justify-between p-[20px]">
          <p>Сумма заказа</p>
          <div class="font-bold text-[17px]">1 048 ₽</div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="isModalVisible" class="modal">
    <div class="modal-content">
      <h1 class="text-[#FF2E65] text-[26px] font-bold mb-[35px]">
        Время доставки
      </h1>
      <div class="flex flex-wrap gap-[14px]">
        <!-- Loop through the delivery time options -->
        <div
          v-for="(option, index) in deliveryTimeOptions"
          :key="index"
          @click="selectDeliveryTime(index)"
          class="w-[280px] p-[19px] border-[1px] bg-white rounded-[8px] text-[#231F20] text-[15px] font-medium"
          :style="{
            'border-color': selectedOptionIndex === index ? '#FF2E65' : '',
          }"
        >
          {{ option }}
        </div>
      </div>
    </div>
  </div>

  <h1 class="text-[30px] font-[900] pt-[30px] text-[#FF2E65] pb-[20px]">
    Промокод
  </h1>
  <div class="flex">
    <input
    v-model="promo"
      type="text"
      placeholder="Введите промокод"
      id="small-input"
      class="block p-2 w-[200px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-[#FF2E65] focus:border-[#FF2E65] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF2E65] dark:focus:border-[#FF2E65]"
    />
    <button
      type="button"
      class="ml-[15px] focus:outline-none text-white bg-[#FF2E65] hover:bg-[#b63557] focus:ring-4 focus:ring-[#b63557] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
    >
      Применить
    </button>
  </div>

  <div class="w-[700px] bg-[#F1F2F5] mt-[60px] rounded-[6px] p-[35px]">
    <h1 class="text-[30px] font-[900] text-[#FF2E65]">Способы оплаты</h1>
    <div class="text-[18px]">
      <div class="flex items-center mt-[38px]">
        <input
          id="default-radio-1"
          type="radio"
          value="card"
          name="payment-method"
          class="w-4 h-4 text-[#FF2E65] bg-gray-100 border-gray-300 focus:ring-[#FF2E65] dark:focus:ring-[#FF2E65] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          v-model="selectedPaymentMethod"
        />
        <label
          for="default-radio-1"
          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Картой на сайте</label
        >
      </div>

      <div v-if="selectedPaymentMethod === 'card'" class="flex items-center">
        <div class="pt-[23px] w-[322px]">
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 w-[322px] border text-[#71717a] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Номер карты"
            required
          />
          <div class="flex justify-between pt-[10px]">
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 w-[202px] border text-[#71717a] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Дата"
              required
            />
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 w-[109px] border text-[#71717a] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="CVC"
              required
            />
          </div>
        </div>
        <img
          class="ml-[23px] w-[260px] h-[90px]"
          src="../assets/card.png"
          alt=""
        />
      </div>
      <div class="flex items-center mt-[18px]">
        <input
          id="default-radio-2"
          type="radio"
          value="cash"
          name="payment-method"
          class="w-4 h-4 text-[#FF2E65] bg-gray-100 border-gray-300 focus:ring-[#FF2E65] dark:focus:ring-[#FF2E65] dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          v-model="selectedPaymentMethod"
        />
        <label
          for="default-radio-2"
          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Наличными</label
        >
      </div>
   
      <div v-if="selectedPaymentMethod === 'cash'" class="flex items-center">
        <p class="text-[15px]">С какой суммы подготовить сдачу?</p>
        <input
          v-if="!isChecked"
          type="text"
          id="first_name"
          class="ml-[10px] bg-gray-50 w-[116px] border text-[#71717a] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          required
        />
        <p v-else class="text-[17px] text-[#FF2E65] font-medium mx-[15px]">
          1500 тг
        </p>
        <div class="ml-[9px]">
          <input
            id="default-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            v-model="isChecked"
          />
          <label
            for="default-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Без сдачи</label
          >
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-between items-center max-w-[710px] pt-[53px]">
    <p class="text-[#696F7A] text-[15px] font-medium">Вернуться в магазин</p>
    <button
      type="button"
      @click="openModal2"
      class="ml-[15px] focus:outline-none text-white bg-[#FF2E65] hover:bg-[#b63557] focus:ring-4 focus:ring-[#b63557] font-medium rounded-lg text-[20px] px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
    >
      Оформить заказ
    </button>
  </div>
  <div v-if="isModal" class="modal">
    <div class="modal-content">
      <h1 class="text-[#FF2E65] text-[26px] font-bold mb-[35px] text-center">
        Заказ прниять ождайте
      </h1>
      <button
        type="button"
        @click="closeModal2"
        class="ml-[225px] focus:outline-none text-white bg-[#FF2E65] hover:bg-[#b63557] focus:ring-4 focus:ring-[#b63557] font-medium rounded-lg text-[20px] px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
      >
        Закрыть
      </button>
    </div>
  </div>
</template>

<script>
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  onSnapshot,
  getDoc,
} from "firebase/firestore";

import { db, auth } from "../firebase/firebase";
export default {
  data() {
    return {
      isModalVisible: false,
      isModal: false,
      selectedOptionIndex: 1,
      time: "",
      isChecked: false,
      selectedPaymentMethod: "",
      promo:'',
      deliveryTimeOptions: [
        "11:00",
        "13:00",
        "15:00",
        "17:00",
        "19:00",
        "21:00",
        "23:00",
        "01:00",
        "03:00",
        "05:00",
      ],
      name:null,
      phone:null,
      fullAdress: null,
      adres:null,
      podezd:null,
      floor:null,
      door:null,
    };
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    openModal2() {
      this.isModal = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    closeModal2() {
      this.isModal = false;
    },
    selectDeliveryTime(index) {
      this.selectedOptionIndex = index;
      this.time = this.deliveryTimeOptions[index]; // Set time to the selected option
      this.closeModal();
    },
  },
  async created () {
        auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.currentUser = user.uid;
        const userDocRef = doc(db, "cart", this.currentUser);
        
        onSnapshot(userDocRef, (doc) => {
          if (doc.exists()) {
           this.adres = doc.data().adres;
           this.floor = doc.data().floor;
           this.door = doc.data().door;
           this.podezd = doc.data().podezd 
           
               this.fullAdress = `Адрес: ${this.adres}, подъезд: ${this.podezd}, этаж: ${this.floor}, квартира: ${this.door}, `;
          } 
        });
      }
      const userInfo = doc(db, "users", this.currentUser);
      onSnapshot(userInfo, (doc) => {
          if (doc.exists()) {
           this.name = doc.data().name;
           this.phone = doc.data().phone;
           
          } 
        });
    });
  }
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background-color: #e3ecf5;
  padding: 45px;
  border-radius: 22px;
  width: 80%;
  max-width: 668px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  cursor: pointer;
  background: none;
  border: none;
}
</style>
