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

onMounted(() => {
  document.addEventListener('keyup', handleKeyUp);
});

onUnmounted(() => {
  document.removeEventListener('keyup', handleKeyUp);
});

const handleKeyUp = (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
};
</script>

<template>
  <div  
    class="modal-overlay"
    :class="{ 'modal-overlay--hidden': !emailStore.showEmailModal }"
    @click="closeModal()"
  >
    <div @click.stop class="modal">
      <div class="details-container">
        <div class="details">
          <div class="modal-actions">
            <div @keydown.esc="log" @click="closeModal" class="modal-actions__close">
              <img src="../assets/icons/x-close.svg" alt="" />
              <p class="modal-actions__action-txt">Close (Esc)</p>
            </div>
            <div class="modal-actions__read-and-archived">
              <img src="../assets/icons/mail-04.png" alt="" />
              <p @click="emailStore.markRead()" class="modal-actions__action-txt">
                Mark as Read (r)
              </p>
              <img src="../assets/icons/trash-01.png" alt="" />
              <p class="modal-actions__action-txt" @click="emailStore.archiveEmail">Archived (a)</p>
            </div>
          </div>
        </div>
        <div v-if="selectedEmail">
          <h1 class="details-container__title">{{ selectedEmail.title }}</h1>
          <p class="details-container__content">
            {{ selectedEmail.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<style >
.modal-overlay {
  background-color: rgba(76, 87, 100, 0.8);
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: -100%;
  z-index: 999;
  animation: slide 0.3s ease-in-out forwards;
}

.modal-overlay--hidden {
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

.details-container__title {
  padding-bottom: 20px;
}

.modal-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 32px;
}

.modal-actions__close {
  display: flex;
  align-items: center;
}

.modal-actions__close img {
  padding-right: 12px;
}

.modal-actions__action-txt:hover {
  cursor: pointer;
  text-decoration: underline;
}

.modal-actions__read-and-archived {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.modal-actions__read-and-archived img {
  padding-right: 12px;
}

.modal-actions__read-and-archived img:last-of-type {
  padding-left: 40px;
}

@keyframes slide {
  from {
    opacity: 0;
    right: -100%;
  }
  to {
    opacity: 1;
    right: 0;
  }
}
</style>
