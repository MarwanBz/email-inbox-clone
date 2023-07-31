<script setup>
import { storeToRefs } from "pinia";
import { useEmailStore } from "~/store/store";

// const emailStore = toRaw(useEmailStore())
const emailStore = useEmailStore();
// const {emails} = useEmailStore()
// const {emails} = storeToRefs(useEmailStore())
// console.log(emailStore.emails);
// const obj = emailStore.emails

// const log = console.log("parent clicked")

// const receiver = ()=>{
//   console.log()
// }
function receiver(param) {
  console.log("mmm",param);
}
</script>

<template>
  <div>
    <Email
      @checkbox-change="
        () => {
          console.log('change works on me li');
        }
      "
      @test-event="
        receiver((i+'d'))
      "
    />
    <!-- <div v-for="email in emailStore.emails" :key="email.id">
      {{ email.title }}
    </div> -->
    <!-- <div v-for="email in emails" :key="email.id">
      {{ email.title }}
    </div> -->
  </div>
</template>

<style></style>
