<script setup>
import { useEmailStore } from "~/store/store";
const emailStore = useEmailStore();
emailStore.getEmails();
</script>
<template>
  <div class="email-container">
    <li class="email" v-for="email in emailStore.emails" :key="email.id">
      <input class="checkbox" type="checkbox" name="" id="" />
      <p>{{ email.title }}</p>
    </li>
  </div>
</template>

<style>
.email {
  border-bottom:1px solid #e5e7eb;
  border-top: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  padding: 20px 0;
}

.email-container .email p {
  padding-left: 12px;
}

.checkbox {
  scale: 1.5;
}
</style>
