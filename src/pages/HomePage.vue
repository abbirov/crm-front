<template>
    <div class="row">
        <SidebarCol/>

        <div class="col ms-5">
            <AddUserModal/>
            <SetUserModal/>
            <TopBarRow/>
            <FilterCol/>
            <SearchRow/>
            <TableRow/>
        </div>

    </div>


</template>

<script>
import TopBarRow from "@/components/user/TopBarRow.vue";
import FilterCol from "@/components/user/FilterCol.vue";
import SearchRow from "@/components/user/SearchRow.vue";
import AddUserModal from "@/components/user/AddUserModal.vue";
import SetUserModal from "@/components/user/SetUserModal.vue";
import TableRow from "@/components/user/TableRow.vue";
import SidebarCol from "@/components/user/SidebarCol.vue";
export default {
    name: "HomePage",
    components: {SidebarCol, TableRow, SetUserModal, AddUserModal,SearchRow, FilterCol, TopBarRow,}
}
</script>

<style scoped>

</style>