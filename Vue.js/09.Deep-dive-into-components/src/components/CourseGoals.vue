<template>
  <ul>
    <li v-for="goal in goals" :key="goals">
    <slot :item="goal" another="..a.."></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["Finish the course", "Learn Vue"],
    };
  },
};
</script>
