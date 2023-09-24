<template>
  <div class="search-field">
    <input type="text" v-model="searchQuery" @keyup.enter="searchPlayer" placeholder="Напишите ник читера" :maxlength="maxLength">
    <button @click="searchPlayer">
      <img src="../icons/search.png" alt="Поиск">
    </button>
  </div>
</template>

<style scoped>
.search-field {
  display: flex;
  padding-bottom: 10px;
  justify-content: right;
  padding-right: 20px;
  border-radius: 4px 0 0 4px;
}

.search-field input {
  width: 150px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
}
</style>

<script>
import axios from 'axios';

export default {
  props: {
    playerData: Array, // Принимаем playerData как проп
  },
  data() {
    return {
      searchQuery: "",
      maxLength: 16,
    };
  },
  methods: {
    searchPlayer() {
      if (this.searchQuery !== this.lastQuery) {
        axios
            .get(`http://localhost:3000/player/${this.searchQuery}`)
            .then((response) => {
              // Обработка успешного ответа от сервера
              this.playerData = response.data;
              console.log(
                  "Выполняем поиск игрока с запросом:",
                  this.searchQuery,
                  "Получил данные:",
                  this.playerData
              );

              // Отправляем данные родительскому компоненту через событие
              this.$emit('updatePlayerData', this.playerData);
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
  },
};
</script>