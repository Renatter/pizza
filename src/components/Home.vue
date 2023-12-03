<template>
  <PizzaView></PizzaView>
</template>

<script>
import { doc, setDoc } from "firebase/firestore";
import PizzaView from "../views/PizzaView.vue";
import { db } from "../firebase/firebase";
export default {
  components: { NewItems, PizzaView },
};
</script>

<style lang="scss" scoped></style>
