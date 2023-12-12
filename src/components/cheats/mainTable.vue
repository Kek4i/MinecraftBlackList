<template>
    <SearchField @search-player="searchPlayer" /> <!-- Используем компонент для поля поиска -->

    <PlayerList :player-data="playerData" :paginated-player-data="paginatedPlayerData" /> <!-- Используем компонент для списка игроков -->

    <Pagination
        :current-page="currentPage"
        :total-pages="totalPages"
        :visible-pages="visiblePages"
        :show-first-page-button="showFirstPageButton"
        :show-last-page-button="showLastPageButton"
        :should-show-pagination="shouldShowPagination"
        @previous-page="previousPage"
        @next-page="nextPage"
        @go-to-page="goToPage"
    /> <!-- Используем компонент для пагинации -->
</template>

<script>
import axios from 'axios';
import SearchField from './components/SearchField.vue';
import PlayerList from './components/infoCheaters.vue';
import Pagination from './components/paginationCheaters.vue';

export default {
  data() {
    return {
      searchQuery: '',
      maxLength: 16, // Максимальное количество символов
      playerData: [],
      currentPage: 1, // Текущая страница
      resultsPerPage: 10, // Количество результатов на странице
    };
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
      return this.currentPage >= 6;
    },
    showLastPageButton() {
      // Проверяем, находится ли текущая страница ближе к концу списка
      return this.currentPage <= this.totalPages - 6;
    },
    shouldShowPagination() {
      // Определяем, должна ли отображаться пагинация
      return this.playerData.length > 10;
    },
  },
  methods: {
    searchPlayer(query) {
      this.searchQuery = query;
      if (this.searchQuery !== this.lastQuery) {
        axios
            .get(`https://blackmc.ru/api/player/${this.searchQuery}`)
            .then((response) => {
              // Обработка успешного ответа от сервера
              this.playerData = response.data; // Присваиваем полученные данные переменной playerData
              console.log(
                  "Выполняем поиск игрока с запросом:",
                  this.searchQuery,
                  "Получил данные:",
                  this.playerData
              );
            })
            .catch((error) => {
              // Обработка ошибки
              console.error("Ошибка при получении данных:", error);
            });

        // Сбрасываем текущую страницу к первой независимо от результата поиска
        this.currentPage = 1;

        // Здесь можно отправить запрос на сервер и обновить lastQuery после успешного поиска
        this.lastQuery = this.searchQuery;
      }
    },
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
  components: {
    SearchField,
    PlayerList,
    Pagination,
  },
  beforeMount() {
    // Загрузка данных с сервера перед началом рендера
    axios
        .get(`https://blackmc.ru/api/player`)
        .then((response) => {
          // Присваиваем полученные данные массиву playerData
          this.playerData = response.data;

          this.playerData.sort((a, b) => b.id - a.id);
        })
        .catch((error) => {
          // Обработка ошибки
          console.error("Ошибка при получении данных о читерах:", error);
        });
  },
};
</script>

<style scoped>
</style>