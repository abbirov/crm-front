<template>
    <!-- Searchers start -->
    <div class="row poppins">
        <div class="col-3 ps-0 pe-4">
            <div class="col me-4 layer-bg clr-gray p-3">
                <img @click="search('name')" src="@/assets/icon/search.svg" class="ms-2 p-0 btn" alt="search">
                <input v-model="input.name"  type="text" placeholder="Foydalanuvchi qidirish" class="ms-2 col-8">
            </div>
        </div>
        <div class="col-3 ps-0 pe-4">
            <div class="col me-4 layer-bg clr-gray p-3">
                <img @click="search('email')" src="@/assets/icon/search.svg" class="ms-2 btn" alt="search">
                <input v-model="input.email" type="text" placeholder="Email qidirish" class="ms-2 col-8">
            </div>
        </div>
        <div class="col-3 ps-0 pe-4">
            <div class="col ms-2 me-4 layer-bg clr-gray p-3">
                <img @click="search('password')" src="@/assets/icon/search.svg" class="ms-2 btn" alt="search">
                <input v-model="input.password"  type="text" placeholder="Parol qidirsh" class="ms-2 col-8">
            </div>
        </div>
        <div class="col-3 ps-0 pe-0">
            <div class="col ms-2 layer-bg clr-gray p-3">
                <img src="@/assets/icon/search.svg" class="ms-2" alt="search">
                <input  type="text" placeholder="So'nggi faollikni qidirish" class="ms-2 col-8">
            </div>
        </div>
    </div>
    <!-- Searchers end -->
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: "SearchCols",
    data(){
        return {
            input: {
                name: '',
                email: '',
                password: ''
            },
            userUrl: ''
        }
    },
    methods: {
        ...mapActions(['fetchUsers']),
        search(searchType){

            if (searchType === 'name'){
                this.userUrl = '?name=' + this.input.name
            }
            if (searchType === 'email'){
                this.userUrl = '?email=' + this.input.email
            }
            if (searchType === 'password'){
                this.userUrl = '?password=' + this.input.password
            }
            this.fetchUsers(this.userUrl)
        }
    }
}
</script>

<style scoped>
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
input {
    border: none;
    outline: none;
    background-color: transparent;
}
</style>