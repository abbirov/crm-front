<template>
<!--    &lt;!&ndash; Notifications &ndash;&gt;-->
<!--    <div v-if="isELVisible"-->
<!--         class="position-fixed n-success poppins p-3" >-->
<!--        <img src="@/assets/icon/check.svg" class="ms-3 check" alt="check">-->
<!--        <span class="ms-3 text-light fs-5">Ma'lumot muvofaqqiyatli o'zgartirildi</span>-->
<!--    </div>-->

<!--    <div v-if="del"-->
<!--         class="position-fixed n-delete poppins p-3">-->
<!--        <span class="ms-3 fs-5">Rostdan ham o'chirilsinmi?</span>-->
<!--        <button type="button" class="btn btn-danger">Ha</button>-->
<!--        <button type="button" class="btn btn-primary">Yo'q</button>-->
<!--    </div>-->
    <!-- Notifications -->

    <!--Top bar col start -->
        <div class="row p-3 layer-bg">
            <div class="col d-flex justify-content-end col-btn-add">
                <button class="btn  btn-primary btn-color poppins"
                type="button" data-bs-toggle="modal" data-bs-target="#addCompanyModal"
                >
                    Kompaniya qo'shish
                </button>
            </div>
        </div>
    <!-- Top bar col end-->

</template>

<script>
export default {
    name: 'TopBarRow.vue',

    // Togglelar keyinchalik modal orniga ishlatishim mumkin
    // data() {
    //     return {
    //         isELVisible: false,
    //         del: false
    //     }
    // },
    // methods: {
    //     showEl() {
    //         this.del = !this.del
    //     }
    // },



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
    border: none;
    color: white;
}

/*.n-success {*/
/*    margin-top: 50px;*/
/*    margin-left: 420px;*/
/*    border: none;*/
/*    border-radius: 5px;*/
/*    background: #34D57E;*/
/*}*/

/*.check {*/
/*    width: 30px;*/
/*    height: 30px;*/
/*}*/

</style>