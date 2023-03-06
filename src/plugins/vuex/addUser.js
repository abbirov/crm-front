import axios from "@/plugins/vuex/axios";

export default {
    actions: {
        addUser(context, data){
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:2205/api/users/my', data)
                    .then((reponse) => {
                        console.log('User qoshildi')

                        context.commit('updateUser', reponse.data.user)
                        resolve()
                    })
                    .catch(() => {
                        console.log('User qoshishda xatolik')
                        reject()
                    })
            })
        }

    },
    mutations: {
        updateUser(state, user){
            this.user = user
        }
    },
    state: {
        postUser : null,
    },
    getters: {
        getPostUser(state){
            return state.postUser
        }
    }
}