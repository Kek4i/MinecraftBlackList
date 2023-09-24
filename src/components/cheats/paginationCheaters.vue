<template>
  <div class="pagination">
    <button @click="previousPage" :disabled="currentPage === 1">Предыдущая</button>
    <span>Страница {{ currentPage }}</span>
    <button @click="nextPage" :disabled="currentPage * resultsPerPage >= playerData.length">Следующая</button>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

button {
  padding: 5px 10px;
  margin: 0 10px;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>

<script>
export default {
  props: {
    currentPage: Number, // Текущая страница
    resultsPerPage: Number, // Количество результатов на странице
    playerData: Array, // Массив данных игроков
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.$emit("previousPage"); // Генерируем событие для переключения на предыдущую страницу
      }
    },
    nextPage() {
      const totalPages = Math.ceil(this.playerData.length / this.resultsPerPage);
      if (this.currentPage < totalPages) {
        this.$emit("nextPage"); // Генерируем событие для переключения на следующую страницу
      }
    },
  },
};
</script>