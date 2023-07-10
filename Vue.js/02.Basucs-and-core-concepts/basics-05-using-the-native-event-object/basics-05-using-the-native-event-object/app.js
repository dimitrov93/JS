const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      // fullname: "",
      lastName: "",
    };
  },
  watch: {
    counter(value) {
        if (value > 50) {
          const that = this;
          setTimeout(() => {
            that.counter = 0
          }, 2000);
        }
    }
    // name(value) {
    //   if (!value) return (this.fullname = "");
    //   this.fullname = value + " " + this.lastName;
    // },
    // lastName(value) {
    //   if (!value) return (this.fullname = "");
    //   this.fullname = this.name + " " + value;
    // }
  },
  computed: {
    fullname() {
      if (!this.name || !this.lastName) return ''
      return this.name + ' ' + this.lastName
    }
  },
  methods: {
    outputFullname() {
      if (!this.name) return "";

      return this.name + " " + "Schwarzmuller";
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    reset() {
      this.name = "";
    },
  },
});

app.mount("#events");
