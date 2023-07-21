<template>
  <div class="layout">
    <div class="sidebar">
      <SideBar />
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

.sidebar {
  position: relative;
  z-index: 1;
}
</style>
