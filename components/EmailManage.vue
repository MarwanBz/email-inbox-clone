<script setup>
import { storeToRefs } from "pinia";
import "../assets/styles/global.css"
import { useEmailStore } from "~/store/store";
const emailStore = useEmailStore();
const route =useRoute()
const plural = "s";

</script>

<template>
  <div class="container">
    <h1 class="title">{{route.path === '/' ? 'Inbox' : 'Archived'}}</h1>
    <div class="modal-actions">
      <div class="email-selected">
        <input
          class="checkbox"
          type="checkbox"
          name=""
          v-model="emailStore.isSelectAllChecked"
          :value="emailStore.updateSelectAllChecked()"
          id=""
          @change="emailStore.selectAll()"
        />
        <p class="selected-txt">
          <span>{{ emailStore.selectedEmails.length >= 11 ? "All" : "" }}</span>
          Email{{
            emailStore.selectedEmails.length >= emailStore.emails.length
              ? plural
              : ""
          }}
          Selected
          <span>({{ emailStore.emailsNumber }})</span>
        </p>
      </div>
      <div class="read-and-archived">
        <img src="../assets/icons/mail-04.png" alt="" />
        <p  @click="emailStore.markRead()" class="action-txt">Mark as Read (r)</p>
        <img src="../assets/icons/trash-01.png" alt="" />
        <p @click="emailStore.archiveEmail()" class="action-txt">Archived (a)</p>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  padding: 24px 24px 0 24px;
}

.container .title {
  padding-bottom: 32px;
}

.email-selected {
  display: flex;
  align-items: center;
}

.email-selected p {
  padding-left: 12px;
}

.email-selected .checkbox {
  scale: 1.5;
}

.is-read {
  opacity: 0.5;
}
</style>
