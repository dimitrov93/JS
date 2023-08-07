<template>
  <div>
    <h2>
      {{ userName }}
    </h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<script>
import {
  computed,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

export default {
  props: ["firstName", "lastName"],
  //   computed: {
  //     userName() {
  //         return this.firstName + ' ' + this.lastName
  //     }
  //   },
  setup(props, context) {
    const uName = computed(function () {
      return props.firstName + " " + props.lastName;
    });

    const age = inject("userAge");

    onBeforeMount(function () {
      console.log("onBeforeMount");
    });


    onMounted(function () {
      console.log("onMount");
    });

    onBeforeUpdate(function () {
      console.log("onBeforeUpdate");
    });

    onUpdated(function () {
      console.log("updated");
    });

    onBeforeUnmount(function () {
      console.log("before unmount");
    });

    onUnmounted(function () {
      console.log("onUnmounted");
    });
    // context.emit('save-data', 1); // this.$emit('save-data', 1)
    return { userName: uName, age };
  },
};
</script>

<style scoped></style>
