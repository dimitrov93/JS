const app = Vue.createApp({
  data() {
    return { 
      enteredString: '',
      goals: [] };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredString)
    },
    remove(itemI) {
      this.goals.splice(itemI,1)
    }
  },
});

app.mount("#user-goals");
