<template>
    <div class="container-fluid">
        <div class="row">
            <SidebarCol/>
            <TopBarCol/>


        </div>
    </div>
</template>

<script>


import SidebarCol from "@/components/SidebarCol.vue";
import TopBarCol from "@/components/TopBarCol.vue";

export default {
    name: 'App',
    components: {TopBarCol, SidebarCol}
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
