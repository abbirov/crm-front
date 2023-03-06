import axios from "@/plugins/vuex/axios";

export default {
    actions: {
        fetchUsers(context){
            return new Promise((resolve, reject) => {
                axios.get('http://localhost:2205/api/users')
                    .then((response) => {
                        console.log('Userlar olindi')

                        let users = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        }

                        context.commit('updateFetchUsers', users)
                        resolve()


                    })
                    .catch(() => {
                        console.log('Userlarni olishda xatolik')
                        reject()
                    })
            })
        },

        fetchUser(context, userId){
            return new Promise((resolve, reject) => {
                axios.get('http://localhost:2205/api/users/' + userId)
                    .then((response) => {
                        console.log('User olindi')

                        let user = {
                            id: response.data.id,
                            name: response.data.name,
                            email: response.data.email,
                            password: response.data.password
                        }

                        context.commit('updateFetchUser', user)
                        resolve()
                    })
                    .catch(() => {
                        console.log('User olishda xatolik')
                        reject()
                    })
            })
        }
    },
    mutations: {
        updateFetchUsers(state, users){
            this.users = users
        },
        updateFetchUser(state, user){
            this.user = user
        }
    },
    state: {
        users: {
            models: [],
            totalItems: 0
        },
        user: {
            id: null,
            name: null,
            email: null,
            password: null
        }
    },
    getters: {
        getUsers(state){
            return state.users.models
        },
        getUser(state){
            return state.user
        }
    }
}