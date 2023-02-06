<template>
    <div class="container-fluid">
        <div class="row">
            <SidebarCol/>

            <div class="col ms-5">



                <HomePage/>
            </div>

        </div>
    </div>
</template>

<script>
import SidebarCol from "@/components/SidebarCol.vue";
import HomePage from "@/pages/HomePage.vue";

const bootstrap = require('bootstrap')
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
        // eslint-disable-next-line no-undef
        const toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
}

export default {
    name: 'App',
    components: {HomePage,SidebarCol}
}
</script>

<style>

body {
    background: #F5F5F5;
}

h5 {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-size: 25px;
    color: #109CF1;

}




</style>
