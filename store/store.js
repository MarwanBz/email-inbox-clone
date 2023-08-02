// import { defineStore } from "pinia";

import { defineStore } from "pinia";

// turn the json array of objects into a valid js array

export const useEmailStore = defineStore("emails", {
  state: () => {
    return {
      isSelectAllChecked: false,
      selectedEmails: ref([]),
      emails: ref([]),
      isLoading: false,
      showEmailModal : false
    };
  },

  actions: {
    async getEmails() {
      this.isLoading = true;
      this.emails = (await import("@/data/data.json")).default;
      this.isLoading = false;
    },
    
    toggleSelected(email) {
      const isSelected = this.isSelected;
      const index = this.selectedEmails.indexOf(email);
      if (index >= 0) {
        this.selectedEmails.splice(index, 1);
      } else {
        this.selectedEmails.push(email);
      }
    },

    selectAll() {
      if (this.selectedEmails.length === this.emails.length) {
        this.selectedEmails.forEach((email) => {
          email.isSelected = false;
        });
        this.selectedEmails = [];
      } else {
        this.emails.forEach((email) => {
          if (!this.selectedEmails.includes(email)) {
            this.selectedEmails.push(email);
            email.isSelected = true;
          }
        });
      }
      this.isSelectAllChecked =
        this.selectedEmails.length === this.emails.length;
      this.selectedEmails.length <= 1 ? (this.isSelectAllChecked = false) : "";
    },
    updateSelectAllChecked() {
      const isAllSelected = this.selectedEmails.length === this.emails.length;
      this.isSelectAllChecked = isAllSelected;
      this.isSelectAllChecked = isAllSelected;
    },
    markRead() {
      this.selectedEmails.forEach((email) => {
        email.isRead = true;
      });
    },
    emailDetails() {
      this.selectedEmails.forEach((email) => {
        console.log(email.title)
      });
    },
  },

  getters: {
    emailsNumber() {
      return this.selectedEmails.length;
    },
  },
});

// import emails from "../data/data.json";

// export const useEmailStore = defineStore("emails", () => {
//   const isSelected = [];
//   const selectedEmails = ref([]);
//   const emails = [];
//   let isLoading = ref(false);

//   async function getEmails() {
//     isLoading = true;
//     // emails.value = (await import("@/data/data.json")).default;
//     emails.push(...(await import("@/data/data.json")).default);
//     isLoading = false;
//     console.log(emails);
//   }

//   function toggleSelected(email) {
//     const index = selectedEmails.value.indexOf(email);
//     if (index >= 0) {
//       selectedEmails.value.splice(index, 1);
//     } else {
//       selectedEmails.value.push(email);
//     }
//   }

//   function selectAll() {
//     selectedEmails.value = emails.slice();
//     // toggle isSelected property of all selected emails to true
//     selectedEmails.value.forEach((email) => {
//       email.isSelected = true;
//     });
//   }

//   const selectedEmailsRef = toRef(selectedEmails);

//   return {
//     isSelected,
//     selectedEmails,
//     emails,
//     isLoading,
//     getEmails,
//     toggleSelected,
//     selectAll,
//     selectedEmailsRef,
//     calc: computed(() => selectedEmails.length),
//     m: computed(() => emails.length),
//   };
// });
