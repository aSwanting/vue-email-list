const { createApp } = Vue

createApp({

    data() {
        return {

            emailAdresses: [],
            emailCount: null

        }
    },

    methods: {
        fetchEmailAdresses(emailCount) {

            if (this.emailAdresses) this.emailAdresses = []

            for (let i = 0; i < emailCount; i++) {

                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((res) => this.emailAdresses.push(res.data.response))

            }
        }
    },

}).mount('#app')