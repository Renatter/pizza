<template>
  <div
    class="w-[270px] h-[270px] border-[#94a3b8] border-[2px] rounded-[15px]"
    @click="changeBorderColor"
    :style="{ borderColor: bordercolor }"
  >
    <img class="w-[]" alt="" :src="item.img" />
    {{ item.title }}
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      bordercolor: "#94a3b8",
      originalColor: "#94a3b8",
    };
  },
  methods: {
    changeBorderColor() {
      // Проверяем текущий цвет и меняем на другой или изначальный
      if (this.bordercolor === this.originalColor) {
        this.bordercolor = "#FF2E65";
      } else {
        this.bordercolor = this.originalColor;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/* Здесь можете добавить дополнительные стили по желанию */
</style>
