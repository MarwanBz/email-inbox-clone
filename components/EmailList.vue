<script setup>
import { storeToRefs } from "pinia";
import { useEmailStore } from "~/store/store";
const emailStore = useEmailStore();

emailStore.getEmails();

const props = defineProps(['emails']);
</script>

<template>
  <div>
    <Email
      :key="email.id"
      v-for="email in emails"
      :email="email"
      :isRead="email.isRead"
      @click="emailStore.showEmailModal = !emailStore.showEmailModal"
    />
    <div v-if="emailStore.showEmailModal"><EmailModal /></div>

    <!-- Display archived emails -->

    <div >
      <Email
        v-for="archivedEmail in emailStore.archivedEmails"
        :email="archivedEmail"
        :isRead="archivedEmail.isRead"
        
        @click="emailStore.showEmailModal = !emailStore.showEmailModal"
      />
      <div v-if="emailStore.showEmailModal"><EmailModal /></div>

    </div>
    
  </div>
</template>

<style></style>
