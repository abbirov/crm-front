<template>
    <!-- Table start -->
    <div class="row mt-4">
        <div class="col  poppins ps-0 mt-2 pe-0">
            <table class="table layer-bg mb-0">
                <tr>
                    <td class="col-2 ps-5 p-3 clr-gray opty fw-semibold">Mijoz</td>
                    <td class="col-3 p-3 ps-5 clr-gray opty fw-bolder">Email</td>
                    <td class="col-2 p-3 ps-5 clr-gray opty fw-bolder">Parol</td>
                    <td class="col-3 p-3 ps-5 clr-gray opty fw-bolder">Ishlash joyi</td>
                    <td class="col-2 p-3 ps-5 clr-gray opty fw-bolder">So'nggi faollik</td>
                </tr>
                <tr v-for="client of getClients" :key="client.id">
                    <th scope="row" class="ps-4">
                        <img src="@/assets/avatar/john.svg" class="rounded-circle ms-3 ava " alt="avatar">
                        {{client.name}}
                    </th>
                    <td class="p-3 ps-5 clr-gray">{{client.email}}</td>
                    <td class="p-3 ps-5 clr-gray">{{client.password}}</td>
                    <td class="p-3 ps-5 clr-gray">{{client.company.name}}</td>
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
        ...mapGetters(['getClients', 'getCompanies'])
    },
    methods: {
        ...mapActions(['fetchClients', 'fetchCompanies'])
    },
    mounted() {
        this.fetchClients()
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
</style>