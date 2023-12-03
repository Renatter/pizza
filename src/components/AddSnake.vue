<template>
  <div>
    {{ id }} {{ id2 }} {{ file }}
    <form @submit.prevent="" class="max-w-md mx-auto">
      <div class="flex items-center justify-center w-full">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span class="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            @change="onFileChange"
            id="dropzone-file"
            type="file"
            class="hidden"
          />
        </label>
      </div>
      <button
        v-if="file"
        @click="uploadImage"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Фотосурет қосыңыз
      </button>
      <div class="mb-4">
        <label for="Ингредиенты" class="block text-gray-700"
          >Ингредиенттер:</label
        >
        <input
          type="text"
          id="ingredients"
          v-model="itemsPizza.ingredients"
          class="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div class="mb-4">
        <label for="name" class="block text-gray-700">Аты:</label>
        <input
          type="text"
          id="name"
          v-model="itemsPizza.name"
          class="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div class="mb-4">
        <label for="price" class="block text-gray-700">Бағасы:</label>
        <input
          type="number"
          id="price"
          v-model="itemsPizza.price"
          class="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-indigo-500"
        />
      </div>
      <div class="mb-4">
        <label for="volume" class="block text-gray-700">Шт:</label>
        <input
          type="text"
          id="volume"
          v-model="itemsPizza.volume"
          class="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-indigo-500"
        />
      </div>

      <div
        @click="addItem"
        class="w-[150px] text-center cursor-pointer focus:outline-none text-white bg-[#FF2E65] hover:bg-[#b63557] focus:ring-4 focus:ring-[#b63557] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
      >
        Қосу
      </div>
    </form>
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
} from "firebase/firestore";
import { storage, db, auth } from "../firebase/firebase";

export default {
  data() {
    return {
      id: this.$route.params.id,
      id2: this.$route.params.id2,
      file: null,
      itemsPizza: {
        img: "",
        ingredients: "",
        name: "",
        price: 0,
        volume: "",
      },
    };
  },
  methods: {
    onFileChange(e) {
      this.file = e.target.files[0];
      console.log(this.file);
    },
    async uploadImage() {
      if (!this.file) {
        return alert("Please choose a file");
      } else {
        const storageRef = ref(storage, `${this.id}/${this.file.name}`);
        await uploadBytes(storageRef, this.file);
        const downloadUrl = await getDownloadURL(storageRef);
        (this.itemsPizza.img = downloadUrl), (this.file = null);
      }
      alert("Фото қосылды");
    },
    async addItem() {
      const docRef = await addDoc(collection(db, this.id), this.itemsPizza);
      console.log("Новость успешно добавлена:", docRef.id);
      this.itemsPizza = {
        img: "",
        ingredients: "",
        name: "",
        price: 0,
        volume: "",
      };
    },
  },
};
</script>

<style>
/* Your styles */
</style>

<style lang="scss" scoped>
/* You can add any custom styling for your form if needed */
</style>
