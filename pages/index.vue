<script setup>
import '~/assets/styles/global.css'
import { useEmailStore} from '~/store/store';
// import {useCounterStore} from '~/store/store'
// const counter = useEmailStore()

// const name =useCounterStore()
const route = useRoute()
const emailStore = useEmailStore()
// const store = useMainStore()
// counter.say
</script>

<template>
  <div>
    <EmailList :emails="emailStore.emails"/>
  </div>
</template>
<style>

</style>