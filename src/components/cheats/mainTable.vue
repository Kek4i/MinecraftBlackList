<template>
<SearchField/>
  <InfoCheaters/>
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
import SearchField from "./SearchField.vue";
import infoCheaters from "./infoCheaters.vue";
import axios from "axios";
export default {
  components: {
    SearchField,
    infoCheaters,
  },
  computed: {
    paginatedPlayerData() {
      const startIndex = (this.currentPage - 1) * this.resultsPerPage;
      const endIndex = startIndex + this.resultsPerPage;
      return this.playerData.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.playerData.length / this.resultsPerPage);
    },
    visiblePages() {
      const totalVisiblePages = Math.min(10, this.totalPages);
      const middlePage = Math.ceil(totalVisiblePages / 2);
      let startPage = Math.max(1, this.currentPage - middlePage + 1);
      const endPage = Math.min(
          startPage + totalVisiblePages - 1,
          this.totalPages
      );

      // Adjust startPage when close to the end of the list
      if (endPage - startPage + 1 < totalVisiblePages) {
        startPage = Math.max(1, endPage - totalVisiblePages + 1);
      }

      const pages = [];
      for (let page = startPage; page <= endPage; page++) {
        pages.push(page);
      }
      return pages;
    },
    showFirstPageButton() {
      // Проверяем, находится ли текущая страница ближе к началу списка
      return this.currentPage >= 3;
    },
    showLastPageButton() {
      // Проверяем, находится ли текущая страница ближе к концу списка
      return this.currentPage <= this.totalPages - 3;
    },
    shouldShowPagination() {
      // Определяем, должна ли отображаться пагинация
      return this.playerData.length > 10;
    },
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
        this.scrollToTop();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
        this.scrollToTop();
      }
    },
    goToPage(page) {
      if (page !== this.currentPage) {
        this.currentPage = page;
        this.scrollToTop();
      }
    },
    scrollToTop() {
      // Прокручиваем страницу вверх с плавной анимацией
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
}
</script>

<style scoped>

</style>