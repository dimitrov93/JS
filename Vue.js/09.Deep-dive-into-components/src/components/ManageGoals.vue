<template lang="">
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoals">Set goal</button>
    <teleport to='body' >
    <error-alert v-if="inputIsInvalid">
      <h2>Input is invalid</h2>
      <p>Please enter valid input</p>
      <button @click="confirmError">Okay</button>
    </error-alert>
    </teleport>
</template>
<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoals() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.inputIsInvalid = true;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
<style lang=""></style>
