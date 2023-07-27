<template>
  <h2>My Course Goal</h2>

  <div class="div">
    <p>Goal: {{ goal }}</p>
    <p>Name: {{ name }}</p>
    <p>Work name: {{ workName }}</p>
    <p>Age: {{ moreInfo.age }}</p>
    <p>City: {{ moreInfo.city }}</p>
  </div>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->

  <h3>OUTPUT COURSE GOAL</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="hide">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    const workName = ref("Montway");

    const mainGoal = ref({
      goal: "To gain more knowledge",
      name: "Tsvetomir",
    });

    const moreInfo = reactive({
      age: 30,
      city: "Montana",
    });

    function hide() {
      const p = document.querySelector(".div");

      if (p.style.display === "none") {
        p.style.display = "block";
      } else {
        p.style.display = "none";
      }
    }

    return {
      workName: workName.value,
      goal: mainGoal.value.goal,
      name: mainGoal.value.name,
      moreInfo,
      hide,
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
