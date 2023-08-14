<script setup>
import { useEmailStore } from "@/store/store";

const route = useRoute();
const emailStore = useEmailStore();

// const emails = toRefs(emailStore.archivedEmails);
const archivedEmails = computed(() => {
  return emailStore.emails.filter((email) => email.isArchived);
});

// console.log(isArchived);
</script>

<template>
  <div>
    <h3 v-if="emailStore.archivedEmails.length === 0">
      archived emails is empty
    </h3>
    <div else>
      <EmailList />
    </div>
  </div>
</template>

<style>
h3 {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, 50%);
}
</style>
