<script setup>
import { useEmailStore } from "@/store/store";
import { reactive, computed } from "vue";
const emailStore = useEmailStore();
const route = useRoute();
// const index = route.path;
const props = defineProps(["inbox"]);
</script>

<template>
  <div class="sidebar">
    <div class="logo">
      <a to="/"><img src="../assets/icons/Logo.png" /></a>
    </div>
    <aside>
      <ul>
        <div>
          <NuxtLink to="/">
            <li :class="route.path === '/' ? 'active-page' : '' ">
              <div>
                <i><img src="../assets/icons/inbox-01.png" alt="" /></i
                >{{ inbox }}
              </div>
              <span>{{ emailStore.emails.length }}</span>
            </li>
          </NuxtLink>
          <NuxtLink to="/archived">
            <li :class="route.path === '/' ? '' : 'active-page' " >
              <div>
                <i><img src="../assets/icons/archive.png" alt="" /></i>
                Archived
              </div>
              <span>{{ emailStore.archivedEmails == 0? "Empty" : emailStore.archivedEmails.length }}</span>
            </li>
          </NuxtLink>
        </div>
        <li>
          <div>
            <i><img src="../assets/icons/log-out-04.png" alt="" /></i
            ><NuxtLink to="/">Logout</NuxtLink>
          </div>
          <!-- <span>10</span> -->
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

.logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 24px;
}

.logo img {
  max-width: 100%;
}

aside {
  margin-top: 20px;
}

aside ul:first-child {
  display: flex;
  flex-direction: column;
  height: 85vh;
  justify-content: space-between;
  padding: 0 10px;
}
li {
  margin-bottom: 12px;
  display: flex;
  width: 100%;
  padding: 12px 24px;
  /* background-color: rgb(166, 166, 166); */
  border-radius: 54px;
  justify-content: space-between;
  align-items: center;
}
li div {
  display: flex;
  align-items: center;
}
li div i {
  padding-right: 12px;
}
li a {
  display: block;
  color: #000;
  text-decoration: none;
}

li:hover {
  background-color: #d6e2fb;
  transition: all 0.2s ease-in-out;
}
</style>
