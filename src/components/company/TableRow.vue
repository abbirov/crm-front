<template>
    <!-- Table start -->
    <div class="row mt-4">
        <div class="col poppins ps-0 mt-2 pe-0">

            <table class="table layer-bg mb-0">
                <tr>
                    <td class="col-3 ps-5 p-3 clr-gray opty fw-semibold">Kompaniya</td>
                    <td class="col-3 p-3 ps-5 clr-gray opty fw-bolder">Email</td>
                    <td class="col-3 p-3 ps-5 clr-gray opty fw-bolder">Parol</td>
                    <td class="col-3 p-3 ps-5 clr-gray opty fw-bolder">So'nggi faollik</td>
                </tr>

                <tr v-for="company of getCompanies" :key="company.id">
                    <th scope="row" class="ps-4">
                        <img src="@/assets/avatar/kadirov-inc.png" class="rounded-circle ms-3 ava " alt="avatar">
                        {{company.name}}
                    </th>
                    <td class="p-3 ps-5 clr-gray">{{company.email}}</td>
                    <td class="p-3 ps-5 clr-gray">{{company.password}}</td>
                    <td class="p-3 ps-5 clr-gray">5 minut oldin</td>
                </tr>
            </table>

        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
export default {
    name: "TableRow",
    computed: {
        ...mapGetters(['getCompanies'])
    },
    methods: {
        ...mapActions(['fetchCompanies'])
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
    color: black;
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
</style>