<template>
    <AddUserModal/>
    <PutUserModal/>
    <TopBarRow/>
    <FilterCol/>
    <SearchRow/>
    <router-view/>
</template>

<script>
import TopBarRow from "@/components/TopBarRow.vue";
import FilterCol from "@/components/FilterCol.vue";
import SearchRow from "@/components/SearchRow.vue";
import AddUserModal from "@/components/AddUserModal.vue";
import PutUserModal from "@/components/PutUserModal.vue";
export default {
    name: "HomePage",
    components: {PutUserModal, AddUserModal,SearchRow, FilterCol, TopBarRow,}
}
</script>

<style scoped>

</style>