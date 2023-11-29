<template>
  <div
  style="cursor: pointer;"
    :class="{
      'border-silver': !clicked,
      'border-[#F7D22D]': clicked,
      'border-[3px]': clicked,
      'rounded-[7px]': true,
      'border-[1px]': true,
      'max-w-[120px]': true,
      'p-[14px]': true,
      'text-center': true,
      'grid': true,
      'place-items-center': true,
    }"
    @click="handleClick"
  >
    <img class="w-[70px]" src="https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111EA083CF38D509D" alt="" />
    <p class="font-bold text-[13px]">Острый халапенью</p>
    <p class="text-[#f7d22d] font-bold">450 тг {{ id }}</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      clicked: false,
    };
  },
  methods: {
    handleClick() {
      this.clicked = !this.clicked;
      // Emit an event with the 'id' when the component is clicked
      this.$emit('item-clicked', this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
/* Add your styles here if needed */
</style>
