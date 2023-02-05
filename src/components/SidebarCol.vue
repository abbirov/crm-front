<template>
    <!--Sideber start -->
    <div class="col-3 layer-bg sidebar p-0 ">
        <h5 class=" text-center mt-4" type="button" data-bs-toggle="offcanvas">
            <router-link class="rt" to="/">Inc</router-link>
        </h5>

        <div class="offcanvas offcanvas-start layer-bg" data-bs-scroll="true" data-bs-backdrop="false"
             tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title mt-1 ms-2" id="offcanvasScrollingLabel">
                    <router-link class="rt" to="/">Kadirov Inc</router-link>
                </h5>
            </div>
            <img src="@/assets/icon/sb-devider.png" class="t-devider" alt="devider">
            <!-- Offcanvas body start -->
            <div class="offcanvas-body pt-0 ps-0">
                <div class="row">
                    <div class="col-4">
                        <img src="@/assets/avatar/ameliya.svg" class="rounded-circle ms-3 ava" alt="avatar">
                    </div>
                    <div class="col-8 mt-4 ps-0">
                        <div class="col mt-1 fw-bold fs-5 poppins">Ameliya</div>
                        <div class="col mt-1 poppins email"> ameliya@gmail.com</div>
                    </div>
                </div>
                <div class="col mt-4 ms-3">
                    <img src="@/assets/icon/user.svg" class="ms-3 icon" alt="contact">
                    <span class="email poppins ms-3"> Foydalanuvchi qo'shish</span>
                </div>
                <div class="col mt-4 ms-3 ">
                    <img src="@/assets/icon/home.svg" class="ms-3 home" alt="home">
                    <span class="email poppins ms-4">Kompaniyalar</span>
                </div>
                <div class="col mt-4 ms-3">
                    <img src="@/assets/icon/clients.svg" class="ms-3 icon"  alt="clients">
                    <span class="email poppins ms-3"> Mijozlar</span>
                </div>
                <img src="@/assets/icon/sb-devider.png" class="t-devider mt-3" alt="devider">
                <div class="col mt-4 ms-3">
                    <img src="@/assets/icon/settings.svg" class="ms-3 icon" alt="settings">
                    <router-link to="/settings" class="email poppins ms-3 rt"> Sozlamalar</router-link>
                </div>
                <div class="mt-4 ms-3 mt-menu"  type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                    <img src="@/assets/icon/menu.svg" class="ms-3 icon" alt="settings">
                    <span class="email poppins ms-3"> Menyuni yopish</span>
                </div>
            </div>
        </div>
        <!-- Offcanvas body end -->
        <div class="col mt-4">
            <img src="@/assets/avatar/ameliya.svg" class="rounded-circle ms-3 ava" alt="avatar">
        </div>
        <div class="col mt-4 ms-3">
            <img src="@/assets/icon/user.svg" class="ms-3 icon" alt="contact">
        </div>
        <div class="col mt-4 ms-3 ">
            <img src="@/assets/icon/home.svg" class="ms-3 home" alt="home">
        </div>
        <div class="col mt-4 ms-3">
            <img src="@/assets/icon/clients.svg" class="ms-3 icon"  alt="clients">
        </div>
        <img src="@/assets/icon/sb-devider.png" id="sb-devider" alt="devider">
        <div class="col mt-4 ms-3">
            <router-link to="/settings">
                <img src="@/assets/icon/settings.svg" class="ms-3 icon" alt="clients">
            </router-link>
        </div>
        <div class="col mt-4 ms-3" type="button" data-bs-toggle="offcanvas"
             data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">
            <img src="@/assets/icon/menu.svg" class="ms-3 icon menu" alt="menu">
        </div>
    </div>
    <!--Sideber end -->
</template>

<script>
export default {
    name: "SidebarCol"
}
</script>

<style scoped>
.layer-bg {
    background-color: white;
    box-shadow: 6px 0 18px rgba(0, 0, 0, 0.06);

}
.email {
    font-family: Poppins, sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    /* identical to box height */

    letter-spacing: 0.01em;

    /* Secondary/Table gray */

    color: #707683;

}
.sidebar {
    width: 95px;
    height: 100%;
}
#offcanvasScrolling {
    width: 300px;
}
.ava {
    width: 60px;
    height: 60px;
    margin-top:25px ;
    margin-bottom: 25px ;
}
.icon {
    width:25px;
    height: 25px;
}
.home {
    width: 22px;
    height: 22px;
}
#sb-devider {
    width: 100px;
    height: 1px;
    left: 0;
    right: 0;
}
.t-devider{
    width: 100%;
    height: 1px;
}
.menu {
    margin-top: 230px;
    margin-bottom: 30px;
}
.mt-menu {
    margin-top: 254px  !important;
}
.rt{
    text-decoration: none;
}
</style>