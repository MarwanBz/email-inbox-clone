<script setup>
import { useEmailStore } from "@/store/store";
import { reactive, computed } from "vue";
const emailStore = useEmailStore();
const route = useRoute();
const props = defineProps(["inbox"]);
</script>

<template>
  <div class="sidebar">
    <div class="sidebar__logo">
      <a class="sidebar__logo-link" to="/"><img class="sidebar__logo-img" src="../assets/icons/Logo.png" /></a>
    </div>
    <aside class="sidebar__aside">
      <ul class="sidebar__list">
        <div class="sidebar__section">
          <NuxtLink class="sidebar__link" to="/">
            <li class="sidebar__item" :class="route.path === '/' ? 'sidebar__item--active' : '' ">
              <div class="sidebar__item-content">
                <i class="sidebar__icon"><img src="../assets/icons/inbox-01.png" alt="" /></i
                >{{ inbox }}
              </div>
              <span class="sidebar__item-count">{{ emailStore.emails.length }}</span>
            </li>
          </NuxtLink>
          <NuxtLink class="sidebar__link" to="/archived">
            <li class="sidebar__item"  :class="route.path === '/' ? '' : 'sidebar__item--active' " >
              <div class="sidebar__item-content">
                <i class="sidebar__icon"><img src="../assets/icons/archive.png" alt="" /></i>
                Archived
              </div>
              <span class="sidebar__item-count">{{ emailStore.archivedEmails == 0 ? "Empty" : emailStore.archivedEmails.length }}</span>
            </li>
          </NuxtLink>
        </div>
        <li  class="sidebar__item">
          <div class="sidebar__item-content">
            <i class="sidebar__icon"><img src="../assets/icons/log-out-04.png" alt="" /></i
            ><NuxtLink class="sidebar__link" to="/">Logout</NuxtLink>
          </div>
        </li>
      </ul>
    </aside>
  </div>
</template>

<style scoped>
a {
  color: #000;
}
.sidebar {
  background-color: #f8fafc;
  padding: 20px 0;
  z-index: 1;
  position: sticky;
  top: 0;
  border: 1px solid #e5e7eb;
}

.sidebar__logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 24px;
}

.sidebar__logo-img {
  max-width: 100%;
}

.sidebar__aside {
  margin-top: 20px;
}

.sidebar__list {
  display: flex;
  flex-direction: column;
  height: 85vh;
  justify-content: space-between;
  padding: 0 10px;
}
.sidebar__section {
  display: flex;
  flex-direction: column;
}

.sidebar__item {
  margin-bottom: 12px;
  display: flex;
  width: 100%;
  padding: 12px 24px;
  border-radius: 54px;
  justify-content: space-between;
  align-items: center;
}

.sidebar__item-content {
  display: flex;
  align-items: center;
}

.sidebar__icon {
  padding-right: 12px;
}

.sidebar__link {
  display: block;
  color: #000;
  text-decoration: none;
}

.sidebar__item:hover {
  background-color: #d6e2fb;
  transition: all 0.2s ease-in-out;
}

.sidebar__item--active {
  /* Your active item styles */
  background-color: #d6e2fb;
}
</style>
