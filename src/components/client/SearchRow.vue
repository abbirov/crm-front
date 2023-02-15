<template>
    <!-- Searchers start -->
    <div class="row poppins">
        <div class="col-2 ps-0">
            <div class="me-4 layer-bg clr-gray p-3">
                <img src="@/assets/icon/search.svg" class="col-1" alt="search">
                <input  type="text" placeholder="Mijoz qidirish" class="col-10 ps-3">
            </div>
        </div>
        <div class="col-3 ps-0">
            <div class="me-4 layer-bg clr-gray p-3">
                <span class="btn p-0 m-0">
                <img src="@/assets/icon/search.svg" class="col-1" alt="search">
                </span>
                <input  type="email" placeholder="Email qidirish" class="col-10 ps-3">
            </div>
        </div>
        <div class="col-2 ps-0">
            <div class="ms-2 me-4 layer-bg clr-gray p-3">
                <img src="@/assets/icon/search.svg" class="col-1" alt="search">
                <input  type="text" placeholder="Parol qidirsh" class="col-10 ps-3">
            </div>
        </div>
        <div class="col-3 ps-0">
            <div class="ms-2 me-5 layer-bg clr-gray p-3">
                <img src="@/assets/icon/search.svg" class="col-1" alt="search">
                <input  type="text" placeholder="Ishlash joyini qidirsh" class="col-10 ps-3">
            </div>
        </div>
        <div class="col-2 ps-0 pe-0">
            <div class="layer-bg clr-gray p-3 pe-5">
                <img src="@/assets/icon/search.svg" class="col-1" alt="search">
                <input  type="text" placeholder="So'nggi faollikni qidirish" class="col-10 ps-3">
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
    background-color: transparent;
    border: none;
    outline: none;
}
img {
    width: 20px;
    height: 20px;
}
.btn  {
    border: none;
}

</style>