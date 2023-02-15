<template>
    <!-- Filter col start -->
    <div class="col mt-2">
        <div class="row">
            <div class="col poppins ps-0">
                <span class="clr-gray">Mijoz:</span>
                <span class="dropdown">
                    <a class="btn text-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                       data-bs-toggle="dropdown" aria-expanded="false">
                        Hammasi
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item" >Action</a></li>
                        <li><a class="dropdown-item" >Another action</a></li>
                        <li><a class="dropdown-item" >Something else here</a></li>
                    </ul>
                </span>
            </div>
        </div>
    </div>
    <!-- Filter col end -->
</template>

<script>
export default {
    name: "FilterCol",

}
</script>

<style scoped>
.poppins {
    font-family: Poppins, sans-serif;
}
.clr-gray {
    color: #707683;
}
a {
    border: none;
}
</style>