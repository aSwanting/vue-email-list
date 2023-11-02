const { createApp } = Vue

createApp({

    data() {
        return {
            emailAdresses: [],
        }
    },

    methods: {
        fetchEmailAdresses(emailCount) {

            for (let i = 0; i < emailCount; i++) {
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((res) => {

                        this.emailAdresses.push(res.data.response)

                    })
            }
        }
    },

    created() {

        this.fetchEmailAdresses(20)
    }

}).mount('#app')