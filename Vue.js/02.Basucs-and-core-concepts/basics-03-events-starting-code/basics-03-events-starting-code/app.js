const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmName() {
      this.confirmedName = this.name;
    },
    submitForm(e) {
      console.log(e.target.value);
    },
    setName(e, name) {
      this.name = e.target.value + " " + name;
    },
    add(num) {
      console.log(num);
      return (this.counter = this.counter + num);
    },
    reduce(num) {
      return (this.counter = this.counter - num);
    },
    both(str, num) {
      str == "add"
        ? (this.counter = this.counter + num)
        : (this.counter = this.counter - num);
    },
  },
});

app.mount("#events");
