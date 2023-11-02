const { createApp } = Vue

createApp({

    data() {
        return {
            email: '',
        }
    },

    methods: {
        fetchEmailAdresses() {

            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((res) => {

                    this.email = res.data.response
                    console.log(this.email)

                })
        }
    },

    created() {
        this.fetchEmailAdresses()
    }

}).mount('#app')