<template>
    <div>
        <h1 class="text-[30px] mt-[70px] font-bold text-[#F7D22D]">Пицца</h1>
        <div  class="flex flex-wrap justify-between gap-[20px]"> 
    <div  v-for="item in 9" key="item">
         <Pizza :id="item"></Pizza>
    </div>
    </div>
    </div>
</template>

<script>
import  Pizza  from "../components/Pizza.vue";
    export default {
  components: {
    Pizza
  },
    }
</script>

<style lang="scss" scoped>

</style>