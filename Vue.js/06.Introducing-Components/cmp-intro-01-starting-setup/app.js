const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manual",
          name: "Manual Lorenz",
          phone: "123123 123123 123",
          email: "manual@abv.bg",
        },
        {
          id: "Ceko",
          name: "Ceko Lorenz",
          phone: "123123 123123 123",
          email: "Ceko@abv.bg",
        },
      ],
    };
  },
});

app.component("friend-contant", {
  template: `
    <li>
    <h2>{{friends.name}}</h2>
    <button @click="toggleDetails"> {{ detailsAreVisible ? 'Hide' : 'Show'}}</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{friends.phone}}</li>
      <li><strong>Email:</strong> {{friends.email}}</li>
    </ul>
  </li>
    `,
  data() {
    return {
      detailsAreVisible: true,
      friends: {
        id: "manual",
        name: "Manual Lorenz",
        phone: "123123 123123 123",
        email: "manual@abv.bg",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
