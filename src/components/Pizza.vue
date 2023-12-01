<template>
  <div class="max-w-[253px] mt-[50px]">
    <img
      src="https://dodopizza-a.akamaihd.net/static/Img/Products/f32256e8cefd4655ae646f22cf83390d_292x292.webp"
      alt=""
    />
    <p class="text-[#797979] text-[20px] font-black">
      {{ id.name }}
    </p>
    <p class="text-[13px] mt-[10px] mb-[10px]">
      {{ id.ingredients }}
    </p>
    <div class="] flex items-center justify-between">
      <p class="font-bold">от {{ id.price }}</p>
      <router-link :to="{ path: '/prdocut/' + id.name }">
        <div
          class="ml-[15px] cursor-pointer focus:outline-none text-white bg-[#FF2E65] hover:bg-[#b63557] focus:ring-4 focus:ring-[#b63557] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
        >
          Выбрать
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

<style lang="scss" scoped></style>
