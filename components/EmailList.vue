<script setup>
import { storeToRefs } from "pinia";
import { useEmailStore } from "~/store/store";

// const emailStore = toRaw(useEmailStore())
const emailStore = useEmailStore()
// const {emails} = useEmailStore()
// const {emails} = storeToRefs(useEmailStore())
// console.log(emailStore.emails);
// const obj = emailStore.emails
console.log(emailStore);
</script>


<template>
  <div>
    <Email />
    <!-- <div v-for="email in emailStore.emails" :key="email.id">
      {{ email.title }}
    </div> -->
    <!-- <div v-for="email in emails" :key="email.id">
      {{ email.title }}
    </div> -->
  </div>
</template>

<style></style>
