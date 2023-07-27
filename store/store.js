import { defineStore } from "pinia";
import emails from "../data/data.json"

// turn the json array of objects into a valid js array
console.log(typeof(emails));
export const useEmailStore = defineStore("emails" , {
  state: ()=> {
    return {
      count: 0,
      mystate: "state",
      emails : []
    }
  },
  actions: {
    getEmails() {
      this.emails = emails
    }
  }
})


// export const useCounterStore = defineStore("counter", () => {
//   const count = ref(10);
//   const name = ref("Eduardo");
//   const doubleCount = computed(() => count.value * 2);
  
//   function increment() {
//     count.value++;
//   }

//   return { count, name, doubleCount, increment };
// });