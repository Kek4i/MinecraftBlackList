<template>
  <div>
    <h2>Шаг 2: Жалоба</h2>
    <hr>
    <div class="form-group">
      <label for="playerNickname">Ник нарушителя</label>
      <input type="text" id="playerNickname" :value="playerNickname" @input="updatePlayerNickname" placeholder="Напишите ник нарушителя">
    </div>

    <div class="form-group">
      <label for="complaintDescription">Опишите ситуацию, которая произошла</label>
      <textarea id="complaintDescription" :value="complaintDescription" @input="updateComplaintDescription" placeholder="Суть жалобы" rows="5"></textarea>
    </div>

    <div class="form-group">
      <label for="proofLinks">Доказательства нарушения</label>
      <input type="text" id="proofLinks" :value="proofLinks" @input="updateProofLinks" placeholder="Ссылки">
    </div>

    <div class="form-group">
      <label for="contactInfo">Связь с вами (VK, Discord и т.д.)</label>
      <input type="text" id="contactInfo" :value="contactInfo" @input="updateContactInfo" placeholder="Ссылка">
    </div>
  </div>
</template>

<style scoped>
hr {
  border: none;
  height: 2px;
  background-color: black;
  font-weight: bold;
}

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

<script>
export default {
  props: {
    playerNickname: String,
    complaintDescription: String,
    proofLinks: String,
    contactInfo: String,
  },
  methods: {
    updatePlayerNickname(event) {
      this.$emit('update:playerNickname', event.target.value);
    },
    updateComplaintDescription(event) {
      this.$emit('update:complaintDescription', event.target.value);
    },
    updateProofLinks(event) {
      this.$emit('update:proofLinks', event.target.value);
    },
    updateContactInfo(event) {
      this.$emit('update:contactInfo', event.target.value);
    },
  },
};
</script>
