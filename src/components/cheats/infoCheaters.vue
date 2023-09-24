<template>
  <div v-if="playerData.length === 0" class="noInfo">
    <img src="../icons/free-icon-periscope-1384059.png" alt="Logo">
    <h1>Нет данных!</h1>
  </div>
  <div v-else class="center-container">
    <div v-for="(playerData, index) in paginatedPlayerData" :key="index" class="article">
      <img :src="'https://minotar.net/avatar/'+playerData.nickname+'.png'" alt="Нарушитель" class="report">
      <p>
        <img src="../icons/user.png" alt="Ник"/>Ник: {{ playerData.nickname }}<br>
        <img src="../icons/marker.png" alt="Сервер"/>Сервер: {{ playerData.server }}<br>
        <img src="../icons/document.png" alt="Нарушение"/>Нарушение: {{ playerData.violation }}<br>
        <img src="../icons/calendar-clock.png" alt="Дата"/>Дата занесения: {{ playerData.date }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.center-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.article {
  align-items: center;
  border: 2px solid #000;
  padding: 10px;
  display: flex;
  margin-bottom: 10px;
  min-width: 600px;
  min-height: 150px;
}

.article img {
  max-width: 100px;
  margin-right: 10px;
}

.search-field input {
  width: 150px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
}

p {
  font: 17px Comic Sans MS, Comic Sans, cursive;
  padding: 2px;
  border: 1px solid #000000;
  border-radius: 4px;
  width: 500px;
  height: 120px;
}

.report{
  padding: 2px;
  border: 1px solid #000000;
  border-radius: 4px;
}

button{
  border-radius: 0 4px 4px 0;
}

.noInfo{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

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
</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
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
  beforeMount() {
    // Загрузка ботов с сервера (пример)
    axios
        .get(`http://localhost:3000/player`)
        .then((response) => {
          // Присваиваем полученные данные массиву botList
          this.playerData = response.data;
        })
        .catch((error) => {
          // Обработка ошибки
          console.error("Ошибка при получении данных о ботах:", error);
        });
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
};
</script>