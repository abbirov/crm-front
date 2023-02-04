<template>
    <div class="container-fluid">
        <div class="row">
            <SidebarCol/>

            <div class="col ms-5">
                <TopBarRow/>
                <FilterCol/>
                <SearchRow/>
                <TableRow/>
            </div>

        </div>
    </div>
</template>

<script>


import SidebarCol from "@/components/SidebarCol.vue";
import TopBarRow from "@/components/TopBarRow.vue";
import FilterCol from "@/components/FilterCol.vue";
import SearchRow from "@/components/SearchRow.vue";
import TableRow from "@/components/TableRow.vue";

export default {
    name: 'App',
    components: {TableRow, SearchRow, FilterCol, TopBarRow, SidebarCol}
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
