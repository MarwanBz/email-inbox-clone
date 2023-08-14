<script setup>
import { ref } from "vue";
import { useEmailStore } from "~/store/store";
const emailStore = useEmailStore();
const checkboxRef = ref(null);
const props =  defineProps({
  email: Object,
})

function toggleEmailSelection(email) {
  // Toggle email.selected.
  emailStore.toggleSelected(email);
  // Invert email.isSelected.
  email.isSelected = !email.isSelected;
  // Get the checkbox element.
  const checkbox = checkboxRef.value;
  // Set the checkbox checked state.
  if (checkbox) {
    checkbox.checked = email.isSelected;
  }
}

</script>

<template>
  <div class="email-container">
    <div v-if="emailStore.isLoading">Loading....</div>
    <li
      v-else
      :class="{ 'is-read': email.isRead }"
      class="email"
      :key="email.id"
      @click="toggleEmailSelection(email)"
    >
      <input
        ref="checkbox"
        :checked="email.isSelected"
        class="checkbox"
        type="checkbox"
        @click.stop
        @change="toggleEmailSelection(email)"
      />
      <p >{{ email.title }}</p>
      <p>{{ email.isSelected }}</p>
      <p>{{ email.isArchived }}</p>
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
