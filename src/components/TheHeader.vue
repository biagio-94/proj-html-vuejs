<template>
    <div>
        <NavBar :nav-prop="navLinks"></NavBar>
    </div>
</template>

<script>

import NavBar from "./NavBar.vue"
export default {
    components:{
    NavBar
},
data() {
    return {
        navLinks:["Home","Pages","Programs","Tickets","Speakers","Papers","Blog","ShortCodes"]
    }
},
}
</script>