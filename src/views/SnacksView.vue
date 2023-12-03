<template>
  <div class="pt-[100px]">
    <div class="flex min-h-[600px] items-start">
      <div class="min-w-[500px] flex justify-center items-center">
        <img class="w-[370px]" :src="item.img" alt="" />
      </div>
      <div class="text ml-[35px]">
        <h1 class="text-[50px] font-bold">{{ item.name }}</h1>
        <p class="text-[25px]">{{ item.volume }}</p>
        <p class="text-[#94a3b8] text-[25px] mt-[20px]">
          {{ item.ingredients }}
        </p>

        <div class="mt-[50px]">
          <button
            @click="addToCart"
            type="button"
            class="text-[18px] focus:outline-none text-white bg-[#FF2E65] hover:bg-[#b33456] focus:ring-4 focus:ring-[#b33456] font-medium rounded-lg px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Добавить в корзину {{ item.price }}
          </button>
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
} from "firebase/firestore";

import { db, auth } from "../firebase/firebase";

export default {
  data() {
    return {
      id: this.$route.params.id,
      id2: this.$route.params.id2,
      item: {},
      cart: null,
      cartData: {
        order: false,
        cart: [],
      },
    };
  },
  methods: {
    async addToCart() {
      if (this.currentUser) {
        const docRef = doc(db, "cart", `${this.currentUser}`);

        const newCartItem = {
          pizzaName: this.item.name,
          image: this.item.img,
          content: this.item.ingredients,
          size: this.item.volume,
          price: this.item.price,
          quantity: 0,
          totalSum: 0,
        };

        const itemExists = (this.cart || []).some(
          (item) => item.pizzaName === newCartItem.pizzaName
        );

        if (itemExists) {
          alert("Уже есть этот товар в корзине");
          return;
        }

        try {
          const docSnap = await getDoc(docRef);
          let updatedCart = [];

          if (docSnap.exists()) {
            const existingCart = docSnap.data().cart || [];
            updatedCart = [...existingCart, newCartItem];
          } else {
            updatedCart = [newCartItem];
          }
          const updatedCartData = {
            order: false,
            cart: updatedCart,
          };

          await setDoc(docRef, updatedCartData);
        } catch (error) {
          console.error("Error adding item to cart: ", error);
          // Handle errors as needed
        }
      }
      alert("товар добавлен");
    },
  },
  async created() {
    const pizzaQuery = query(
      collection(db, this.id2),
      where("name", "==", this.id)
    );
    onSnapshot(pizzaQuery, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.item = doc.data();
      });
    });
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.currentUser = user.uid;
        const userDocRef = doc(db, "cart", this.currentUser);

        onSnapshot(userDocRef, (doc) => {
          if (doc.exists()) {
            this.cart = doc.data().cart;
            console.log(this.cart);
          } else {
            console.log("Документ не существует!");
          }
        });
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
