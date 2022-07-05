<template>
  <div class="container py-5">
    <div class="d-flex justify-content-between px-3">
      <h2>SPEAKERS</h2>
      <div>
        <button class="btn btn-primary text-white me-1" @click="counterBack()">
          &#60;
        </button>
        <button
          class="btn btn-primary text-white me-3"
          @click="counterForward()"
        >
          >
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="speaker in printArray" :key="speaker.img">
        <div class="card py-5" style="width: 18rem">
          <div class="card-body">
            <div class="card-overlay p-relative">
              <img :src="`img/speakers/${speaker.img}`" alt="" />
              <div class="overlay">
                <div style="height:100%" class="d-flex justify-content-center align-items-center">
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-linkedin-in"></i>
                </div>
              </div>
            </div>

            <h6 class="card-title">
              <strong>{{ speaker.description.name }}</strong>
            </h6>

            <p class="card-text">
              <strong>{{ speaker.description.job }}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      counter: 0,
      printArray: [],
      speakerData: [
        {
          img: "speaker-6.jpg",
          description: {
            name: "PATRICK SPANCER",
            job: "  S&P Analizer",
          },
        },
        {
          img: "speaker-5.jpg",
          description: {
            name: "JANET JONES",
            job: "New York Post's GM",
          },
        },
        {
          img: "speaker-4.jpg",
          description: {
            name: "MICHAEL DOVER",
            job: "Starbuck's CEO",
          },
        },
        {
          img: "speaker-3.jpg",
          description: {
            name: "ANGELINA HOLY",
            job: "Maxii's Manager",
          },
        },
        {
          img: "speaker-2.jpg",
          description: {
            name: "SILVIA DE VITO",
            job: "ESTETISTA",
          },
        },
        {
          img: "speaker-1.jpg",
          description: {
            name: "BIAGIO FERRO",
            job: "CHIMICO",
          },
        },
        {
          img: "speaker-7.jpg",
          description: {
            name: "PASQUALE DE FELICE",
            job: "UROLOGO",
          },
        },
        {
          img: "speaker-8.jpg",
          description: {
            name: "UMBERTO DI LORENZO",
            job: "FERROVIERE",
          },
        },
      ],
    };
  },
  mounted() {
    for (let i = 0; i < 4; i++) {
      this.printArray.push(this.speakerData[i]);
    }
  },
  methods: {
    loadarray() {
      this.printArray = [];
      let value = this.counter;
      for (let i = value; i < value + 4; i++) {
        this.printArray.push(this.speakerData[i]);
      }
    },
    counterForward() {
      this.counter++;
      if (this.counter >= 5) {
        this.counter = 0;
      }
      this.loadarray();
      console.log(this.counter);
    },
    counterBack() {
      this.counter--;
      if (this.counter < 0) {
        this.counter = 4;
      }
      this.loadarray();
      console.log(this.counter);
    },
  },
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
}
.container {
  color: black;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: var(--bs-primary);
}
.card-overlay {
  i{
    color: white;
    opacity: 1;
  }
  position: relative;
  &:hover .overlay {
    opacity: 0.5;
  }
}
</style>