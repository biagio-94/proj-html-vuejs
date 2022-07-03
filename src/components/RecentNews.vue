<template>
  <div class="py-4">
    <div class="container">
      <div class="d-flex justify-content-between">
        <h2>RECENT NEWS</h2>
        <span>Read All News</span>
      </div>
      <div class="row">
        <div class="col" v-for="speaker in newses" :key="speaker.img">
          <div class="card py-5" style="width: 18rem">
            <div class="card-body">
              <img :src="`img/speakers/${speaker.img}`" alt="" />

              <p class="card-text">
                <strong>{{ speaker.description.job }}</strong>
              </p>
              <h6 class="card-title">
                <strong>{{ speaker.description.name }}</strong>
              </h6>

              <p class="card-text">
                <strong>{{ speaker.description.theme }}</strong>
              </p>
              <a href="#" class="card-link"><strong>{{speaker.description.link}}</strong> </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      newses: [
        {
          img: "speaker-6.jpg",
          description: {
            name: "PATRICK SPANCER",
            job: "  S&P Analizer",
            theme:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusamus repudiandae cumque amet, enim tempore sunt. Fugiat, expedita esse sequi pariatur nulla repudiand...",
              link:"Read More"
           
          },
        },
        {
          img: "speaker-5.jpg",
          description: {
            name: "JANET JONES",
            job: "New York Post's GM",
            theme:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusamus repudiandae cumque amet, enim tempore sunt. Fugiat, expedita esse sequi pariatur nulla repudiand...",
              link:"Read More"
          },
        },
        {
          img: "speaker-4.jpg",
          description: {
            name: "MICHAEL DOVER",
            job: "Starbuck's CEO",
            theme:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusamus repudiandae cumque amet, enim tempore sunt. Fugiat, expedita esse sequi pariatur nulla repudiand...",
              link:"Read More"
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  color: black;
  .card {
    width: 100% !important;
  }
  img {
    width: 100%;
  }
}
</style>