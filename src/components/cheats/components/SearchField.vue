<template>
  <div class="search-field">
    <input
        type="text"
        v-model="searchQuery"
        @keyup.enter="searchPlayer"
        placeholder="Напишите ник читера"
        :maxlength="maxLength">
    <button @click="searchPlayer">
      <img src="../../icons/search.png" alt="Поиск">
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      maxLength: 16, // Максимальное количество символов
    };
  },
  methods: {
    searchPlayer() {
      // Вызываете метод searchPlayer из вашего основного компонента
      this.$emit("searchPlayer", this.searchQuery);
    },
  },
};
</script>

<style scoped>
.search-field {
  display: flex;
  padding: 5px 20px 10px 0;
  justify-content: right;
  border-radius: 4px 0 0 4px;
}

.search-field input {
  width: 150px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
}

button{
  border-radius: 0 4px 4px 0;
}
</style>
