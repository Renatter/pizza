<template>
  <div class="max-w-[253px] mt-[50px]">
    <img :src="id.img" alt="" />
    <p class="text-[#797979] text-[20px] font-black truncate-text">
      {{ id.name }}
    </p>
    <p class="text-[13px] mt-[10px] mb-[10px] truncate-text">
      {{ id.ingredients }}
    </p>
    <div class="] flex items-center justify-between">
      <p class="font-bold">{{ id.price }}тг бастап</p>
      <router-link :to="{ path: '/prdocut/' + id.name }">
        <div
          class="ml-[15px] cursor-pointer focus:outline-none text-white bg-[#FF2E65] hover:bg-[#b63557] focus:ring-4 focus:ring-[#b63557] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
        >
          Таңдау
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
};
</script>

<style lang="scss" scoped>
.truncate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}
</style>
