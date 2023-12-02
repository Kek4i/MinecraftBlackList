<template>
  <div class="complaint-container">
    <div class="complaint-content">
      <p>
        Обратили внимание на читера и хотите, чтобы весь мир узнал, что этот игрок - недобросовестный? Тогда смело кликните на кнопку "Пожаловаться", и наши преданные модераторы тщательно рассмотрят вашу заявку.
      </p>
    </div>
    <div class="complaint-button">
      <button @click="showComplaintForm">Пожаловаться</button>
    </div>
  </div>

  <div class="complaint-overlay" v-if="isFormVisible">
    <div class="complaint-form">
      <!-- Отображение данных формы в зависимости от текущего шага -->
      <SubmissionRules v-if="step === 1"/>
      <CheaterData v-else-if="step === 2"/>
      <SuccessfullySent v-else-if="step === 3"/>
      <!-- Отображаем кнопки в контейнере button-container -->
      <div class="button-container">
        <button class="cancel-button" v-if="step !== 1" @click="prevStep">Назад</button>
        <button class="cancel-button" v-else @click="closeComplaintForm">Отмена</button>
        <button class="submit-button" v-if="step !== 3" @click="nextStep">Далее</button>
        <button class="complain-button" v-else @click="submitComplaint">Пожаловаться</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.complaint-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.complaint-content {
  text-align: center;
  font: 17px Comic Sans MS, Comic Sans, cursive;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 10px;
  width: 500px;
  max-width: 100%;
  margin-bottom: 10px;
}

.complaint-button button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.complaint-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.complaint-form {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  width: 400px;
  max-width: 90%;
  text-align: center;
}

.button-container {
  display: flex;
  justify-content: space-between;
}

.submit-button,
.cancel-button,
.complain-button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}

.cancel-button {
  background-color: red;
}

.complain-button{
  background-color: green;
}
</style>

<script>
import SubmissionRules from './components/SubmissionRules.vue';
import CheaterData from './components/CheaterData.vue';
import SuccessfullySent from './components/SuccessfullySent.vue';
export default {
  data() {
    return {
      step: 1, // Начальный шаг формы
      isFormVisible: false // Переменная для управления видимостью формы
    };
  },
  methods: {
    showComplaintForm() {
      this.isFormVisible = true; // Показать форму
    },
    nextStep() {
      // Переход к следующему шагу формы
      if (this.step < 3) {
        this.step++;
      }
    },
    submitComplaint() {
      // Здесь можно добавить логику для отправки жалобы
      // Например, отправка данных на сервер
      // После отправки можно скрыть форму и показать сообщение об успешной отправке или другую информацию
      this.closeComplaintForm();
    },
    closeComplaintForm() {
      this.isFormVisible = false; // Скрыть форму при нажатии на "Отмена"
      this.step = 1; // Сбросить шаг формы
    },
    prevStep() {
      // Переход к предыдущему шагу формы
      if (this.step > 1) {
        this.step--;
      }
    },
  },
  components: {
    SubmissionRules,
    CheaterData,
    SuccessfullySent
  },
};
</script>