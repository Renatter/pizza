<template>
  <div>
    <h1 class="text-[30px] mt-[70px] font-bold text-[#FF2E65]">Пицца</h1>
    <div class="flex flex-wrap justify-between gap-[20px]">
      <div v-for="item in items" key="item">
        <Pizza :id="item"></Pizza>
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
import Pizza from "../components/Pizza.vue";
export default {
  components: {
    Pizza,
  },
  data() {
    return {
      items: [],
    };
  },
  async created() {
    const querySnapshot = await getDocs(collection(db, "pizza"));
    // Заполнение массива новостей
    querySnapshot.forEach((doc) => {
      const Item = {
        id: doc.id,
        ...doc.data(),
      };
      this.items.push(Item);
    });
  },
};
</script>

<style lang="scss" scoped></style>
