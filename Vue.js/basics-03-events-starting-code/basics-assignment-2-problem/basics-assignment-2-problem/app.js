const app = Vue.createApp({
  data() {
    return {
        alertText: "Alert",
        firstInput: "",
        secondInput: ""
    };
  },
  methods: {
    onClick() {
        return alert(this.alertText)
    },
    onFirstInput(e) {
        this.firstInput = e.target.value
    },
    onSecondInput(e) {
        this.secondInput = this.secondInput + e.target.value
    }
  },
});

app.mount("body");
