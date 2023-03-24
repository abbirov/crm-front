<template>

    <div v-if="isVisible"
         class="position-fixed n-success poppins p-3" >
        <img src="@/assets/icon/red-check.svg" class="ms-3 check" alt="check">
        <span class="ms-3 text-light fs-5">Ma'lumot muvofaqqiyatli o'chirildi</span>
    </div>

    <div class="row mt-4">
        <div class="col poppins ps-0 mt-2 pe-0">
            <table class="table layer-bg mb-0">
                <tr>
                    <td class="col-3 ps-5 p-3 clr-gray opty fw-semibold">Foydalanuvchilar</td>
                    <td class="col-3 p-3 ps-5 clr-gray opty fw-bolder">Email</td>
                    <td class="col-2 p-3 ps-5 clr-gray opty fw-bolder">Parol</td>
                    <td class="col-2 p-3 ps-5 clr-gray opty fw-bolder">So'nggi faollik</td>
                    <td class="col-1 p-3 ps-5 clr-gray opty fw-bolder"></td>
                    <td class="col-1 p-3 ps-5 clr-gray opty fw-bolder"></td>


                </tr>
                <tr v-for="company of getCompanies" :key="company.id">
                    <th scope="row" class="ps-4">
                        <img src="@/assets/avatar/kadirov-inc.png" class="rounded-circle ms-3 ava " alt="avatar">
                        {{company.name}}
                    </th>
                    <td class="p-3 ps-5 clr-gray">{{company.email}}</td>
                    <td class="p-3 ps-5 clr-gray">{{company.password}}</td>
                    <td class="p-3 ps-5 clr-gray">{{company.id}}</td>
                    <td class="p-3 ps-5">
                        <img @click=fetchId(company.id) src="@/assets/icon/edit-pen.svg" type="button" data-bs-toggle="modal" data-bs-target="#setUserModal" alt="pen">
                    </td>
                    <td class="p-3" data-bs-toggle="modal" data-bs-target="#delete">
                        <img @click=fetchId(company.id) src="@/assets/icon/delete.svg" type="button" alt="trash">
                    </td>
                    <!-- Delete modal -->
                    <th class="modal fade" id="delete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content m-size">
                                <div class="n-delete poppins p-3">
                                    <span class="ms-3 fs-5 fw-semibold">Rostdan ham o'chirilsinmi?</span>
                                    <button @click="yesDelete" type="button" class="btn ms-5 me-4 b-yes text-light" data-bs-dismiss="modal">Ha</button>
                                    <button type="button" class="btn b-no text-light" data-bs-dismiss="modal">Yo'q</button>
                                </div>
                            </div>
                        </div>
                    </th>
                    <!-- Delete modal -->
                </tr>
                <!--                <tr>-->
                <!--                    <th scope="row" class="ps-4">-->
                <!--                        <img src="@/assets/avatar/nicci.svg" class="rounded-circle ms-3 ava " alt="avatar">-->
                <!--                        Nicci Troiani-->
                <!--                    </th>-->
                <!--                    <td class="p-3 ps-5 clr-gray">nicci.troiani@gmail.com</td>-->
                <!--                    <td class="p-3 ps-5 clr-gray">12345678</td>-->
                <!--                    <td class="p-3 ps-5 clr-gray">14 minut oldin</td>-->
                <!--                    <td class="p-3 ps-5"><img src="@/assets/icon/edit-pen.svg" alt="pen"></td>-->
                <!--                    <td class="p-3"><img src="@/assets/icon/delete.svg" alt="trash"></td>-->
                <!--                </tr>-->
                <!--                <tr>-->
                <!--                    <th scope="row" class="ps-4">-->
                <!--                        <img src="@/assets/avatar/george.svg" class="rounded-circle ms-3 ava " alt="avatar">-->
                <!--                        George Fields-->
                <!--                    </th>-->
                <!--                    <td class="p-3 ps-5 clr-gray">george.fields@gmail.com</td>-->
                <!--                    <td class="p-3 ps-5 clr-gray">12345678</td>-->
                <!--                    <td class="p-3 ps-5 clr-gray">7 minut oldin</td>-->
                <!--                    <td class="p-3 ps-5"><img src="@/assets/icon/edit-pen.svg" alt="pen"></td>-->
                <!--                    <td class="p-3"><img src="@/assets/icon/delete.svg" alt="trash"></td>-->
                <!--                </tr>-->
                <!--                <tr>-->
                <!--                    <th scope="row" class="ps-4">-->
                <!--                        <img src="@/assets/avatar/alsu.jpg" class="rounded-circle ms-3 ava " alt="avatar">-->
                <!--                        Alsu Akhmetzy-->
                <!--                    </th>-->
                <!--                    <td class="p-3 ps-5 clr-gray">alsu.akhmetzy@gmail.com</td>-->
                <!--                    <td class="p-3 ps-5 clr-gray">1928374655</td>-->
                <!--                    <td class="p-3 ps-5 clr-gray">37 sekund oldin</td>-->
                <!--                    <td class="p-3 ps-5"><img src="@/assets/icon/edit-pen.svg" alt="pen"></td>-->
                <!--                    <td class="p-3"><img src="@/assets/icon/delete.svg" alt="trash"></td>-->
                <!--                </tr>-->
                <!--                <tr>-->
                <!--                    <th scope="row" class="ps-4">-->
                <!--                        <img src="@/assets/avatar/martin.svg" class="rounded-circle ms-3 ava " alt="avatar">-->
                <!--                        Martin Merces-->
                <!--                    </th>-->
                <!--                    <td class="p-3 ps-5 clr-gray">martin.merces@gmail.com</td>-->
                <!--                    <td class="p-3 ps-5 clr-gray">11112222</td>-->
                <!--                    <td class="p-3 ps-5 clr-gray">4 soat oldin</td>-->
                <!--                    <td class="p-3 ps-5"><img src="@/assets/icon/edit-pen.svg" alt="pen"></td>-->
                <!--                    <td class="p-3"><img src="@/assets/icon/delete.svg" alt="trash"></td>-->
                <!--                </tr>-->
                <!--                <tr>-->
                <!--                    <th scope="row" class="ps-4">-->
                <!--                        <img src="@/assets/avatar/franz.svg" class="rounded-circle ms-3 ava " alt="avatar">-->
                <!--                        Franz Ferdiand-->
                <!--                    </th>-->
                <!--                    <td class="p-3 ps-5 clr-gray">franz.ferdiand@gmail.com</td>-->
                <!--                    <td class="p-3 ps-5 clr-gray">12345678</td>-->
                <!--                    <td class="p-3 ps-5 clr-gray">Kecha, 14:06</td>-->
                <!--                    <td class="p-3 ps-5"><img src="@/assets/icon/edit-pen.svg" alt="pen"></td>-->
                <!--                    <td class="p-3"><img src="@/assets/icon/delete.svg" alt="trash"></td>-->
                <!--                </tr>-->
                <!--                <tr>-->
                <!--                    <th scope="row" class="ps-4">-->
                <!--                        <img src="@/assets/avatar/jane.svg" class="rounded-circle ms-3 ava " alt="avatar">-->
                <!--                        Jane Doe-->
                <!--                    </th>-->
                <!--                    <td class="p-3 ps-5 clr-gray">jane.doe@gmail.com</td>-->
                <!--                    <td class="p-3 ps-5 clr-gray">qwertyui</td>-->
                <!--                    <td class="p-3 ps-5 clr-gray">Jan 30, 18:05</td>-->
                <!--                    <td class="p-3 ps-5"><img src="@/assets/icon/edit-pen.svg" alt="pen"></td>-->
                <!--                    <td class="p-3"><img src="@/assets/icon/delete.svg" alt="trash"></td>-->
                <!--                </tr>-->
                <!--                <tr>-->
                <!--                    <th scope="row" class="ps-4">-->
                <!--                        <img src="@/assets/avatar/john.svg" class="rounded-circle ms-3 ava " alt="avatar">-->
                <!--                        John Smith-->
                <!--                    </th>-->
                <!--                    <td class="p-3 ps-5 clr-gray">john.smith@gmail.com</td>-->
                <!--                    <td class="p-3 ps-5 clr-gray">11111111</td>-->
                <!--                    <td class="p-3 ps-5 clr-gray">Ancha avval</td>-->
                <!--                    <td class="p-3 ps-5"><img src="@/assets/icon/edit-pen.svg" alt="pen"></td>-->
                <!--                    <td class="p-3"><img src="@/assets/icon/delete.svg" alt="trash"></td>-->
                <!--                </tr>-->
            </table>

        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
    name: "SetCompanyTable",
    data(){
        return {
            isVisible: false,
        }
    },
    computed: {
        ...mapGetters(['getCompanies'])
    },
    methods: {
        ...mapActions(['fetchCompanies', 'deleteCompany']),

        fetchId(comId){
            this.$route.params.id = comId
        },
        yesDelete(){
            this.deleteCompany(this.$route.params.id)
                .then(() => {
                    this.fetchCompanies()
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
.opty {
    opacity: 0.5;
}
.ava {
    width: 40px;
    height: 40px;
}
img {
    width: 35px;
    height: 35px;
}
.n-delete {
    background: #FFFFFF;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
}
.b-yes {
    width: 100px;
    height: 40px;
    background: #F7685B;
    border-radius: 2px;
}
.b-no {
    width: 100px;
    height: 40px;
    background: #34D57E;
    border-radius: 2px;
}
.m-size {
    width: 600px;
}
.n-success {
    margin-left: 25%;
    border: none;
    border-radius: 5px;
    background: #F7685B;
}

.check {
    width: 30px;
    height: 30px;
    background: #F7685B;
}

</style>