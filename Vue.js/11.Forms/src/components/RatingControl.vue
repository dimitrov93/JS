<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }">
      <button @click="active('poor')" type="button">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'avarage' }">
      <button @click="active('avarage')" type="button">Avarage</button>
    </li>
    <li :class="{ active: modelValue === 'great' }">
      <button @click="active('great')" type="button">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["modelValue"],
  emits: ["update:modelValue"],
  // data() {
  //   return {
  //     activeOption: this.modelValue,
  //   };
  // },
  // computed: {
  //   activeOption() {
  //     return this.modelValue;
  //   }
  // },
  methods: {
    active(option) {
      this.$emit("update:modelValue", option);
    },
  },
};
</script>

<style scoped>
.ative {
  border-color: palegreen;
}

.active button {
  color: palegreen;
}
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
