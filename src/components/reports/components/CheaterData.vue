<template>
  <div>
    <h2>Шаг 2: Жалоба на читера</h2>

    <div class="form-group">
      <label for="playerNickname">Ник нарушителя</label>
      <input type="text" id="playerNickname" placeholder="Напишите ник нарушителя">
    </div>

    <div class="form-group">
      <label for="complaintDescription">Опишите ситуацию, которая произошла</label>
      <textarea id="complaintDescription" placeholder="Суть жалобы" rows="5"></textarea>
    </div>

    <div class="form-group">
      <label for="proofLinks">Ссылки на доказательства</label>
      <input type="text" id="proofLinks" placeholder="Ссылки">
    </div>

    <div class="form-group">
      <label for="contactInfo">Связь с вами (VK, Discord и т.д.)</label>
      <input type="text" id="contactInfo" placeholder="Ссылка">
    </div>
  </div>
</template>

<style scoped>
.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  resize: none;
}
</style>

<script setup lang="ts">

</script>
