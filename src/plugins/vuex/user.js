import axios from "axios";

export default {
    actions: {
        addUser(context, data){
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:2205/api/users', data)
                    .then(() => {
                        console.log('User qoshildi')
                        console.log(data)
                        resolve()
                    })
                    .catch(() => {
                        console.log('User qoshishda xatolik')
                        reject()
                    })
            })
        },
        fetchUsers(context, userUrl = ''){
            return new Promise((resolve, reject) => {
                axios.get('http://localhost:2205/api/users/' + userUrl)
                    .then((response) => {
                        console.log('Userlar olindi')

                        let users = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        }

                        context.commit('updateUsers', users)
                        resolve()


                    })
                    .catch(() => {
                        console.log('Userlarni olishda xatolik')
                        console.log(userUrl)
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

                        context.commit('updateUser', user)
                        resolve()
                    })
                    .catch(() => {
                        console.log('User olishda xatolik')
                        reject()
                    })
            })
        },
        setUser(context, data){
            return new Promise((resolve, reject) => {
                axios.put(`http://localhost:2205/api/users/${data.id}`, data)
                    .then(() => {
                        console.log('User malumotlari ozgartirildi')
                        resolve()
                    })
                    .catch(() => {
                        console.log('User ozgartirishda xatolik')
                        reject()
                    })
            })
        },
        deleteUser(context, userId){
            return new Promise((resolve, reject) => {
                axios.delete('http://localhost:2205/api/users/' + userId)
                    .then(() => {
                        console.log('User ochirildi')
                        resolve()
                    })
                    .catch(() => {
                        console.log('User ochirishda xatolik')
                        reject()
                    })
            })
        }
    },

    mutations: {
        updateUsers(state, users){
            state.users = users
        },
        updateUser(state, user){
            state.user = user
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