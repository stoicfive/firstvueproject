const app = Vue.createApp({

    data() {
        return{
            title: 'the final empire',
            author: 'brandon sanderson',
            age: 45
        }
    },
    
    methods: {
        changeTitle() {
            this.title = 'Words of Radiance'
        }
    }

})

app.mount('#app')