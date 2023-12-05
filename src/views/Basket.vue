<template>
  <div
    style="max-width: 950px; margin: 0 auto"
    class="whitespace-nowrap overflow-auto scrollbar-hide"
  >
    <h1 class="text-[40px] font-[900] pt-[30px] text-[#FF2E65] pb-[50px]">
      Себет
    </h1>
    <div
      v-if="this.logger && this.logger.order"
      class="flex flex-col justify-center items-center h-[500px] mb-[500px]"
    >
      <h1 class="text-[30px] font-medium">
        Сіздің тапсырысыңыз өңделді. Пицца күтіңіз
      </h1>
      <div
        @click="cancelOrder"
        class="mt-4 cursor-pointer focus:outline-none text-white bg-[#FF2E65] hover:bg-[#b63557] focus:ring-4 focus:ring-[#b63557] font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-900"
      >
        Тапсырыстан бас тарту
      </div>
    </div>

    <div>
      <div>
        <div
          v-for="item in items"
          class="flex items-center justify-between py-[15px] border-y-[1px] h-[130px]"
        >
          <img
            class="w-[70px] h-[70px] object-contain"
            :src="item.image"
            alt=""
          />
          <div class="ml-[25px] w-[550px]">
            <h1 class="font-bold">{{ item.pizzaName }}</h1>
            <p class="font-medium text-[13px] text-[#686466] truncate-text">
              {{ item.content }} {{ item.gram }} г
            </p>
            <p class="font-medium text-[13px] text-[#686466]">
              Ингредиенттер:
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
        <div v-if="wait" class="flex justify-between text-end pt-[60px]">
          <button
            type="button"
            @click="openModal"
            class="ml-[15px] focus:outline-none text-white bg-[#FF2E65] hover:bg-[#b63557] focus:ring-4 focus:ring-[#b63557] font-medium rounded-lg text-[20px] px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Тапсырыс беру
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-if="isModalVisible" class="modal">
    <div class="modal-content">
      <div class="flex justify-between items-center">
        <h1 class="text-[30px] text-[#FF2E65] font-bold">
          Қайда жеткізу керек?
        </h1>
        <p @click="closeModal" class="font-bold text-[30px]">X</p>
      </div>

      <div v-if="selectTab === 'Tab1'">
        <div class="pt-[30px] text-[18px] font-medium">
          <div>
            <input
              v-model="adres"
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-[#FF2E65] text-sm rounded-lg focus:ring-[#FF2E65] focus:border-[#FF2E65] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF2E65] dark:focus:border-[#FF2E65]"
              placeholder="Адрес"
            />
          </div>
          <div class="flex gap-[15px] pt-[16px]">
            <div>
              <input
                v-model="podezd"
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-[#FF2E65] text-sm rounded-lg focus:ring-[#FF2E65] focus:border-[#FF2E65] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF2E65] dark:focus:border-[#FF2E65]"
                placeholder="подъезд"
              />
            </div>
            <div>
              <input
                v-model="floor"
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-[#FF2E65] text-sm rounded-lg focus:ring-[#FF2E65] focus:border-[#FF2E65] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF2E65] dark:focus:border-[#FF2E65]"
                placeholder="Этаж"
              />
            </div>
            <div>
              <input
                v-model="door"
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-[#FF2E65] text-sm rounded-lg focus:ring-[#FF2E65] focus:border-[#FF2E65] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF2E65] dark:focus:border-[#FF2E65]"
                placeholder="Квартира"
              />
            </div>
          </div>
          <div class="pt-[16px]">
            <textarea
              v-model="comment"
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-[#FF2E65] bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#FF2E65] focus:border-[#FF2E65] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF2E65] dark:focus:border-[#FF2E65]"
              placeholder="Мекен-жайға түсініктеме"
            ></textarea>
          </div>
          <RouterLink to="/Order">
            <div
              @click="addInfo"
              class="mt-[30px] focus:outline-none cursor-pointer text-white bg-[#FF2E65] hover:bg-[#b63557] focus:ring-4 focus:ring-[#b63557] rounded-lg text-sm me-2 dark:focus:ring-yellow-900 w-[224px] text-[15px] font-medium text-center py-[14px] px-[30px]"
            >
              Мекенжайды растау
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
      sous: null,
      currentUser: null,
      totalSum: 0,
      adres: "",
      podezd: null,
      floor: null,
      door: null,
      comment: "",
      logger: null,
      wait: true,
    };
  },
  methods: {
    async addInfo() {
      if (this.currentUser) {
        const docRef = doc(db, "cart", `${this.currentUser.uid}`);
        await updateDoc(docRef, {
          adres: this.adres,
          podezd: this.podezd,
          floor: this.floor,
          door: this.door,
          comment: this.comment,
          order: false,
        });
      }
    },
    async cancelOrder() {
      if (this.currentUser) {
        const docRef = doc(db, "cart", `${this.currentUser.uid}`);
        await updateDoc(docRef, {
          order: false,
        });
      }
    },

    async saveCartToFirestore() {
      try {
        const docRef = doc(db, "cart", this.currentUser.uid);
        await updateDoc(docRef, { cart: this.items });
      } catch (error) {
        console.error("Error saving cart to Firestore:", error);
      }
    },
    async deleteItem(item) {
      try {
        const cartDocRef = doc(db, "cart", this.currentUser.uid);

        // Get the current cart data
        const cartDoc = await getDoc(cartDocRef);
        const currentCart = cartDoc.exists() ? cartDoc.data().cart : [];

        // Find the index of the item to be deleted in the current cart
        const index = currentCart.findIndex(
          (cartItem) => cartItem.id === item.id
        );

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

    updateTotalPrice(item) {
      item.totalSum = item.price * item.quantity;
      this.saveCartToFirestore();
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
    auth.onAuthStateChanged(async (user) => {
      if (user) this.currentUser = user;
      const docRef = doc(db, "cart", this.currentUser.uid);
      const unsubscribe = onSnapshot(docRef, (docSnap) => {
        if (docSnap.exists()) {
          this.logger = docSnap.data();
          this.items = docSnap.data().cart;
        } else {
          console.log("No such document!");
        }
      });

      // Save the unsubscribe function in a component variable if needed latuu
      this.unsubscribe = unsubscribe;
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
body {
  overflow: hidde;
}
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
.truncate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
</style>
