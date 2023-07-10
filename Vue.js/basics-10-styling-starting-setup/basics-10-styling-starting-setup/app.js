const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed: {
    boxASelected() {
      return { active: this.boxASelected };
    },
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        return (this.boxASelected = !this.boxASelected);
      } else if (box === "B") {
        return (this.boxBSelected = !this.boxBSelected);
      } else {
        return (this.boxCSelected = !this.boxCSelected);
      }
    },
  },
});

app.mount("#styling");
