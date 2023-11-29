<template>
    <div class="max-w-[253px] mt-[50px]">
        <img src="https://dodopizza-a.akamaihd.net/static/Img/Products/f32256e8cefd4655ae646f22cf83390d_292x292.webp" alt="">
        <p class="text-[#797979] text-[20px] font-black">С креветками и трюфелями</p>
    <p class="text-[13px] mt-[10px]">Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г
</p>
<div class="flex items-center justify-between">
    <p class="font-bold">от 600 ₽</p>
        <router-link :to="{ path: '/prdocut/' + id }" >
            <div
          class="ml-[15px] cursor-pointer focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
        >
        Выбрать {{ id }}
        </div>
        </router-link>
</div>
    </div>
</template>

<script>
    export default {
         props:['id'],
    }
</script>

<style lang="scss" scoped>

</style>