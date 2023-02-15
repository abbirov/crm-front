<template>
    <div class="row">
        <SidebarCol/>

        <div class="col ms-5">
            <AddClientModal/>
            <TopBarRow/>
            <FilterCol/>
            <SearchRow/>
            <SetClientModal/>
            <SetClientTable/>
        </div>

    </div>
</template>

<script>
import TopBarRow from "@/components/client/TopBarRow.vue";
import FilterCol from "@/components/client/FilterCol.vue";
import SearchRow from "@/components/client/SearchRow.vue";
import AddClientModal from "@/components/client/AddClientModal.vue";
import SetClientModal from "@/components/client/SetClientModal.vue";
import SidebarCol from "@/components/client/SidebarCol.vue";
import SetClientTable from "@/components/client/SetClientTable.vue";
export default {
    name: "ClientSetPage",
    components: {SetClientModal,TopBarRow, SearchRow, FilterCol, AddClientModal, SidebarCol, SetClientTable}
}
</script>

<style scoped>

</style>