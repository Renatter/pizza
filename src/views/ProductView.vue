<template>
  <div>
    <h1>{{ id }}</h1>
    <div class="flex min-h-[600px] items-start">
      <div class="min-w-[500px] flex justify-center items-center">
        <img
          :class="{
            'w-[270px]': activeTab === 'Tab1',
            'w-[350px]': activeTab === 'Tab2',
            'w-[500px]': activeTab === 'Tab3',
          }"
          src="https://dodopizza-a.akamaihd.net/static/Img/Products/f32256e8cefd4655ae646f22cf83390d_292x292.webp"
          alt=""
        />
      </div>

      <div class="text ml-[35px]">
        <h1 class="text-[70px] font-bold">{{ item.name }}</h1>
        <p class="text-[25px]">{{ sm }} см, {{ muka }} тесто, {{ gm }} г</p>
        <p class="text-[#94a3b8] text-[25px] mt-[20px]">
          {{ item.ingredients }}
        </p>

        <ul
          class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400"
        >
          <li class="me-2 text-[20px]">
            <a
              href="#"
              class="inline-block px-4 py-3"
              :class="{
                ' bg-[#FF2E65] rounded-lg text-white': activeTab === 'Tab1',
                'rounded-lg bg-gray-100 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white':
                  activeTab !== 'Tab1',
              }"
              @click="changeTab('Tab1')"
            >
              Маленькая
            </a>
          </li>
          <li class="me-2 text-[20px]">
            <a
              href="#"
              class="inline-block px-4 py-3"
              :class="{
                'text-white bg-[#FF2E65] rounded-lg': activeTab === 'Tab2',
                'rounded-lg  bg-gray-100 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white':
                  activeTab !== 'Tab2',
              }"
              @click="changeTab('Tab2')"
            >
              Средняя
            </a>
          </li>
          <li class="me-2 text-[20px]">
            <a
              href="#"
              class="inline-block px-4 py-3"
              :class="{
                'text-white bg-[#FF2E65] rounded-lg': activeTab === 'Tab3',
                'rounded-lg bg-gray-100 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white':
                  activeTab !== 'Tab3',
              }"
              @click="changeTab('Tab3')"
            >
              Большая
            </a>
          </li>
        </ul>
        <ul
          class="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 mt-[15px]"
        >
          <li class="me-2 text-[20px]">
            <a
              href="#"
              class="inline-block px-4 py-3"
              :class="{
                ' bg-[#FF2E65] rounded-lg text-white': selectTab === 'Tab1',
                'rounded-lg bg-gray-100 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white':
                  selectTab !== 'Tab1',
              }"
              @click="selectTabe('Tab1')"
            >
              Традиционное
            </a>
          </li>
          <li class="me-2 text-[20px]">
            <a
              href="#"
              class="inline-block px-4 py-3 w-[220px]"
              :class="{
                'text-white bg-[#FF2E65] rounded-lg': selectTab === 'Tab2',
                'rounded-lg  bg-gray-100 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white':
                  selectTab !== 'Tab2',
              }"
              @click="selectTabe('Tab2')"
            >
              Тонкое
            </a>
          </li>
        </ul>
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
    <h1 class="mt-[15px] font-bold text-[20px] mb-[15px]">
      Добавить по вкусу {{ ingredientsPizza }}
    </h1>
    <div class="flex flex-wrap gap-[10px] mb-[30px]">
      <Element
        v-for="item in ing"
        @item-clicked="handleItemClicked"
        :item="item"
      ></Element>
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

import Element from "../components/Element.vue";
import { db, auth } from "../firebase/firebase";
export default {
  components: {
    Element,
  },
  data() {
    return {
      id: this.$route.params.id,
      sm: 25,
      gm: 430,
      muka: "Традиционное",
      activeTab: "Tab1",
      selectTab: "Tab1",
      item: {},
      ing: [],
      totalPrice: 0,
      currentUser: null,
      ingredientsPizza: [],
      cart: null,
    };
  },
  methods: {
    handleItemClicked(item) {
      this.item.price += item.price;
      const index = this.ingredientsPizza.indexOf(item.name);
      if (index !== -1) {
        this.ingredientsPizza.splice(index, 1); // Remove item if already in the array
      } else {
        this.ingredientsPizza.push(item.name); // Add item if not in the array
      }
    },

    changeTab(tab) {
      this.activeTab = tab;
      switch (tab) {
        case "Tab1":
          this.sm = 25;
          this.gm = 430;
          break;
        case "Tab2":
          this.sm = 30;
          this.gm = 640;
          break;
        case "Tab3":
          this.sm = 35;
          this.gm = 830;
          break;
      }
    },
    selectTabe(tab) {
      this.selectTab = tab;
      switch (tab) {
        case "Tab1":
          this.muka = "Традиционное";
          break;
        case "Tab2":
          this.muka = "Тонкое";
      }
    },
    async addToCart() {
      if (this.currentUser) {
        const docRef = doc(db, "cart", `${this.currentUser}`);

        // Ensure that this.ingredientsPizza is defined or replace it with the actual data
        const ingredientsPizza = this.ingredientsPizza || [];

        const newCartItem = {
          pizzaName: this.item.name,
          image: "s",
          content: this.item.ingredients,
          size: this.sm,
          gram: this.gm,
          price: this.item.price,
          ingredients: ingredientsPizza,
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

          if (docSnap.exists()) {
            // Document already exists, merge the newCartItem into existing cart
            const existingCart = docSnap.data().cart || [];
            const updatedCart = [...existingCart, newCartItem];
            await setDoc(docRef, { cart: updatedCart });
          } else {
            // Document doesn't exist, create a new cart with the newCartItem
            await setDoc(docRef, { cart: [newCartItem] });
          }

          console.log("Товар добавлен ву:", newCartItem);
        } catch (error) {
          console.error("Error adding item to cart: ", error);
          // Handle errors as needed
        }
      }
    },
  },
  async created() {
    // Pizza data
    const pizzaQuery = query(
      collection(db, "pizza"),
      where("name", "==", this.id)
    );
    onSnapshot(pizzaQuery, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.item = doc.data();
      });
    });

    // Ingredients data
    const ingredientsQuery = query(collection(db, "ingredients"));
    onSnapshot(ingredientsQuery, (querySnapshot) => {
      this.ing = []; // Clear the existing array before updating with new data
      querySnapshot.forEach((doc) => {
        const item = {
          id: doc.id,
          ...doc.data(),
        };
        this.ing.push(item);
      });
    });

    // Auth state change listener
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        this.currentUser = user.uid;
        const userDocRef = doc(db, "cart", this.currentUser);

        onSnapshot(userDocRef, (doc) => {
          if (doc.exists()) {
            this.cart = doc.data().cart;
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
