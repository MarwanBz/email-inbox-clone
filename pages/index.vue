<script setup>
import '~/assets/styles/global.css'
import { useEmailStore} from '~/store/store';
const emailStore = useEmailStore()

onMounted(() => {
  document.addEventListener('keyup', handleAKeyUp);
});

onUnmounted(() => {
  document.removeEventListener('keyup', handleAKeyUp);
});

const handleAKeyUp = (event) => {
  if (event.key === 'a') {
    emailStore.archiveEmail()
  }
};
</script>

<template>
  <div>
    <EmailList :emails="emailStore.emails"/>
  </div>
</template>
<style>

</style>