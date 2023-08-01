<script setup>
import { ref } from "vue";
import { useEmailStore } from "~/store/store";
const emailStore = useEmailStore();


function toggleEmailSelection(email, event) {
  // Toggle email.selected.
  emailStore.toggleSelected(email);
  // Invert email.isSelected.
  email.isSelected = !email.isSelected;
  // Get the checkbox element.
  const checkbox = event.currentTarget.querySelector(".checkbox");
  // Set the checkbox checked state.
  checkbox.checked = email.isSelected;
}

console.log(emailStore.emails);
</script>

<template>
  <div class="email-container" >
    <div v-if="emailStore.isLoading">Loading....</div>
    <li
      v-else
      :class="{ 'is-read': email.isRead }"
      class="email"
      v-for="email in emailStore.emails"
      :key="email.id"
      @click="toggleEmailSelection(email, $event)"
    >
      <input
        :checked="email.isSelected"
        class="checkbox"
        type="checkbox"
        @click.stop
      />
      <p>{{ email.title }}</p>
      <p>{{ email.isSelected }}</p>
    </li>
  </div>
</template>

<style>
.email {
  border-bottom: 1px solid #e5e7eb;
  border-top: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  padding: 20px 24px;
  color: #000000;
}
.email:hover {
  background: #d1e2ff;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease-in-out;
}
.email-container .email p {
  padding-left: 12px;
  color: #000000;
}

.checkbox {
  scale: 1.5;
}

.isRead {
  opacity: 0.5;
}
</style>
