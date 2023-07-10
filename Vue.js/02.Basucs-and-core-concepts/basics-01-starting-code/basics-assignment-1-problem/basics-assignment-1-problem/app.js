const app = Vue.createApp({
  data() {
    return {
      name: "Tsvetomir",
      age: 30,
      ranNum: Math.random(),
      favNum: 666,
      url: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    };
  },
  methods: {
    ageInFive() {
      return this.age + 5;
    },
    randonNumber() {
      return Math.random();
    },
  },
});
app.mount("body");
