<script setup lang="ts">

</script>

<template>
  <h2 class="underlined">Шаг 3: Успех</h2>
  <img src="@/components/icons/Sure.png" alt="Успешно" width="300" height="300"/>
  <h3>Ваша жалоба принята!</h3>
  <p>Жалобу рассмотрит первый свободный модератор! Спасибо!</p>
</template>

<style scoped>
.underlined {
  position: relative;
}

.underlined::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  border-bottom: 2px solid #000;
}
</style>