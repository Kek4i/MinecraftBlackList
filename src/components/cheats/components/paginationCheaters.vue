<template>
  <div class="pagination" v-if="shouldShowPagination">
    <button @click="previousPage" :disabled="currentPage === 1">Предыдущая</button>
    <button v-if="showFirstPageButton" @click="goToPage(1)">1</button>
    <template v-for="page in visiblePages" :key="'page-' + page">
      <button
          @click="goToPage(page)"
          :class="{ active: page === currentPage, disabled: page === currentPage }"
      >
        {{ page }}
      </button>
    </template>
    <button v-if="showLastPageButton" @click="goToPage(totalPages)">{{ totalPages }}</button>
    <button @click="nextPage" :disabled="currentPage === totalPages">Следующая</button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: Number, // Текущая страница
    totalPages: Number, // Общее количество страниц
    visiblePages: Array, // Массив видимых страниц
    showFirstPageButton: Boolean, // Показать кнопку первой страницы
    showLastPageButton: Boolean, // Показать кнопку последней страницы
    shouldShowPagination: Boolean, // Отображать ли пагинацию
  },
  methods: {
    previousPage() {
      // Вызываем метод previousPage из вашего основного компонента
      this.$emit("previous-page");
    },
    nextPage() {
      // Вызываем метод nextPage из вашего основного компонента
      this.$emit("next-page");
    },
    goToPage(page) {
      // Вызываем метод goToPage из вашего основного компонента
      this.$emit("go-to-page", page);
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination button {
  background-color: #007BFF; /* Цвет фона кнопки */
  color: white; /* Цвет текста на кнопке */
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Плавное изменение цвета фона при наведении */
}

.pagination button:disabled {
  background-color: #ccc; /* Цвет фона для отключенных кнопок */
  cursor: not-allowed;
}

.pagination button:hover {
  background-color: #0056b3; /* Цвет фона при наведении курсора */
}
.pagination button.active {
  background-color: #0056b3; /* Цвет фона для активной кнопки */
  cursor: not-allowed;
}

.pagination button.disabled {
  cursor: not-allowed;
  opacity: 0.5; /* Уменьшаем прозрачность отключенной кнопки */
}

@media screen and (max-width: 600px) {
  .pagination button:not(:first-child):not(:last-child):not(.active) {
    display: none;
  }

  .pagination .current-page-indicator {
    display: inline-block;
    margin: 0 5px;
  }
}

</style>
