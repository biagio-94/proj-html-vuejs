<template>
  <div class="footer-bg pt-5">
    <div class="container">
      <div class="row py-3 mb-5 px-4">
        <div class="col">
          <span class="mb-4 d-block">ABOUT US</span>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
          <div class="d-flex">
            <i class="fa-brands fa-facebook-square"></i>
            <i class="fa-brands fa-twitter-square"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-google-plus-square"></i>
            <i class="fa-brands fa-pinterest-square"></i>
            <i class="fa-brands fa-discord"></i>
          </div>
        </div>
        <div class="col">
          <span class="mb-4 d-block">RECENT NEWS</span>
          <ul class="new">
            <li  class="mb-3 "><a href="#"><span class="me-2">></span> Sed ut perspiciatis unde omnis</a></li>
            <li  class="mb-3 "><a href="#"><span class="me-2">></span> Ut enim ad minima veniam</a></li>
            <li  class="mb-3 "><a href="#"><span class="me-2">></span> Lorem ipsum dolor sit amet</a></li>
            <li  class="mb-3 "><a href="#"><span class="me-2">></span> Sed ut perspiciatis unde omnis</a></li>
            <li  class="mb-3 "><a href="#"><span class="me-2">></span> At vero eos et accusamus et</a></li>
          </ul>
        </div>
        <div class="col">
          <span class="mb-4 d-block">GET YOUR SEAT!</span>
          <p>
            Book your seat before is too late. <br />We provide ariety of ticked
            options.
          </p>
          <button class="btn btn-primary text-white rounded-0 fw-bolder" type="button" id="button-addon2">
            <span style="font-size:.7rem">CHECK OUT TICKETS!</span>
          </button>
        </div>
        <div class="col">
          <span class="mb-4 d-block">GALLERY FROM LAST YEAR</span>
          <div class="d-flex flex-wrap  my-gap">
            <div v-for="i in 12" :key="i" >
              <img :src="`img/footerIMG/footer-${i}.jpg`" alt="" width="60px"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lastfooter ">
      <div class="container px-5">
      <div class="d-flex justify-content-between px-2 py-4 align-item-center">
        <span style="color:#5b5b5b;"><i class="fa-solid fa-copyright"></i> Copyright GoodLayers, All Right Reserved</span>
        <span style="color:#757375;">About Us | Accomodation | Call For Paper | Contact Us</span>
      </div>
    </div>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.footer-bg {
  background-color: #212121;
  
}
.container {
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  i {
    margin-right: 0.8rem;
    font-size: 1.2rem;
  }
  p,
  span,i {
    font-size: 0.8rem;
    ;
  }
  ul {
    padding-inline-start: 10px;
    list-style: none;
    a {
      text-decoration: none;
      color:#767576 ;
      font-size: 0.8rem;
    }
    
    
  }
  p{
      color: #b5b8ba;
    }
  .my-gap {
    row-gap: .6rem;
    column-gap: .6rem;
  }
  .col{
    padding: 0 0.7rem !important;
    span{
      font-size: 1rem;
    }
  }
}
.lastfooter {
  background-color: #161616;
  span{
font-size: 1rem;
  }
}

</style>