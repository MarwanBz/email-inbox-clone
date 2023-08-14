<script setup>
import '~/assets/styles/global.css'
import { useEmailStore} from '~/store/store';
const route = useRoute()
const emailStore = useEmailStore()
</script>

<template>
  <div>
    <EmailList :emails="emailStore.emails"/>
  </div>
</template>
<style>

</style>