const app = Vue.createApp({
  data() {
    return {
      number: 0,
      //   finalnumber: "",
    };
  },
  computed: {
    result() {
      if (this.number < 37) {
        return "Not there yet";
      } else if (this.number === 37) {
        return this.number;
      } else {
        if (this.number > 37) return "Too much!";
      }
    },
  },
  watch: {
    result() {
      console.log("Watcher");
      const that = this;
      setTimeout(() => {
        that.number = 0;
      }, 5000);
    },
  },
  methods: {
    add(num) {
      return (this.number = this.number + num);
    },
  },
});
app.mount("body");
