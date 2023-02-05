<template>
    <!--Top bar col start -->
        <div class="row p-3 layer-bg">
            <div class="col d-flex justify-content-end col-btn-add">
                <button class="btn  btn-primary btn-color poppins"
                type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                >
                    Foydalanuvchi qo'shish
                </button>
            </div>
        </div>
    <!-- Top bar col end-->
</template>

<script>
export default {
    name: "TopBarCol"
}
</script>

<style scoped>
.layer-bg {
    background-color: white;
    box-shadow: 6px 0 18px rgba(0, 0, 0, 0.06);

}
.poppins {
    font-family: Poppins, sans-serif;
}
.col-btn-add {
    padding-bottom: 5px;

}
.btn-color {
    background-color: #109CF1;
    box-shadow: 0 4px 10px rgba(16, 156, 241, 0.24);
    border-radius: 4px;
    color: white;
}
</style>