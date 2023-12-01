<template>
  <div
    class="w-[150px]"
    style="cursor: pointer"
    :class="{
      'border-silver': !clicked,
      'border-[#FF2E65]': clicked,
      'border-[3px]': clicked,
      'rounded-[7px]': true,
      'border-[1px]': true,
      'max-w-[120px]': true,
      'p-[14px]': true,
      'text-center': true,
      grid: true,
      'place-items-center': true,
    }"
    @click="handleClick"
  >
    <img class="w-[70px]" :src="item.img" alt="" />
    <p class="font-bold text-[13px]">{{ item.name }}</p>
    <p class="text-[#FF2E65] font-bold">{{ item.price }} тг</p>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      clicked: false,
    };
  },
  methods: {
    handleClick() {
      this.clicked = !this.clicked;
      // Emit an event with positive or negative 'item.price' based on 'clicked' value
      this.$emit("item-clicked", {
        price: this.clicked ? this.item.price : -this.item.price,
        name: this.item.name,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
/* Add your styles here if needed */
</style>
