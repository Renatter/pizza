<template>
  <div>
    <div class="flex justify-between items-center">
      <div class="flex">
        <img
          class="w-[200px]"
          src="https://upload.wikimedia.org/wikipedia/ru/thumb/9/91/Dodo_Logo.svg/1280px-Dodo_Logo.svg.png"
          alt=""
        />
        <div class="text-[25px] font-medium ml-[10px]">
          <div class="flex">
            <p class="">Доставка пиццы</p>
            <p class="text-[#fde047] ml-[10px]">Москва</p>
          </div>
          <div class="text-[20px]">
            Время доставки
            <span class="text-[#fde047] ml-[10px]">от 31 мин</span>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="text-[26px] text-[#fde047] font-bold">8 499 391-84-49</div>
        <div
          v-if="!currentUser"
          class="ml-[15px] cursor-pointer focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          @click="toggleLoginModal"
        >
          Войти
        </div>
        <div
          v-if="!currentUser"
          class="focus:outline-none cursor-pointer text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          @click="toggleRegistrationModal"
        >
          Тіркелу
        </div>
        <div
          v-if="currentUser"
          class="ml-[15px] focus:outline-none cursor-pointer text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          @click="logout"
        >
          Шыгу
        </div>
      </div>
    </div>
    <div class="flex justify-between font-medium text-[20px] items-center">
      <div class="flex items-center mt-[10px]">
        <p v-for="item in menu" :key="item.id" class="ml-[20px]">
          {{ item.title }}
        </p>
      </div>
    </div>

    <!-- Login Modal -->
    <div class="modal" v-show="showLoginModal" @click="hideLoginModal">
      <!-- Modal Content for Login -->
      <div class="modal-content" @click.stop>
        <form @submit.prevent="sign" class="max-w-sm mx-auto">
          <h1>Кіру</h1>
          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Email</label
            >
            <input
              v-model="user"
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="example@domain.com"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Password</label
            >
            <input
              v-model="pas"
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <button
            @click="toggleLoginModal"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Кіру
          </button>
        </form>
      </div>
    </div>

    <!-- Registration Modal -->
    <div
      class="modal"
      v-show="showRegistrationModal"
      @click="hideRegistrationModal"
    >
      <!-- Modal Content for Registration -->
      <div class="modal-content" @click.stop>
        <form @submit.prevent="register()" class="max-w-sm mx-auto">
          <!-- Registration Form content here -->
          <h1>Тіркелу</h1>
          <div class="mb-5">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Email</label
            >
            <input
              v-model="user"
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="example@domain.com"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Password</label
            >
            <input
              v-model="pas"
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <button
            @click="toggleRegistrationModal"
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Тіркелу
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
export default {
  data() {
    return {
      currentUser: null,
      user: "",
      pas: "",
      firstName: "",
      lastName: "",
      phone: null,
      city: null,
      adress: null,
      kv: null,
      etaj: null,
      isAuthenticated: null,
      menu: [
        { title: "Пицца", url: "1" },
        { title: "Комбо", url: "1" },
        { title: "Закуски", url: "1" },
        { title: "Коктейли", url: "1" },
        { title: "Кофе", url: "1" },
        { title: "Десерты", url: "1" },
        { title: "Напитки", url: "1" },
        { title: "Соусы", url: "1" },
        { title: "Другие товары", url: "1" },
        { title: "Акции", url: "1" },
      ],
      showLoginModal: false,
      showRegistrationModal: false,
    };
  },
  methods: {
    toggleLoginModal() {
      this.showLoginModal = !this.showLoginModal;
    },
    hideLoginModal() {
      this.showLoginModal = false;
    },
    toggleRegistrationModal() {
      this.showRegistrationModal = !this.showRegistrationModal;
    },
    hideRegistrationModal() {
      this.showRegistrationModal = false;
    },
    async register() {
      try {
        await createUserWithEmailAndPassword(auth, this.user, this.pas);
        await signInWithEmailAndPassword(auth, this.user, this.pas);
        this.currentUser = auth.currentUser;
        await setDoc(doc(db, "users", this.currentUser.uid), {
          currentUser: null,
          user: this.user,
          pas: this.pas,
          firstName: this.firstName,
          lastName: this.lastName,
          phone: this.phone,
          city: this.city,
          adress: this.adress,
          kv: this.kv,
          etaj: this.etaj,
        });
      } catch (error) {
        console.log("Ошибка при регистрации пользователя:", error);
      }
    },
    sign() {
      signInWithEmailAndPassword(auth, this.user, this.pas)
        .then((userCredential) => {
          const user = userCredential.user;
          this.currentUser = user; // Update currentUser
          console.log("Signed in user:", user);
        })
        .catch((error) => {
          console.error("Sign in error:", error.message);
        });
    },

    logout() {
      auth.signOut();
      this.currentUser = null;
    },
  },
  async created() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.isAuthenticated = true;
        this.currentUser = user; // Update currentUser
        const userDocRef = doc(db, "users", user.uid);
        onSnapshot(userDocRef, (doc) => {
          console.log(doc);
        });
      } else {
        this.isAuthenticated = false;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
/* Style for the modal */
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
