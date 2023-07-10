const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            userInput2: '',
            toggle: true,
        }
    },
    computed: {
        toggleClass() {
           return {
            visible: this.toggle,
            hidden: !this.toggle
           }
        }
    },
    methods: {
        togglePar() {
            return this.toggle = !this.toggle
        }
    },
})

app.mount('#assignment')