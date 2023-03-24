<template>
    <!-- Notification -->
    <div v-if="isVisible"
         class="position-fixed n-success poppins p-3" >
        <img src="@/assets/icon/check.svg" class="ms-3 check" alt="check">
        <span class="ms-3 text-light fs-5">Ma'lumot muvofaqqiyatli o'chirildi</span>
    </div>

    <!-- Form modal start-->
    <div class="modal fade" id="setClientModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content poppins">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 fw-bolder" id="exampleModalLabel">O'zgartirish</h1>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="setCli">
                        <div class="mb-3">
                            <label for="name" class="form-label fw-semibold">Ism</label>
                            <input v-model="form.name" type="text" class="form-control" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label fw-semibold">Email</label>
                            <input v-model="form.email" type="email" class="form-control" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label fw-semibold">Parol</label>
                            <input v-model="form.password" type="password" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label class="form-label fw-semibold" for="select2">Ishlash joyi</label>
                            <select
                                v-model="form.company"
                                class="form-select" id='select2' aria-label="Default select example">
                                <option value="" disabled selected>Kompaniyani tanlang</option>
                                <option
                                    v-for="company of getCompanies"
                                    :key="company.id" :value="'/api/companies/' + company.id">
                                    {{company.name}}
                                </option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">O'zgartirish</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- Form modal end-->
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "SetClientModal",
    data(){
        return {
            isVisible: false,
            form: {
                id: '',
                name: '',
                email: '',
                password: '',
                company: ''
            }
        }
    },
    computed: {
        ...mapGetters(['getCompanies'])
    },
    methods: {
        ...mapActions(['setClient','fetchClients', 'fetchCompanies']),
        setCli(){
            this.form.id = this.$route.params.id
            this.setClient(this.form)
                .then(() => {
                    this.fetchClients()
                    this.isVisible = true
                    setTimeout(() => {
                        this.isVisible = false;
                    }, 3000);
                })
        }
    },
    mounted() {
        this.fetchCompanies()
    }
}
</script>

<style scoped>

.poppins {
    font-family: Poppins, sans-serif;
}
h1 {
    margin-left: 170px;
}
.btn {
    margin-left: 175px;
}
.modal {
    background-color: transparent;
}
.n-success {
    margin-left: 25%;
    border: none;
    border-radius: 5px;
    background: #34D47E;
}

.check {
    width: 30px;
    height: 30px;
    background: #34D47E;
}


</style>