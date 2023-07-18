<template lang="">
    <div>
        <label>Name</label>
        <input type="text" v-model='nameInput' />
    </div>

    <div>
        <label>Age</label>
        <input type="text" v-model='ageInput' />
    </div>
    <button @click='this.$emit("send-data", this.nameInput, this.ageInput)'> Send </button>
</template>
<script>
export default {
    emits: ['send-data'],
    data() {
        return {
            nameInput: '',
            ageInput: '',
        }
    },
}
</script>
<style lang="">
    
</style>