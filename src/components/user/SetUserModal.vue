<template>
    <!-- Form modal start-->
    <div class="modal fade" id="setUserModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content poppins">
                <div class="modal-header">
                    <h1 class="modal-title fs-5 fw-bolder" id="exampleModalLabel">O'zgartirish</h1>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="name" class="form-label fw-semibold">Ism</label>
                            <input type="text" class="form-control" id="name" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label fw-semibold">Email</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label fw-semibold">Parol</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>
                        <button class="btn btn-primary">O'zgartirish</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- Form modal end-->
</template>

<script>
export default {
    name: "SetUserModal"
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