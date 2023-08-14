import { defineStore } from "pinia";

// turn the json array of objects into a valid js array

export const useEmailStore = defineStore("emails", {
  state: () => {
    return {
      isSelectAllChecked: false,
      archivedEmails: ref([]),
      selectedEmails: ref([]),
      emails: ref([]),
      isLoading: false,
      showEmailModal: false,
      isArchived: false,
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
        console.log(email.title);
      });
    },
    archiveEmail() {
      this.selectedEmails.forEach((email) => {
        if (email.isArchived === false) {
          email.isArchived = true;
          email.isSelected = false;
          // Add email to 'archivedEmails' state
          this.archivedEmails.push(email);

          // Remove email from 'selectedEmails' state
          const index = this.selectedEmails.indexOf(email);
          if (index >= 0) {
            this.selectedEmails.splice(index, 1);
          }
          // / Remove email from 'emails' state (assuming it's also stored there)
          const emailIndex = this.emails.indexOf(email);
          if (emailIndex >= 0) {
            this.emails.splice(emailIndex, 1);
          }
        }
      });
    },
  },

  getters: {
    emailsNumber() {
      return this.selectedEmails.length;
    },
    // archivedEmailsNumber() {
    //   return this.archivedEmailsNumber.length;
    // },
    archived() {
      return this.archivedEmails.filter((email) => email.isArchived ===true );
    },
  },
});
