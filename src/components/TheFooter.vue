<template>
  <div class="footer-bg pt-5">
    <div class="container">
      <div class="row">
        <div class="col">
          <h6>ABOUT US</h6>
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
          <h6>RECENT NEWS</h6>
          <ul>
            <li><a href="#">> Sed ut perspiciatis unde omnis</a></li>
            <li><a href="#">> Ut enim ad minima veniam</a></li>
            <li><a href="#">> Lorem ipsum dolor sit amet</a></li>
            <li><a href="#">> Sed ut perspiciatis unde omnis</a></li>
            <li><a href="#">> At vero eos et accusamus et</a></li>
          </ul>
        </div>
        <div class="col">
          <h6>GET YOUR SEAT!</h6>
          <p>
            Book your seat before is too late. <br />We provide ariety of ticked
            options.
          </p>
          <button class="btn btn-danger" type="button" id="button-addon2">
            <span>CHECK OUT TICKETS!</span>
          </button>
        </div>
        <div class="col">
          <h6>GALLERY FROM LAST YEAR</h6>
          <div class="row row-cols-4 my-gap">
            <div v-for="i in 12" :key="i" class="col">
              <img :src="`img/footerIMG/footer-${i}.jpg`" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lastfooter">
      <div class="container ">
      <div class="d-flex justify-content-between py-4 align-item-center">
        <span><i class="fa-solid fa-copyright"></i> Copyright GoodLayers, All Right Reserved</span>
        <span>About Us | Accomodation | Call For Paper | Contact Us</span>
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
      color: white;
      font-size: 0.8rem;
    }
  }
  img {
    width: 100%;
  }
  .my-gap {
    row-gap: 1rem;
  }
}
.lastfooter {
  background-color: #161616;
}
</style>