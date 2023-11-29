<template>
  <div>
    <h1 class="text-[30px] font-bold pt-[30px] text-[#F7D22D]">Личные данные</h1>

    <form @submit.prevent="" class="max-w-sm mx-auto">
      <div v-for="(field, index) in fields" :key="index" class="mb-5">
        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ field.title }}</label>
        <div class="flex">
          <input
            v-model="field.value"
            :disabled="!field.editable"
            class="w-[300px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
          />
          <button
          class="ml-[15px]"
            @click="toggleEdit(index)"
            :class="{
              'text-white bg-[#F7D22D] hover:bg-[#f59e0b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' : !field.editable,
              'text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800': field.editable
            }"
          >
            {{ field.editable ? "Сохранить" : "Изменить" }}
          </button>
        </div>
      </div>

      <button
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Выйти
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        { value: "Имя", editable: false, title:'Имя' },
        { value: "Номер телефона", editable: false, title:'Номер телефона' },
        { value: "День рождения", editable: false, title:'День рождения' },
        { value: "Эл. почтa", editable: false, title:'Эл. почтa' },
      ],
    };
  },
  methods: {
    toggleEdit(index) {
      this.fields[index].editable = !this.fields[index].editable;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
