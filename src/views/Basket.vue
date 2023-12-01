<template>
  <div style="max-width: 950px; margin: 0 auto">
    <h1 class="text-[40px] font-[900] pt-[30px] text-[#FF2E65] pb-[50px]">
      Корзина
    </h1>
    <div
      v-if="items && items.length === 0"
      class="text-center text-[90px] font-bold"
    >
      Пусто
    </div>

    <div v-else>
      <div
        v-for="item in items"
        class="flex items-center justify-between py-[15px] border-y-[1px] h-[130px]"
      >
        <img
          class="w-[70px] h-[70px]"
          src="https://cdn.dodostatic.net/static/Img/Products/b9e9517672f94fd98640017e61d35205_146x146.png"
          alt=""
        />
        <div class="ml-[25px] w-[450px]">
          <h1 class="font-bold">{{ item.pizzaName }}</h1>
          <p class="font-medium text-[13px] text-[#686466]">
            {{ item.content }} {{ item.gram }} г
          </p>
          <p class="font-medium text-[13px] text-[#686466]">
            Ингредиенты:
            <span class="text-[#FF2E65]" v-for="i in item.ingredients"
              >{{ i }}/
            </span>
          </p>
        </div>
        <p class="text-[#FF2E65] text-[30px] font-bold">
          {{ item.totalSum }} тг
        </p>
        <div
          class="ml-[15px] py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700"
          data-hs-input-number
        >
          <div class="flex items-center gap-x-1.5">
            <input
              type="number"
              min="0"
              v-model="item.quantity"
              @change="updateTotalPrice(item)"
              class="w-16 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
        </div>
        <div>
          <img
            @click="deleteItem(item)"
            class="cursor-pointer"
            src="../assets/basket.png"
            alt=""
          />
        </div>
      </div>
      <h1 class="text-[35px] font-[900] pt-[30px] text-[#FF2E65] pb-[20px]">
        Добавить к заказу?
      </h1>

      <div class="flex flex-wrap gap-[15px]">
        <div
          v-for="item in 4"
          class="w-[224px] flex items-center border-[1px] border-[#E2E2E9] rounded-[12px] p-[17px]"
        >
          <img
            class="w-[70px] h-[70px]"
            src="https://xn----7sbatzcnpe0ae.xn--p1ai/sites/default/files/2022-07/%D1%81%D0%B0%D0%BB%D1%84%D0%B5%D1%82%D0%BA%D0%B8.png"
            alt=""
          />
          <div class="text-[20px] ml-[15px]">
            <h1 class="font-medium">Салфетки</h1>
            <p class="text-[#FF2E65]">от 80тг</p>
          </div>
        </div>
      </div>
      <h1 class="text-[30px] font-[900] pt-[30px] text-[#FF2E65] pb-[20px]">
        Соусы к бортикам и закускам
      </h1>
      <div class="flex justify-between"></div>

      <div class="flex justify-between text-end pt-[60px]">
        <button
          type="button"
          @click="openModal"
          class="ml-[15px] focus:outline-none text-white bg-[#FF2E65] hover:bg-[#b63557] focus:ring-4 focus:ring-[#b63557] font-medium rounded-lg text-[20px] px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
        >
          Заказать
        </button>
      </div>
    </div>
  </div>
  <div v-if="isModalVisible" class="modal">
    <div class="modal-content">
      <div class="flex justify-between items-center">
        <h1 class="text-[30px] text-[#FF2E65] font-bold">Куда доставить?</h1>
        <p @click="closeModal" class="font-bold text-[30px]">X</p>
      </div>

      <div v-if="selectTab === 'Tab1'">
        <div class="pt-[30px] text-[18px] font-medium">
          <div>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-[#FF2E65] text-sm rounded-lg focus:ring-[#FF2E65] focus:border-[#FF2E65] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF2E65] dark:focus:border-[#FF2E65]"
              placeholder="Адрес"
            />
          </div>
          <div class="flex gap-[15px] pt-[16px]">
            <div>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-[#FF2E65] text-sm rounded-lg focus:ring-[#FF2E65] focus:border-[#FF2E65] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF2E65] dark:focus:border-[#FF2E65]"
                placeholder="подъезд"
              />
            </div>
            <div>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-[#FF2E65] text-sm rounded-lg focus:ring-[#FF2E65] focus:border-[#FF2E65] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF2E65] dark:focus:border-[#FF2E65]"
                placeholder="Этаж"
              />
            </div>
            <div>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-[#FF2E65] text-sm rounded-lg focus:ring-[#FF2E65] focus:border-[#FF2E65] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF2E65] dark:focus:border-[#FF2E65]"
                placeholder="Квартира"
              />
            </div>
          </div>
          <div class="pt-[16px]">
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-[#FF2E65] bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#FF2E65] focus:border-[#FF2E65] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF2E65] dark:focus:border-[#FF2E65]"
              placeholder="Комментарий к адресу"
            ></textarea>
          </div>
          <RouterLink to="/Order">
            <div
              class="mt-[30px] focus:outline-none cursor-pointer text-white bg-[#FF2E65] hover:bg-[#b63557] focus:ring-4 focus:ring-[#b63557] rounded-lg text-sm me-2 dark:focus:ring-yellow-900 w-[224px] text-[15px] font-medium text-center py-[14px] px-[30px]"
            >
              Подтевердить адес
            </div>
          </RouterLink>
        </div>
      </div>
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
  arrayRemove,
} from "firebase/firestore";
import { db, auth } from "../firebase/firebase";
import Element from "../components/Element.vue";
export default {
  watch: {
    $route(to, from) {
      // Ваш код обновления страницы
      location.reload();
    },
  },
  components: {
    Element,
  },
  data() {
    return {
      quantity: 0,
      isModalVisible: false,
      selectTab: "Tab1",
      items: null,
      currentUser: null,
      totalSum: 0,
    };
  },
  methods: {
 async deleteItem(item) {
      try {
        const cartDocRef = doc(db, "cart", this.currentUser.uid);

        // Get the current cart data
        const cartDoc = await getDoc(cartDocRef);
        const currentCart = cartDoc.exists() ? cartDoc.data().cart : [];

        // Find the index of the item to be deleted in the current cart
        const index = currentCart.findIndex((cartItem) => cartItem.id === item.id);

        if (index !== -1) {
          // Remove the item from the current cart array
          currentCart.splice(index, 1);

          // Update the cart document with the modified cart array
          await updateDoc(cartDocRef, { cart: currentCart });
        }
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    },
    // ... your existing methods ...

    updateTotalPrice(item) {
      // Метод для обновления общей стоимости товара
      item.totalSum = item.price * item.quantity;
    },
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    selectTabe(tab) {
      this.selectTab = tab;
    },
  },
  async created() {
    
    // Check user authentication status
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.currentUser = user;
        const docRef = doc(db, "cart", this.currentUser.uid);

        // Subscribe to real-time updates using onSnapshot
        const unsubscribe = onSnapshot(docRef, (docSnap) => {
          if (docSnap.exists()) {
            // Update items array with the cart data
            this.items = docSnap.data().cart;
          } else {
            console.log("No such document!");
          }
        });

        // Save the unsubscribe function in a component variable if needed later
        this.unsubscribe = unsubscribe;
      }
    });
  },
  beforeDestroy() {
    // Unsubscribe from real-time updates when the component is destroyed
    if (this.unsubscribe) {
      this.unsubscribe();
    }
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
  background-color: #fff;
  padding: 45px;
  border-radius: 22px;
  width: 80%;
  max-width: 600px;
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
