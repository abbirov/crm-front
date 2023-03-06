<template>
    <div class="row mt-4">
        <div class="col  poppins ps-0 mt-2 pe-0">
            <table class="table layer-bg mb-0">
                <tr>
                    <td class="col-2 ps-5 p-3 clr-gray opty fw-semibold">Mijoz</td>
                    <td class="col-2 p-3 ps-5 clr-gray opty fw-bolder">Email</td>
                    <td class="col-2 p-3 ps-5 clr-gray opty fw-bolder">Parol</td>
                    <td class="col-2 p-3 ps-5 clr-gray opty fw-bolder">Ishlash joyi</td>
                    <td class="col-2 p-3 ps-5 clr-gray opty fw-bolder">So'nggi faollik</td>
                    <td class="col-1 p-3 ps-5 clr-gray opty fw-bolder"></td>
                    <td class="col-1 p-3 ps-5 clr-gray opty fw-bolder"></td>


                </tr>
                <tr>
                    <th scope="row" class="ps-4">
                        <img src="@/assets/avatar/lindsey.svg" class="rounded-circle ms-3 ava " alt="avatar">
                        Lindsey Stroud
                    </th>
                    <td class="p-3 ps-5 clr-gray">lindsey.stroud@gmail.com</td>
                    <td class="p-3 ps-5 clr-gray">12345678</td>
                    <td class="p-3 ps-5 clr-gray">Kadirov Inc</td>
                    <td class="p-3 ps-5 clr-gray">5 minut oldin</td>
                    <td class="p-3 ps-5">
                        <img src="@/assets/icon/edit-pen.svg" type="button"
                             data-bs-toggle="modal" data-bs-target="#setClientModal" alt="pen">
                    </td>
                    <td class="p-3" data-bs-toggle="modal" data-bs-target="#delete">
                        <img src="@/assets/icon/delete.svg" type="button" alt="trash">
                    </td>

                </tr>
                <tr>
                    <th scope="row" class="ps-4">
                        <img src="@/assets/avatar/nicci.svg" class="rounded-circle ms-3 ava " alt="avatar">
                        Nicci Troiani
                    </th>
                    <td class="p-3 ps-5 clr-gray">nicci.troiani@gmail.com</td>
                    <td class="p-3 ps-5 clr-gray">12345678</td>
                    <td class="p-3 ps-5 clr-gray">Kadirov Inc</td>
                    <td class="p-3 ps-5 clr-gray">14 minut oldin</td>
                    <td class="p-3 ps-5"><img src="@/assets/icon/edit-pen.svg" alt="pen"></td>
                    <td class="p-3"><img src="@/assets/icon/delete.svg" alt="trash"></td>
                </tr>
                <tr>
                    <th scope="row" class="ps-4">
                        <img src="@/assets/avatar/george.svg" class="rounded-circle ms-3 ava " alt="avatar">
                        George Fields
                    </th>
                    <td class="p-3 ps-5 clr-gray">george.fields@gmail.com</td>
                    <td class="p-3 ps-5 clr-gray">12345678</td>
                    <td class="p-3 ps-5 clr-gray">Kadirov Inc</td>
                    <td class="p-3 ps-5 clr-gray">7 minut oldin</td>
                    <td class="p-3 ps-5"><img src="@/assets/icon/edit-pen.svg" alt="pen"></td>
                    <td class="p-3"><img src="@/assets/icon/delete.svg" alt="trash"></td>
                </tr>
                <tr>
                    <th scope="row" class="ps-4">
                        <img src="@/assets/avatar/alsu.jpg" class="rounded-circle ms-3 ava " alt="avatar">
                        Alsu Akhmetzy
                    </th>
                    <td class="p-3 ps-5 clr-gray">alsu.akhmetzy@gmail.com</td>
                    <td class="p-3 ps-5 clr-gray">1928374655</td>
                    <td class="p-3 ps-5 clr-gray">Kadirov Inc</td>
                    <td class="p-3 ps-5 clr-gray">37 sekund oldin</td>
                    <td class="p-3 ps-5"><img src="@/assets/icon/edit-pen.svg" alt="pen"></td>
                    <td class="p-3"><img src="@/assets/icon/delete.svg" alt="trash"></td>
                </tr>
                <tr>
                    <th scope="row" class="ps-4">
                        <img src="@/assets/avatar/martin.svg" class="rounded-circle ms-3 ava " alt="avatar">
                        Martin Merces
                    </th>
                    <td class="p-3 ps-5 clr-gray">martin.merces@gmail.com</td>
                    <td class="p-3 ps-5 clr-gray">11112222</td>
                    <td class="p-3 ps-5 clr-gray">Kadirov Inc</td>
                    <td class="p-3 ps-5 clr-gray">4 soat oldin</td>
                    <td class="p-3 ps-5"><img src="@/assets/icon/edit-pen.svg" alt="pen"></td>
                    <td class="p-3"><img src="@/assets/icon/delete.svg" alt="trash"></td>
                </tr>
                <tr>
                    <th scope="row" class="ps-4">
                        <img src="@/assets/avatar/franz.svg" class="rounded-circle ms-3 ava " alt="avatar">
                        Franz Ferdiand
                    </th>
                    <td class="p-3 ps-5 clr-gray">franz.ferdiand@gmail.com</td>
                    <td class="p-3 ps-5 clr-gray">12345678</td>
                    <td class="p-3 ps-5 clr-gray">Kadirov Inc</td>
                    <td class="p-3 ps-5 clr-gray">Kecha, 14:06</td>
                    <td class="p-3 ps-5"><img src="@/assets/icon/edit-pen.svg" alt="pen"></td>
                    <td class="p-3"><img src="@/assets/icon/delete.svg" alt="trash"></td>
                </tr>
                <tr>
                    <th scope="row" class="ps-4">
                        <img src="@/assets/avatar/jane.svg" class="rounded-circle ms-3 ava " alt="avatar">
                        Jane Doe
                    </th>
                    <td class="p-3 ps-5 clr-gray">jane.doe@gmail.com</td>
                    <td class="p-3 ps-5 clr-gray">qwertyui</td>
                    <td class="p-3 ps-5 clr-gray">Kadirov Inc</td>
                    <td class="p-3 ps-5 clr-gray">Jan 30, 18:05</td>
                    <td class="p-3 ps-5"><img src="@/assets/icon/edit-pen.svg" alt="pen"></td>
                    <td class="p-3"><img src="@/assets/icon/delete.svg" alt="trash"></td>
                </tr>
                <tr>
                    <th scope="row" class="ps-4">
                        <img src="@/assets/avatar/john.svg" class="rounded-circle ms-3 ava " alt="avatar">
                        John Smith
                    </th>
                    <td class="p-3 ps-5 clr-gray">john.smith@gmail.com</td>
                    <td class="p-3 ps-5 clr-gray">11111111</td>
                    <td class="p-3 ps-5 clr-gray">Kadirov Inc</td>
                    <td class="p-3 ps-5 clr-gray">Ancha avval</td>
                    <td class="p-3 ps-5"><img src="@/assets/icon/edit-pen.svg" alt="pen"></td>
                    <td class="p-3"><img src="@/assets/icon/delete.svg" alt="trash"></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "TableSettings",

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
    width: 20px;
    height: 20px;
}


</style>