<template>
  <div class="layout">
    <div class="sidebar-container">
      <SideBar inbox="Inbox"/>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style>
.layout {
  display: grid;
  grid-template-columns: 245px 1fr;
  height: 100vh;
}

.sidebar-container {
  position: relative;
  z-index: 1;
}
</style>
