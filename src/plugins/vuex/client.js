import axios from "axios";

export default {
    actions: {
        addClient(context, data){
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:2205/api/clients', data)
                    .then(() => {
                        console.log('Mijoz qoshildi')
                        resolve()
                    })
                    .catch(() => {
                        console.log('Mijoz qoshishda xatolik')
                        reject()
                    })
            })
        },
        fetchClients(context, companyUrl = ''){
            return new Promise((resolve, reject) => {
                axios.get('http://localhost:2205/api/clients/' + companyUrl)
                    .then((response) => {
                        console.log('Mijozlar olindi')

                        let clients = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        }

                        context.commit('updateClients', clients)
                        resolve()


                    })
                    .catch(() => {
                        console.log('Mijozlarni olishda xatolik')
                        reject()
                    })
            })
        },
        setClient(context, data){
            return new Promise((resolve, reject) => {
                axios.put(`http://localhost:2205/api/clients/${data.id}`, data)
                    .then(() => {
                        console.log('Mijoz malumotlari ozgartirildi')
                        resolve()
                    })
                    .catch(() => {
                        console.log('Mijoz ozgartirishda xatolik')
                        reject()
                    })
            })
        },
        deleteClient(context, clientId){
            return new Promise((resolve, reject) => {
                axios.delete('http://localhost:2205/api/clients/' + clientId)
                    .then(() => {
                        console.log('Mijoz ochirildi')
                        resolve()
                    })
                    .catch(() => {
                        console.log('Mijoz ochirishda xatolik')
                        reject()
                    })
            })
        }
    },

    mutations: {
        updateClients(state, clients){
            state.clients = clients
        }
    },
    state: {
        clients: {
            models: [],
            totalItems: 0
        }
    },
    getters: {
        getClients(state) {
            return state.clients.models
        }
    }
}