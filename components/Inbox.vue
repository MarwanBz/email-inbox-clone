<template>
  <div class="container">
    <h1 class="title">Inbox</h1>
    <div class="modal-actions">
      <div class="email-selected">
        <input class="checkbox" type="checkbox" name="" id="">
        <p class="selected-txt">Email Selected <span> (10)</span></p>
      </div>
      <div class="read-and-archived">
        <img src="../assets/icons/mail-04.png" alt="" />
        <p class="action-txt">Mark as Read (r)</p>
        <img src="../assets/icons/trash-01.png" alt="" />
        <p class="action-txt">Archived (a)</p>
      </div>
    </div>
    <EmailList />
  </div>
</template>

<script>
export default {};
</script>

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

</style>
