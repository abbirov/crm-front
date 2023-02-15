<template>
    <div class="row">
        <SidebarCol/>

        <div class="col ms-5">
            <AddCompanyModal/>
            <TopBarRow/>
            <FilterCol/>
            <SearchRow/>
            <SetCompanyModal/>
            <SetCompanyTable/>
        </div>

    </div>
</template>

<script>
import AddCompanyModal from "@/components/company/AddCompanyModal.vue";
import FilterCol from "@/components/company/FilterCol.vue";
import SearchRow from "@/components/company/SearchRow.vue";
import SetCompanyModal from "@/components/company/SetCompanyModal.vue";
import SetCompanyTable from "@/components/company/SetCompanyTable.vue";
import TopBarRow from "@/components/company/TopBarRow.vue";
import SidebarCol from "@/components/company/SidebarCol.vue";
export default {
    name: "ComSetPage",
    components: {SidebarCol, AddCompanyModal, FilterCol, SearchRow, SetCompanyModal, SetCompanyTable, TopBarRow }
}
</script>

<style scoped>

</style>