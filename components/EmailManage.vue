<script setup>
import { storeToRefs } from "pinia";
import "../assets/styles/global.css"
import { useEmailStore } from "~/store/store";
const emailStore = useEmailStore();
const route =useRoute()
const plural = "s";

</script>

<template>
  <div class="email-container">
    <h1 class="email-container__title">{{ route.path === '/' ? 'Inbox' : 'Archived' }}</h1>
    <div class="email-container__actions">
      <div class="email-container__email-selected">
        <input
          class="email-container__checkbox"
          type="checkbox"
          name=""
          v-model="emailStore.isSelectAllChecked"
          :value="emailStore.updateSelectAllChecked()"
          id=""
          @change="emailStore.selectAll()"
        />
        <p class="email-container__selected-txt">
          <span>{{ emailStore.selectedEmails.length >= 11 ? 'All' : '' }}</span>
          Email{{
            emailStore.selectedEmails.length >= emailStore.emails.length
              ? plural
              : ''
          }}
          Selected
          <span>({{ emailStore.emailsNumber }})</span>
        </p>
      </div>
      <div class="email-container__actions-read-and-archived">
        <img src="../assets/icons/mail-04.png" alt="" />
        <p @click="emailStore.markRead()" class="email-container__action-txt">Mark as Read (r)</p>
        <img src="../assets/icons/trash-01.png" alt="" />
        <p @click="emailStore.archiveEmail()" class="email-container__action-txt">Archived (a)</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.email-container {
  padding: 24px 24px 0 24px;
}

.email-container__title {
  padding-bottom: 32px;
}

.email-container__actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 32px;
}

.email-container__email-selected {
  display: flex;
  align-items: center;
}

.email-container__email-selected p {
  padding-left: 12px;
}

.email-container__checkbox {
  transform: scale(1.5);
}

.email-container__actions-read-and-archived {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.email-container__action-txt:hover {
  cursor: pointer;
  text-decoration: underline;
}


.email-container__actions-read-and-archived img {
  padding-right: 12px;
}

.email-container__actions-read-and-archived img:last-of-type {
  padding-left: 40px;
}

</style>