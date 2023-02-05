<template>
    <!-- Searchers start -->
    <div class="row poppins">
        <div class="col-3 ps-0 pe-4">
            <div class="col me-4 layer-bg clr-gray p-3">
                <img src="@/assets/icon/search.svg" class="ms-2" alt="search">
                <input  type="text" placeholder="Foydalanuvchi qidirish" class="ms-2">
            </div>
        </div>
        <div class="col-3 ps-0 pe-4">
            <div class="col me-4 layer-bg clr-gray p-3">
                <img src="@/assets/icon/search.svg" class="ms-2" alt="search">
                <input  type="text" placeholder="Email qidirish" class="ms-2">
            </div>
        </div>
        <div class="col-3 ps-0 pe-4">
            <div class="col ms-2 me-4 layer-bg clr-gray p-3">
                <img src="@/assets/icon/search.svg" class="ms-2" alt="search">
                <input  type="text" placeholder="Parol qidirsh" class="ms-2">
            </div>
        </div>
        <div class="col-3 ps-0 pe-0">
            <div class="col ms-2 layer-bg clr-gray p-3">
                <img src="@/assets/icon/search.svg" class="ms-2" alt="search">
                <input  type="text" placeholder="So'nggi faollikni qidirish" class="ms-2">
            </div>
        </div>
    </div>
    <!-- Searchers end -->
</template>

<script>
export default {
    name: "SearchCols"
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
.clr-gray {
    color: #707683;
}
input {
    border: none;
    outline: none;
}
</style>