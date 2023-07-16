<template lang="">
  <div>
    <h1>hi</h1>
    <active-user
      v-for="user in users"
      :key="user.name"
      :name="user.name"
      :age="user.age"
    ></active-user>
    <user-data
    @send-data="getUserData"
    ></user-data>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [
        { name: "Tsvetomir dimitrov", age: "26" },
        { name: "Dimitrov Tsvetomir", age: "62" },
      ],
    };
  },
  methods: {
    getUserData(name,age) {
        this.users.push({name,age})
    }
  }
};
</script>
<style lang=""></style>
