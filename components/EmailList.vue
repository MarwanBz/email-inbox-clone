<script setup>
import { storeToRefs } from "pinia";
import { useEmailStore } from "~/store/store";
const emailStore = useEmailStore();

// const emailStore = toRaw(useEmailStore())
// const {emails} = useEmailStore()
// const {emails} = storeToRefs(useEmailStore())
// console.log(emailStore.emails);
// const obj = emailStore.emails

// const log = console.log("parent clicked")

// const receiver = ()=>{
//   console.log()
// }
function receiver(param) {
  console.log("mmm", param);
}
emailStore.getEmails();
</script>

<template>
  <div>
    <Email @click="emailStore.showEmailModal = !emailStore.showEmailModal" />
    <div v-if="emailStore.showEmailModal"><EmailModal /></div>
  </div>
</template>

<style></style>
