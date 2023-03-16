<template>
    <!-- Form modal start-->
    <div class="modal fade" id="setUserModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content poppins">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 fw-bolder" id="exampleModalLabel">O'zgartirish</h1>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="change">
                        <div class="mb-3">
                            <label for="name" class="form-label fw-semibold">Ism</label>
                            <input v-model="form.name" type="text" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label fw-semibold">Email</label>
                            <input v-model="form.email" type="email" class="form-control" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label fw-semibold">Parol</label>
                            <input v-model="form.password" type="password" class="form-control">
                        </div>
                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Qo'shish</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- Form modal end-->
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "SetUserModal",
    data() {
        return {
            form: {
                id: '',
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(['setUser', 'fetchUsers']),
        change(){
            this.form.id = this.$route.params.id
            this.setUser(this.form)
                .then(() => {
                    this.fetchUsers()
                })
        }
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

/* Modal border burchaklarni qirrali qilish
uchun 'modal-content' classi yoniga yoziladi

.border-qirra {
    border-radius: 0;
}
*/
.modal {
    background-color: transparent;
}


</style>