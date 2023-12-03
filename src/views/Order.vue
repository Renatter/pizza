<template>
  <div>
    <h1 class="text-[40px] font-[900] pt-[30px] text-[#FF2E65] pb-[50px]">
      Жеткізу тапсырысы
    </h1>

    <div class="flex justify-between">
      <div class="order-items w-[700px]">
        <div class="flex justify-between items-end">
          <label
            for="first_name"
            class="block mb-2 text-[17px] font-medium text-gray-900 dark:text-white"
            >Аты</label
          >
          <input
            disabled
            v-model="name"
            type="text"
            id="first_name"
            class="cursor-not-allowed bg-gray-50 w-[500px] border text-[#71717a] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Аты"
            required
          />
        </div>
        <div class="flex justify-between items-end mt-[24px]">
          <label
            for="first_name"
            class="block mb-2 text-[17px] font-medium text-gray-900 dark:text-white"
            >Телефон нөмірі</label
          >
          <input
            disabled
            v-model="phone"
            type="text"
            id="first_name"
            class="cursor-not-allowed bg-gray-50 w-[500px] border text-[#71717a] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Телефон нөмірі"
            required
          />
        </div>
        <div class="flex justify-between items-start mt-[24px]">
          <label
            for="first_name"
            class="block mb-2 text-[17px] font-medium text-gray-900 dark:text-white"
            >Жеткізу мекенжайы</label
          >
          <input
            disabled
            v-model="fullAdress"
            type="text"
            id="first_name"
            class="cursor-not-allowed bg-gray-50 h-[130px] w-[500px] border border-gray-300 text-[#a1a1aa] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Жеткізу мекенжайы"
            required
          />
        </div>
        <div class="flex justify-between items-end mt-[24px]">
          <label
            for="first_name"
            class="block mb-2 text-[17px] font-medium text-gray-900 dark:text-white"
            >Жеткізу уақыты</label
          >
          <input
            v-model="time"
            @click="openModal"
            type="text"
            id="first_name"
            class="bg-gray-50 w-[500px] border text-[#71717a] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Жеткізу уақыты"
            required
          />
        </div>
      </div>
      <div class="w-[430px] rounded-[15px] border-[1px] border-[#FF2E65]">
        <div v-if="order === false">
          <p class="text-[#FF2E65] font-medium p-[20px]">Тапсырыс құрамы</p>
          <div
            v-for="item in itemsPizza"
            class="flex justify-between items-start p-[20px]"
          >
            <div class="">
              <p class="font-bold text-[16px] w-[250px]">
                {{ item.pizzaName }}
                <span class="text-[#FF2E65]">{{ item.quantity }} шт </span>
              </p>
              <p class="text-[#231F20CC] text-[11px]">
                {{ item.size }} {{ item.muka }}
              </p>
            </div>
            <div class="price font-bold">{{ item.totalSum }} тг</div>
          </div>
          <div class="flex justify-between p-[20px]">
            <p class="text-[#FF2E65] font-medium">Тапсырыс сомасы</p>
            <div class="font-bold text-[17px]">
              {{ calculateTotalSum() }} тг
            </div>
          </div>
        </div>
        <div
          v-if="order === true"
          class="mt-[50px] text-center text-[60px] font-medium text-[#FF2E65]"
        >
          Жеткізуді күтіңіз
        </div>
      </div>
    </div>
  </div>
  <div v-if="isModalVisible" class="modal">
    <div class="modal-content">
      <h1 class="text-[#FF2E65] text-[26px] font-bold mb-[35px]">
        Жеткізу уақыты
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
      v-model="promoCode"
      type="text"
      placeholder="Жарнамалық кодты енгізіңіз"
      id="small-input"
      class="block p-2 w-[200px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-[#FF2E65] focus:border-[#FF2E65] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF2E65] dark:focus:border-[#FF2E65]"
    />
    <button
      @click="applyPromoCode"
      type="button"
      class="ml-[15px] focus:outline-none text-white bg-[#FF2E65] hover:bg-[#b63557] focus:ring-4 focus:ring-[#b63557] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
    >
      Қолдану
    </button>
    <div v-if="disc" class="text-[#FF2E65] font-bold text-[25px]">
      Промокод {{ disc }} %
    </div>
  </div>

  <div class="w-[700px] bg-[#F1F2F5] mt-[60px] rounded-[6px] p-[35px]">
    <h1 class="text-[30px] font-[900] text-[#FF2E65]">Төлем әдістері</h1>
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
          >Сайттағы карта</label
        >
      </div>

      <div v-if="selectedPaymentMethod === 'card'" class="flex items-center">
        <div class="pt-[23px] w-[322px]">
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 w-[322px] border text-[#71717a] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Карта нөмірі"
            required
          />
          <div class="flex justify-between pt-[10px]">
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 w-[202px] border text-[#71717a] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Күні"
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
          >Қолма-қол ақшамен</label
        >
      </div>

      <div v-if="selectedPaymentMethod === 'cash'" class="flex items-center">
        <p class="text-[15px]">Сдача қандай сомадан дайындау керек?</p>
        <input
          v-model="isCash"
          v-if="!isChecked"
          type="text"
          id="first_name"
          class="ml-[10px] bg-gray-50 w-[116px] border text-[#71717a] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder=""
          required
        />
        <p v-else class="text-[17px] text-[#FF2E65] font-medium mx-[15px]">
          {{ calculateTotalSum() }} тг
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
    <p class="text-[#696F7A] text-[15px] font-medium"></p>
    <button
      type="button"
      @click="openModal2"
      class="ml-[15px] focus:outline-none text-white bg-[#FF2E65] hover:bg-[#b63557] focus:ring-4 focus:ring-[#b63557] font-medium rounded-lg text-[20px] px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
    >
      Тапсырыс беру
    </button>
  </div>
  <div v-if="isModal" class="modal">
    <div class="modal-content">
      <h1 class="text-[#FF2E65] text-[26px] font-bold mb-[35px] text-center">
        Тапсырыс қабылданды күте тұрыңыз
      </h1>
      <router-link to="/">
        <button
          type="button"
          @click="closeModal2"
          class="ml-[225px] focus:outline-none text-white bg-[#FF2E65] hover:bg-[#b63557] focus:ring-4 focus:ring-[#b63557] font-medium rounded-lg text-[20px] px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
        >
          Жабу
        </button>
      </router-link>
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
  updateDoc,
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
      promo: "",
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
      name: null,
      phone: null,
      fullAdress: null,
      adres: null,
      podezd: null,
      floor: null,
      door: null,
      itemsPizza: [],
      promoCode: "",
      disc: "",
      totalSum: null,
      isCash: 0,
      order: null,
    };
  },
  methods: {
    calculateTotalSum() {
      console.log("1");
      const totalWithoutDiscount = this.itemsPizza.reduce(
        (total, item) => total + item.totalSum,
        0
      );

      if (this.disc) {
        const discountAmount = totalWithoutDiscount * (1 - this.disc / 100);
        const res = totalWithoutDiscount - discountAmount;

        return totalWithoutDiscount - res;
      } else {
        return totalWithoutDiscount;
      }
    },
    openModal() {
      this.isModalVisible = true;
    },
    openModal2() {
      this.addOrder();
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
    async applyPromoCode() {
      const promoCode = this.promoCode; // Значение промокода
      const promoCollectionRef = collection(db, "promo"); // Ссылка на коллекцию "promo"

      // Запрос Firestore для получения документа с соответствующим промокодом
      const querySnapshot = await getDocs(
        query(promoCollectionRef, where("name", "==", promoCode))
      );

      if (!querySnapshot.empty) {
        const promoDoc = querySnapshot.docs[0].data();
        const discount = promoDoc.discount;
        this.disc = promoDoc.discount;
        this.totalSum = this.totalSum * (1 - discount / 100);
        this.calculateTotalSum();
      }
    },
    async addOrder() {
      const docRef = doc(db, "cart", `${this.currentUser}`);
      await updateDoc(docRef, {
        order: true,
        name: this.name,
        phone: this.phone,
        time: this.time,
        fullSum: this.calculateTotalSum(),
        cash: this.selectedPaymentMethod,
        isCheckedPrice: !this.isChecked ? +this.isCash : 0,
      });
    },
  },
  async created() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.currentUser = user.uid;
        const userDocRef = doc(db, "cart", this.currentUser);
        onSnapshot(userDocRef, (doc) => {
          if (doc.exists()) {
            this.itemsPizza = doc.data().cart;
            this.adres = doc.data().adres;
            this.floor = doc.data().floor;
            this.door = doc.data().door;
            this.podezd = doc.data().podezd;
            this.order = doc.data().order;

            this.fullAdress = `Адрес: ${this.adres}, подъезд: ${this.podezd}, этаж: ${this.floor}, квартира: ${this.door}, `;
          }
        });
      }
      const userInfo = doc(db, "users", this.currentUser);
      onSnapshot(userInfo, (doc) => {
        if (doc.exists()) {
          this.name = doc.data().firstName;
          this.phone = doc.data().phone;
        }
      });
    });
  },
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
