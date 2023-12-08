<template>
  <div class="center-container">
    <div v-if="playerData.length === 0" class="noInfo">
      <img src="../../icons/periscope.png" alt="Logo">
      <h1>Нет данных!</h1>
    </div>
    <div v-for="(playerData, index) in paginatedPlayerData" :key="index" class="article">
      <img :src="'https://minotar.net/avatar/'+playerData.nickname+'.png'" alt="Нарушитель" class="report">
      <p>
        &#128100;Ник: {{ playerData.nickname }}<br>
        &#127963; Сервер: {{ playerData.server }}<br>
        &#128203;Нарушение: {{ playerData.violation }}<br>
        &#128198;Дата занесения: <time>{{ formatDate(playerData.date) }}</time>
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
  max-width: 800px; /* Установите желаемую максимальную ширину */
  margin: 0 auto; /* Центрирование по горизонтали */
}

.article {
  align-items: center;
  border: 2px solid #000;
  padding: 10px;
  display: flex;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
}

.article img {
  max-width: 100px;
  margin-right: 10px;
}

p {
  font: 17px Comic Sans MS, Comic Sans;
  padding: 2px;
  border: 1px solid #000000;
  border-radius: 4px;
  width: 100%; /* Занимает 100% ширины блока .article */
  height: 120px;
}

.report {
  padding: 2px;
  border: 1px solid #000000;
  border-radius: 4px;
}

.noInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

/* Добавляем стили для мобильных устройств */
@media screen and (max-width: 440px) {
  .article {
    flex-direction: column; /* Переставляем элементы в столбец */
    height: auto; /* Снимаем ограничение по высоте */
  }

  .article img {
    margin-right: 0; /* Убираем отступ справа */
    margin-bottom: 10px; /* Добавляем отступ снизу */
  }

  p {
    height: auto; /* Снимаем ограничение по высоте */
  }
}
</style>

<script>
export default {
  props: {
    playerData: Array, // Принимаем список игроков как пропс
    paginatedPlayerData: Array, // Принимаем список игроков для текущей страницы как пропс
  },
  methods: {
    formatDate(dateTime) {
      const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
      const formattedDate = new Date(dateTime).toLocaleDateString(undefined, options);
      return formattedDate;
    },
  },
};
</script>
