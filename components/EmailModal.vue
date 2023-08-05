<template>
  <div
    class="modal-overlay"
    :class="{ hidden: !emailStore.showEmailModal }"
    @click="closeModal()"
  >
    <div @click.stop="console.log('modal clicked')" class="modal">
      <div class="details-container">
        <div class="details">
          <div class="modal-actions">
            <div @click="closeModal" class="close">
              <img src="../assets/icons/x-close.svg" alt="" />
              <p class="action-txt">Close (Esc)</p>
            </div>
            <div class="read-and-archived">
              <img src="../assets/icons/mail-04.png" alt="" />
              <p @click="emailStore.markRead()" class="action-txt">
                Mark as Read (r)
              </p>
              <img src="../assets/icons/trash-01.png" alt="" />
              <p class="action-txt">Archived (a)</p>
            </div>
          </div>
        </div>
        <div v-if="selectedEmail">
          <h1 class="title">{{ selectedEmail.title }}</h1>
          <p class="content">
            {{ selectedEmail.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useEmailStore } from "@/store/store";

let emailStore = useEmailStore();

// to get the selected email.
const selectedEmail = computed(() => {
  if (emailStore.selectedEmails.length > 0) {
    // Return the selected email.
    return emailStore.selectedEmails[emailStore.selectedEmails.length - 1];
  } else {
    return null;
  }
});

function closeModal() {
  emailStore.showEmailModal = !emailStore.showEmailModal;
}
</script>

<style>
.modal-overlay {
  background-color: rgba(76, 87, 100, 0.8);
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: -100%;
  z-index: 999;
  /* animation: slide-in 0.3s ease-in-out forwards; */
  animation: slide 0.3s ease-in-out forwards;
}

.modal-overlay.hidden {
  animation-direction: reverse;
}
.modal {
  height: 100vh;
  width: 60%;
  background-color: #fff;
  margin-left: auto;
}

.details-container {
  padding: 32px;
}

.details-container .title {
  padding-bottom: 20px;
}

.modal-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 32px;
}

.close {
  display: flex;
  align-items: center;
}

.close img {
  padding-right: 12px;
}

.action-txt:hover {
  cursor: pointer;
  text-decoration: underline;
}

.read-and-archived {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.read-and-archived img {
  padding-right: 12px;
}

.read-and-archived img:last-of-type {
  padding-left: 40px;
}

@keyframes slide-in {
  from {
    opacity: 0;
    right: -100%; /* start off-screen */
  }
  to {
    opacity: 1;
    right: 0; /* animate to bring it on-screen */
  }
}

@keyframes slide {
  from {
    opacity: 0;
    right: -100%; /* start off-screen */
  }
  to {
    opacity: 1;
    right: 0; /* animate to bring it on-screen */
  }
  /* Reverse the animation when the element is hidden */
  /* This is equivalent to the slide-out animation */
  /* animation-direction: reverse; */
}
</style>
