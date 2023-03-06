<template>
    <!-- Form modal start-->
    <div class="modal fade poppins" id="addClientModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="fs-5 fw-bolder ml" id="exampleModalLabel">Mijoz qo'shish</div>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="auth">
                        <div class="mb-3">
                            <label for="name" class="form-label fw-semibold">Ism</label>
                            <input v-model="form.name" type="text" class="form-control" >
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label fw-semibold">Email</label>
                            <input v-model="form.email" type="email" class="form-control" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label fw-semibold">Parol</label>
                            <input v-model="form.password" type="password" class="form-control" >
                        </div>
                        <button type="submit" class="btn btn-primary">Qo'shish</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- Form modal end-->
</template>

<script>

export default {
    name: "AddClientModal",
    data() {
        return {
            form: {
                name: '',
                email: '',
                password: ''
            }
        }
    },

}
</script>

<style scoped>
.poppins {
    font-family: Poppins, sans-serif;
}
.ml {
    margin-left: 160px;
}
.btn {
    margin-left: 190px;
}
</style>