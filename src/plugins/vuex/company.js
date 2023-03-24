import axios from "axios";

export default {
    actions: {
        addCompany(context, data){
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:2205/api/companies', data)
                    .then(() => {
                        console.log('Kompaniya qoshildi')
                        resolve()
                    })
                    .catch(() => {
                        console.log('Kompaniya qoshishda xatolik')
                        reject()
                    })
            })
        },
        fetchCompanies(context, companyUrl = ''){
            return new Promise((resolve, reject) => {
                axios.get('http://localhost:2205/api/companies/' + companyUrl)
                    .then((response) => {
                        console.log('Kompaniyalar olindi')

                        let companies = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        }

                        context.commit('updateCompanies', companies)
                        resolve()


                    })
                    .catch(() => {
                        console.log('Kompaniyalarni olishda xatolik')
                        reject()
                    })
            })
        },
        setCompany(context, data){
            return new Promise((resolve, reject) => {
                axios.put(`http://localhost:2205/api/companies/${data.id}`, data)
                    .then(() => {
                        console.log('Kompaniya malumotlari ozgartirildi')
                        resolve()
                    })
                    .catch(() => {
                        console.log('Kompaniya ozgartirishda xatolik')
                        reject()
                    })
            })
        },
        deleteCompany(context, companyId){
            return new Promise((resolve, reject) => {
                axios.delete('http://localhost:2205/api/companies/' + companyId)
                    .then(() => {
                        console.log('Kompaniya ochirildi')
                        resolve()
                    })
                    .catch(() => {
                        console.log('Kompaniya ochirishda xatolik')
                        reject()
                    })
            })
        }
    },

    mutations: {
        updateCompanies(state, companies){
            state.companies = companies
        }
    },
    state: {
        companies: {
            models: [],
            totalItems: 0
        }
    },
    getters: {
        getCompanies(state){
            return state.companies.models
        }
    }
}