<template>
    <div class="row">
        <SidebarCol/>

        <div class="col ms-5">
            <AddClientModal/>
            <TopBarRow/>
            <FilterCol/>
            <SearchRow/>
            <SetClientModal/>
            <TableRow/>
        </div>

    </div>

</template>

<script>
import TopBarRow from "@/components/client/TopBarRow.vue";
import FilterCol from "@/components/client/FilterCol.vue";
import SearchRow from "@/components/client/SearchRow.vue";
import AddClientModal from "@/components/client/AddClientModal.vue";
import SetClientModal from "@/components/client/SetClientModal.vue";
import TableRow from "@/components/client/TableRow.vue";
import SidebarCol from "@/components/client/SidebarCol.vue";
export default {
    name: "ClientPage",
    components: {AddClientModal, SidebarCol, TableRow, SetClientModal,SearchRow, FilterCol, TopBarRow,}
}
</script>

<style scoped>

</style>