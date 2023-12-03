<template>
  <div>
    <h1 class="text-[30px] mt-[70px] font-bold text-[#FF2E65]">Сусындар</h1>
    <div class="flex flex-wrap justify-between gap-[20px]">
      <div v-for="item in items" key="item">
        <SnackItem :id="item" cat="juices"></SnackItem>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  setDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import SnackItem from "../components/SnackItem.vue";
export default {
  components: {
    SnackItem,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async fetch() {
      this.items = []; // Clear the array before fetching new data

      const querySnapshot = await getDocs(collection(db, "juices"));
      querySnapshot.forEach((doc) => {
        const Item = {
          id: doc.id,
          ...doc.data(),
        };
        this.items.push(Item);
      });
    },
  },
  async created() {
    this.fetch();
  },
};
</script>

<style lang="scss" scoped></style>
