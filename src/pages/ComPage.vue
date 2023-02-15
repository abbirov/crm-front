<template>
    <div class="row">
        <SidebarCol path="/companies/settings"/>

        <div class="col ms-5">
            <AddCompanyModal/>
            <TopBarRow/>
            <FilterCol/>
            <SearchRow/>
            <SetCompanyModal/>
            <TableRow/>
        </div>

    </div>


</template>

<script>
import AddCompanyModal from "@/components/company/AddCompanyModal.vue";
import FilterCol from "@/components/company/FilterCol.vue";
import SearchRow from "@/components/company/SearchRow.vue";
import SetCompanyModal from "@/components/company/SetCompanyModal.vue";
import TableRow from "@/components/company/TableRow.vue";
import TopBarRow from "@/components/company/TopBarRow.vue";
import SidebarCol from "@/components/company/SidebarCol.vue";
export default {
    name: "ComPage",
    components: {SidebarCol, AddCompanyModal, FilterCol, SearchRow, SetCompanyModal, TableRow, TopBarRow }
}
</script>

<style scoped>

</style>