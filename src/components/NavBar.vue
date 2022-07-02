<template>
  <div class="container py-4">
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <img src="img/logo.png" alt="" />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse my-padding"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li v-for="link in navProp" :key="link" class="nav-item px-3">
              <a class="nav-link" href="#"
                ><strong>{{ link }}</strong></a
              >
            </li>
            <li class="nav-item px-3">
              <a class="nav-link" href="#"><strong>I</strong></a>
            </li>
            <li class="nav-item px-3">
              <a class="nav-link" href="#"
                ><strong><i class="fa-solid fa-magnifying-glass"></i></strong
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    navProp: Array,
  },
};
</script>

<style lang="scss" >
.my-padding{
        padding-left: 6rem;
    }
    
    
</style>