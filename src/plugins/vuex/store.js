import {createStore} from "vuex";
import user from "@/plugins/vuex/user";
import addUser from "@/plugins/vuex/addUser";
export default createStore({
    modules: {
        user, addUser
    }
})