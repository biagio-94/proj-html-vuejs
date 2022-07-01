<template>
  <div>
    <!-- Inserisco il Jumbo slider -->
    <div class="jumbotroneSlider py-5">
      <div class="container text-center py-5">
        <h2><strong>CONFERENCE ON</strong></h2>
        <h1><strong>SOCIAL NETWORKS</strong></h1>
        <div class="w-50 m-auto my-border-top">
          <div class="row py-3">
            <div class="col-3"><span>23-26 MAY 2019</span></div>
            <div class="col"><span>/</span></div>
            <div class="col-3"><span>SANS FRANCISCO</span></div>
            <div class="col"><span>/</span></div>
            <div class="col-3"><span>8SPEAKERS</span></div>
          </div>
          <a class="btn orange-btn py-2 px-4 mt-4">REGISTER ONLINE</a>
        </div>
      </div>
    </div>
    <!-- Inserisco il Jumbo del countdown -->
    <div class="jumbotroneCountdown py-5">
      <div class="container text-center">
        <TheTimer></TheTimer>
        <h3>SUBSRIBE FOR UPDATE</h3>
        <div class="input-group mb-3 w-50 m-auto">
          <input
            type="text"
            class="form-control"
            placeholder="Please fill your email"
            aria-label="Please fill your email"
            aria-describedby="button-addon2"
          />
          <button class="btn btn-danger ms-2" type="button" id="button-addon2">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
    <!-- Inserisco Jumbo della Location -->
    <div class="jumbotroneLocation py-5">
      <div class="container text-center">
        <h2 class="pt-5"><strong>LOCATION</strong></h2>
        <h3 class="mt-5 pt-2 pb-1"> <strong>GD BUILDING, GRAND CONFERENCE ROOM</strong> </h3>
        <span><i class="fa-solid fa-paper-plane"></i></span
        ><span>GD Building, River Mail, New York, USA 8879</span>
        <div class="pt-3 pb-5">
          <a  href="#">Check for accomodation here</a>
        </div>
        <div class="mywidth m-auto my-border-top">
          <div class="row py-1">
            <div class="col">
              <span
                ><i class="fa-solid fa-phone"
                  ><span class="ms-2">+1-112-222-3344</span></i
                ></span
              >
            </div>

            <div class="col">
              <span
                ><i class="fa-solid fa-envelope"
                  ><span class="ms-2">Contact@TheKeynoteTheme.com</span></i
                ></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheTimer from "./TheTimer.vue";
export default {
  components: { TheTimer },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.my-border-top {
  border-top: 4px solid white;
  border-radius: 4px;
}
.jumbotroneCountdown {
  background-image: url("../assets/background/coutdown-bg1.jpg");
  background-position: center;
  background-size: cover;
}
.jumbotroneLocation {
  color: white;
  background-image: url("../assets/background/location-bg.jpg");
  background-position: center;
  background-size: cover;
  .mywidth {
    width: 30%;
  }
  i {
    span {
      font-weight: bold;
      font-size: 0.65rem;
    }
  }
  a{
    text-decoration: none;
    color: #ff4c2f;
  }
}
.jumbotroneSlider {
  color: white;
  background-image: url("../assets/background/slider-1-bg.jpg");
  background-position: center;
  background-size: cover;
  h1 {
    font-size: 6rem;
  }
  h2 {
    font-size: 4rem;
  }
  span {
    font-weight: bold;
  }
  .orange-btn {
    background-color: #f62b0a;
    color: white;
  }
}
.jumbotroneTicket {
  background-image: url("../assets/background/ticket-bg.jpg");
  background-position: center;
  background-size: cover;
}
</style>
