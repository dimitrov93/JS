const app = Vue.createApp({
  data() {
    return {
      goalA: "Finish the course",
      goalB: "<h2>Master the course</h2>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outPutGoal() {
        const randomNum = Math.random();
        return randomNum < 0.5 ? this.goalA : this.goalB
    },
  },
});
app.mount("#body");
