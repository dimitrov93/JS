const app = Vue.createApp({
    data() {
        return {
            inputValue: '',
            tasks: [],
            vis: true,
        }
    },
    computed: {
        buttonCaption() {
            return this.vis ? "Hide List" : "Show List"
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.inputValue)
        },
        visHandler() {
            this.vis = !this.vis
        }
    },
})

app.mount('#assignment')