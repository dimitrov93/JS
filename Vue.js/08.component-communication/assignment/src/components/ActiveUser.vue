<template lang="">
  <div>
    <h2>Username: {{ name }}</h2>
    <h3>Age: {{ age }}</h3>
  </div>
</template>
<script>
export default {
  props: ["name", "age"],
};
</script>
<style lang=""></style>
