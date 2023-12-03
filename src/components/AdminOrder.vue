<template>
  <div class="flex flex-wrap gap-[10px] pt-[25px]">
    <div
      @click="openModal(i)"
      v-for="i in item"
      class="x w-[280px] h-[250px] border-[1px] rounded-[10px] p-[15px] border-[#FF2E65]"
    >
      <p class="font-medium">Аты: {{ i.name }}</p>
      <p class="font-medium">Номер: {{ i.phone }}</p>
      <p class="font-medium">
        Төлем әдісі: {{ i.cash === "cash" ? "Қолма-қол ақша" : "Карта" }}
      </p>
      <p class="font-medium">
        Мекен-жайы: {{ i.adres }} подъезд: {{ i.podezd }}, этаж: {{ i.floor }},
        квартира: {{ i.door }}
      </p>
      <p class="font-medium">Бағасы: {{ i.fullSum }} тг</p>
      <p class="font-medium" v-if="i.isCheckedPrice > 0">
        Сдача {{ i.isCheckedPrice }}тг ден
      </p>
    </div>
  </div>
  <div class="modal" v-if="showModal">
    <div class="modal-content">
      <!-- Отображение информации о выбранном элементе -->
      <p>
        Аты:
        <span class="text-[#FF2E65] font-medium"> {{ selectedItem.name }}</span>
      </p>
      <p>
        Номер:
        <span class="text-[#FF2E65] font-medium">
          {{ selectedItem.phone }}</span
        >
      </p>
      Тапсырыстар:
      <div class="border-[#ff2e65] border-[1px] p-[5px] rounded-[10px]">
        <div v-for="item in selectedItem.cart" class="flex items-center">
          <img class="w-[50px]" :src="item.image" alt="" />
          <span class="text-[#FF2E65] font-medium">{{ item.pizzaName }} </span>

          <p class="ml-[5px]">{{ item.quantity }}шт</p>
        </div>
      </div>
      <p>
        Пікір:
        <span class="text-[#FF2E65] font-medium">
          {{ selectedItem.comment }}</span
        >
      </p>
      <div class="flex">
        <p>
          Жеткізу мекенжайы:
          <span class="text-[#FF2E65] font-medium">
            {{ selectedItem.adres }}</span
          >
        </p>
        .
        <p class="ml-[5px]">
          Подъезд:
          <span class="text-[#FF2E65] font-medium">
            {{ selectedItem.podezd }}</span
          >.
        </p>
        <p class="ml-[5px]">
          Этаж:
          <span class="text-[#FF2E65] font-medium">
            {{ selectedItem.floor }}</span
          >.
        </p>
        <p class="ml-[5px]">
          Кв:
          <span class="text-[#FF2E65] font-medium">
            {{ selectedItem.door }}</span
          >.
        </p>
      </div>
      <p>
        Төлем әдісі:
        <span class="text-[#FF2E65] font-medium">
          {{ selectedItem.cash === "cash" ? "Қолма-қол ақша" : "Карта" }}</span
        >
      </p>
      <p class="font-medium" v-if="selectedItem.isCheckedPrice > 0">
        Сдача :
        <span class="text-[#FF2E65] font-medium">
          {{ selectedItem.isCheckedPrice }}тг ден
        </span>
      </p>
      <p class="">
        Бағасы:
        <span class="text-[#FF2E65] font-medium">
          {{ selectedItem.fullSum }}</span
        >.
      </p>
      <p class="">
        Жеткізу уақыты:
        <span class="text-[#FF2E65] font-medium"> {{ selectedItem.time }}</span
        >.
      </p>
      <div class="flex mt-[15px]">
        <div
          @click="closeModal"
          class="focus:outline-none cursor-pointer text-white bg-[#FF2E65] hover:bg-[#b63557] focus:ring-4 focus:ring-[#b63557] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
        >
          Жабу
        </div>
        <div
          @click="deleteItem(selectedItem.name)"
          class="ml-[15px] focus:outline-none cursor-pointer text-white bg-[#FF2E65] hover:bg-[#b63557] focus:ring-4 focus:ring-[#b63557] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
        >
          Жіберу
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  listAll,
} from "firebase/storage";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  doc,
  deleteDoc,
  updateDoc,
  getDoc,
  query,
  where,
  onSnapshot,
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { storage, db, auth } from "../firebase/firebase";
export default {
  data() {
    return {
      item: [],
      showModal: false, // Добавьте состояние для отображения модального окна
      selectedItem: null, // Хранение выбранного элемента
    };
  },
  methods: {
    async deleteItem(itemName) {
      const querySnapshot = await getDocs(
        query(collection(db, "cart"), where("name", "==", itemName))
      );

      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });

      this.closeModal();
    },
    openModal(item) {
      this.selectedItem = item; // Сохраняем выбранный элемент
      this.showModal = true; // Показываем модальное окно
    },
    closeModal() {
      this.showModal = false; // Закрываем модальное окно
    },
  },
  async created() {
    const pizzaQuery = query(
      collection(db, "cart"),
      where("order", "==", true)
    );
    onSnapshot(pizzaQuery, (querySnapshot) => {
      this.item = []; // Clear the existing items array
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        this.item.push(doc.data()); // Add each document's data to the item array
      });
    });
  },
};
</script>

<style lang="scss" scoped>
/* Apply hover styles directly to the elements */
.x:hover {
  cursor: pointer;
  background-color: #ff2e65; /* Change background color on hover */
  color: white; /* Change text color on hover */
  // Add other styles you want to change on hover
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  width: 500px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
