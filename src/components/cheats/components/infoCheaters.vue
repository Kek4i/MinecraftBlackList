<template>
  <div class="center-container">
    <div v-if="playerData.length === 0" class="noInfo">
      <img src="../../icons/periscope.png" alt="Logo">
      <h1>Нет данных!</h1>
    </div>
    <div v-for="(playerData, index) in paginatedPlayerData" :key="index" class="article">
      <img :src="'https://minotar.net/avatar/'+playerData.nickname+'.png'" alt="Нарушитель" class="report">
      <p>
        <img src="../../icons/user.png" alt="Ник"/>Ник: {{ playerData.nickname }}<br>
        <img src="../../icons/marker.png" alt="Сервер"/>Сервер: {{ playerData.server }}<br>
        <img src="../../icons/document.png" alt="Нарушение"/>Нарушение: {{ playerData.violation }}<br>
        <img src="../../icons/calendar-clock.png" alt="Дата"/>Дата занесения: <time>{{ playerData.date }}</time>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    playerData: Array, // Принимаем список игроков как пропс
    paginatedPlayerData: Array, // Принимаем список игроков для текущей страницы как пропс
  },
};
</script>

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

p {
  font: 17px Comic Sans MS, Comic Sans;
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

.noInfo{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}
</style>
