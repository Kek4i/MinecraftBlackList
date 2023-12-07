<template>
  <div class="content">
    <div class="top-panel">
      <div class="left-section">
        <img src="@/components/icons/MBL-icon.png" alt="Логотип MBL" />
      </div>
      <div class="right-section">
        <!-- Добавляем кнопку меню только на маленьких экранах -->
        <button v-if="isSmallScreen" class="menu-button" @click="openMenu">&#9776;</button>
        <RouterLink to="/" class="nav-link">Главная</RouterLink>
        <RouterLink to="/cheats" class="nav-link" @click="closeMenu">Читеры</RouterLink>
        <RouterLink to="/report" class="nav-link" @click="closeMenu">Пожаловаться</RouterLink>
      </div>
    </div>

    <!-- Добавляем модальное окно для выбора раздела -->
    <div v-if="isMenuOpen" class="modal">
      <div class="modal-content">
        <button @click="closeMenu" class="close-button">&#10006;</button>
        <RouterLink to="/" class="modal-link" @click="closeMenu">Главная</RouterLink>
        <RouterLink to="/cheats" class="modal-link" @click="closeMenu">Читеры</RouterLink>
        <RouterLink to="/report" class="modal-link" @click="closeMenu">Пожаловаться</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}

.top-panel {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid;
  padding: 10px;
  background-color: #cacaca;
  z-index: 999;
}

.left-section {
  display: flex;
  align-items: center;
}

.right-section {
  display: flex;
}

.nav-link {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid #000000;
  color: black; /* Устанавливаем черный цвет для всех .nav-link */
  font-size: 18px;
}

.nav-link:first-of-type {
  border: 0;
}

.nav-link.router-link-active,
.nav-link.router-link-exact-active {
  color: blue;
}

.content {
  margin-top: 80px;
}

.menu-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 30px;
}

.close-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
}

/* Добавляем стили для маленьких экранов */
@media (max-width: 768px) {
  .menu-button {
    display: inline-block;
  }

  .nav-link {
    display: none; /* Скрываем навигационные ссылки на маленьких экранах */
  }
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: rgba(255, 255, 255, 0.99);
  padding: 15% 30%;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  text-align: center;
  margin: auto;
}

.modal-link {
  display: block;
  margin-bottom: 10px;
  color: black;
  text-decoration: none;
  font-size: 2.8em;
  font-weight: 600;
}

</style>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isMenuOpen = ref(false);
const isSmallScreen = ref(false);

const openMenu = () => {
  isMenuOpen.value = true;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

// Проверяем размер экрана при загрузке страницы
onMounted(() => {
  checkScreenSize();
});

// Обновляем флаг isSmallScreen при изменении размера окна
window.addEventListener('resize', checkScreenSize);

function checkScreenSize() {
  isSmallScreen.value = window.innerWidth <= 768;
}
</script>
