<template>
  <section class="container">
    <h2>{{ user.name }}</h2>
    <h3>{{ uAge }}</h3>
    <h5>{{ firstName + ' ' + lastName }}</h5>
    <button @click="setAge">Change age</button>
    <div>
      <input type="text" placeholder="First name" v-model="firstName" />
      <input type="text" placeholder="Last name" v-model="lastName" />
    </div>
  </section>
</template>

<script>
import { reactive, ref, isReactive, isRef, toRefs, computed, watch } from "vue";
export default {
  setup() {
    const uAge = ref(31);
    // const uName = ref('Tseko')
    // const uAge = ref('30')
    // let uName = 'Tseko'
    // const user = ref({
    //   name: "Tseko",
    //   age: 30
    // })

    const firstName = ref("");
    const lastName = ref("");

    // function setFirstName(e) {
    //   firstName.value = e.target.value;
    // }

    // function setLastName(e) {
    //   lastName.value = e.target.value;
    // }



    const fullName = computed(() => {
      return firstName.value + " " + lastName.value;
    });

    const user = reactive({
      name: "Tseko",
      age: 30,
    });

    function setNewData() {
      uAge.value = 32;
    }

    watch([uAge, fullName], function(newValues, oldValues) {
      console.log('Old age :' + oldValues[0]);
      console.log('New age :' + newValues[0]);
      console.log('Old age :' + oldValues[1]);
      console.log('New age :' + newValues[1]);
    })
    // setTimeout(() => {
    //   user.name = 'Max'
    //   user.age = 21
    // }, 2000);

    // setTimeout(() => {
    //   user.value.name = 'Max'
    //   user.value.age = 21
    // }, 2000);

    // const userRefs = toRefs(user);

    return {
      uAge,
      user: user,
      setAge: setNewData,
      firstName,
      lastName
      // setFirstName,
      // setLastName,
      // fullName,
      // userName: user.value.name,
      // age: user.value.age,
      // userName: userRefs.name,
      // age: userRefs.age,
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
