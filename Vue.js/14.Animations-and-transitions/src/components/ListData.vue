<template>
  <!-- <ul> -->
    <transition-group tag="ul" name="user-list">
      <li v-for="user in users" :key="user" @click="removeUser(user)">
        {{ user }}
      </li>
    </transition-group>
  <!-- </ul> -->
  <div>
    <input type="text" ref="userInput" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ["Max", "John", "Joe", "Pam", "Mike"],
    };
  },
  methods: {
    addUser() {
      this.users.unshift(this.$refs.userInput.value);
    },
    removeUser(user) {
      this.users = this.users.filter((u) => u !== user);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.user-list-enter-from {
    opacity: 0;
    transform: translateX(-30px);
}
.user-list-enter-active {
    transition: all 1s ease-out;
}
.user-list-enter-to {
    opacity: 1;
    transform: translateX(0);
}


/* leave */

.user-list-leave-from {
    opacity: 1;
    transform: translateX(0);
}
.user-list-leave-active {
    transition: all 0.5s ease-in;
    position: absolute;
}
.user-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.user-list-move {
    transition: transform 0.8s ease;
}
</style>
