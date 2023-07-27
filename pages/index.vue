<script setup>
import '~/assets/styles/global.css'
// import { useEmailStore} from '~/store/store';
// import {useCounterStore} from '~/store/store'
// const counter = useEmailStore()

// const name =useCounterStore()
const route = useRoute()
// const store = useMainStore()
// counter.say
</script>

<template>
  <div>
    
    <!-- <button @click="counter.say">increment {{counter.count}}</button> -->
    <Inbox />
    <!-- <EmailList /> -->

    <!-- <div>{{ counter.name }}</div> -->
  </div>
</template>
<style>

</style>