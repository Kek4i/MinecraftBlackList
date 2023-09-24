<template>
  <div class="content">
    <div class="top-panel">
      <div class="left-section">
        <img src="@/components/icons/MBL-icon.png" alt="Логотип MBL" />
      </div>
      <div class="right-section">
        <RouterLink to="/" class="nav-link">Главная</RouterLink>
        <RouterLink to="/cheats" class="nav-link">База данных читеров</RouterLink>
        <RouterLink to="/report" class="nav-link">Прислать данные</RouterLink>
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
}

.nav-link:first-of-type {
  border: 0;
}

.nav-link.router-link-active,
.nav-link.router-link-exact-active {
  color: blue;
}

.content {
  margin-top: 60px;
}
</style>

<script setup lang="ts">
</script>
