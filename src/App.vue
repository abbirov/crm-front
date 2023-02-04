<template>
    <div class="container-fluid">
        <div class="row">
            <SidebarCol/>

            <div class="col ms-5">
                <TopBarCol/>
                <FilterCol/>
                <SearchCols/>
            </div>

        </div>
    </div>
</template>

<script>


import SidebarCol from "@/components/SidebarCol.vue";
import TopBarCol from "@/components/TopBarCol.vue";
import FilterCol from "@/components/FilterCol.vue";
import SearchCols from "@/components/SearchCols.vue";

export default {
    name: 'App',
    components: {SearchCols, FilterCol, TopBarCol, SidebarCol}
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



</style>
