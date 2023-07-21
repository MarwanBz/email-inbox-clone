<template>
  <div class="modal-overlay">
    <div class="modal">
      <div class="details-container">
        <div class="details">
          <div class="modal-actions">
            <div class="close">
              <img src="../assets/icons/x-close.svg" alt="" />
              <p class="action-txt">Close (Esc)</p>
            </div>
            <div class="read-and-archived">
              <img src="../assets/icons/mail-04.png" alt="" />
              <p class="action-txt">Mark as Read (r)</p>
              <img src="../assets/icons/trash-01.png" alt="" />
              <p class="action-txt">Archived (a)</p>
            </div>
          </div>
        </div>
        <h1 class="title">Lorem ipsum dolor sit amet consectetur.</h1>
        <p class="content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
          temporibus impedit! Id dolor officiis sunt cupiditate tempora nobis
          necessitatibus illum?
        </p>
      </div>
    </div>
  </div>
</template>

<script></script>

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
  transition: all 0.3s ease-in-out;
  animation: slide-in 0.3s ease-in-out forwards;
}

.modal {
  height: 100vh;
  width: 60%;
  background-color: #fff;
  margin-left: auto;
  transition: all 0.3s ease-in-out;
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
    right: -100%; /* start off-screen */
  }
  to {
    right: 0; /* animate to bring it on-screen */
  }
}
</style>
