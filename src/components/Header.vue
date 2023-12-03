<template>
  <div>
    <div class="flex justify-between items-center">
      <div class="flex">
        <router-link to="/">
          <img
            class="w-[100px] h-[100px] object-contain"
            src="../assets//logo.png"
            alt=""
          />
        </router-link>
        <div class="text-[25px] font-medium ml-[10px]">
          <div class="flex">
            <p class="">Пицца жеткізу</p>
            <p class="text-[#FF2E65] ml-[10px]">Орал</p>
          </div>
          <div class="text-[20px]">
            Жеткізу уақыты
            <span class="text-[#FF2E65] ml-[10px]">30 минуттан бастап </span>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="">
          <p>{{ name }}</p>
          <p class="text-[26px] text-[#FF2E65] font-bold">8 499 391-84-49</p>
        </div>
        <div
          v-if="!currentUser"
          class="ml-[15px] h-[40px] cursor-pointer focus:outline-none text-white bg-[#FF2E65] hover:bg-[#b63557] focus:ring-4 focus:ring-[#b63557] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          @click="toggleLoginModal"
        >
          Кіру
        </div>
        <div
          v-if="!currentUser"
          class="focus:outline-none h-[40px] cursor-pointer text-white bg-[#FF2E65] hover:bg-[#b63557] focus:ring-4 focus:ring-[#b63557] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          @click="toggleRegistrationModal"
        >
          Тіркелу
        </div>

        <router-link to="/Basket">
          <div
            v-if="currentUser && isAdmin === false"
            class="ml-[15px] h-[40px] focus:outline-none cursor-pointer text-white bg-[#FF2E65] hover:bg-[#b63557] focus:ring-4 focus:ring-[#b63557] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Себет
          </div>
        </router-link>
        <router-link to="/Admin">
          <div
            v-if="isAdmin"
            class="ml-[15px] h-[40px] focus:outline-none cursor-pointer text-white bg-[#FF2E65] hover:bg-[#b63557] focus:ring-4 focus:ring-[#b63557] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Админ
          </div>
        </router-link>
        <router-link to="/">
          <div
            @click="logout"
            v-if="currentUser"
            class="ml-[15px] focus:outline-none cursor-pointer text-white bg-[#FF2E65] hover:bg-[#b63557] focus:ring-4 focus:ring-[#b63557] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Шығу
          </div>
        </router-link>
      </div>
    </div>
    <div class="">
      <div
        class="flex justify-between items-center text-[15px] font-medium mt-[10px]"
      >
        <p>
          <router-link to="/"> Пицца </router-link>
        </p>
        <p v-for="item in menu" :key="item.id" class="mr-[20px]">
          <router-link :to="item.url">
            {{ item.title }}
          </router-link>
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
              >Почта</label
            >
            <input
              v-model="user"
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="emai"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Құпия сөз</label
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
            class="text-white bg-[#FF2E65] hover:bg-[#b63557] focus:ring-[#b63557] focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        <form @submit.prevent="register" class="max-w-sm mx-auto">
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
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Аты</label
            >
            <input
              v-model="userName"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Аты"
              required
            />
          </div>
          <div class="mb-5">
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Номер</label
            >
            <input
              v-model="userPhone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Номер"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Құпия сөз</label
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
            class="text-white bg-[#FF2E65] hover:bg-[#b63557] focus:ring-[#b63557] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
import { doc, setDoc, onSnapshot, getDoc } from "firebase/firestore";
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
      adress: null,
      kv: null,
      etaj: null,
      podezd: null,
      userPhone: "",
      userName: "",
      isAuthenticated: null,
      name: "",
      menu: [
        { title: "Тағамдар", url: "/Snacks" },
        { title: "Коктейльдер", url: "/ICocktails" },
        { title: "Кофе", url: "/ICoffe" },
        { title: "Десерттер", url: "/IDeset" },
        { title: "Сусындар", url: "/IJuices" },
        { title: "Тұздықтар", url: "/ISous" },
      ],
      showLoginModal: false,
      showRegistrationModal: false,
      isAdmin: false,
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
        this.currentUser = auth.currentUser;
        await setDoc(doc(db, "users", this.currentUser.uid), {
          user: this.user,
          pas: this.pas,
          firstName: this.userName,
          phone: this.userPhone,
          adress: this.adress,
          kv: this.kv,
          etaj: this.etaj,
          podezd: this.podezd,
          wait: false,
        });
        await setDoc(doc(db, "cart", this.currentUser.uid), {
          order: false,
        });
      } catch (error) {
        console.log("Ошибка при регистрации пользователя:", error);
      }
    },
    sign() {
      signInWithEmailAndPassword(auth, this.user, this.pas)
        .then((userCredential) => {
          const user = userCredential.user;
          this.currentUser = user;
          console.log("Signed in user:", user);
        })
        .catch((error) => {
          console.error("Sign in error:", error.message);
        });
    },

    logout() {
      auth.signOut();
      this.currentUser = null;
      this.isAdmin = false;
    },
  },
  async created() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.isAuthenticated = true;
        this.currentUser = user;
        const userDocRef = doc(db, "users", user.uid);
        onSnapshot(userDocRef, (doc) => {
          this.name = doc.data().firstName;
        });
        getDoc(userDocRef).then((doc) => {
          if (doc.exists()) {
            const userData = doc.data();
            console.log(userData);

            this.isAdmin = userData.role === "admin";
          } else {
            console.log("No such document!");
          }
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
