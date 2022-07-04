<template>
  <div class="py-4">
    <div class="container">
      <div class="d-flex justify-content-between px-3">
        <h2>RECENT NEWS</h2>
        <span class="orangespan">Read All News</span>
      </div>
      <div class="row">
        <div class="col" v-for="(speaker,i) in newses" :key="speaker.img">
          <div class="card py-5" style="width: 18rem">
            <div class="card-body">
              <img :src="`img/newsImg/news${i+1}.jpg`" alt="" />

              <p class="card-text mt-4 pb-2">
                <strong>{{ speaker.description.job }}</strong>
              </p>
              <h5 class="card-title">
                <strong>{{ speaker.description.name }}</strong>
              </h5>

              <p class="card-text pb-3">
                <strong>{{ speaker.description.theme }}</strong>
              </p>
              <a href="#" class="card-link">{{speaker.description.link}} </a>
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
            name: "SEDIAL EIUSMOD TEMPOR",
            job: "03 Dec 2013  /  0 Comments",
            theme:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusamus repudiandae cumque amet, enim tempore sunt. Fugiat, expedita esse sequi pariatur nulla repudiand...",
              link:"Read More"
           
          },
        },
        {
          img: "speaker-5.jpg",
          description: {
            name: "DONEC LUCTUS IMPERDIET",
            job: "03 Dec 2013  /  2 Comments",
            theme:
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusamus repudiandae cumque amet, enim tempore sunt. Fugiat, expedita esse sequi pariatur nulla repudiand...",
              link:"Read More"
          },
        },
        {
          img: "speaker-4.jpg",
          description: {
            name: "MAGNA PARS STUDIORUM",
            job: "03 Dec 2013  /  2 Comments",
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
  p{
    margin: 0;
    font-size: 1rem;
  }
  a{
    font-style: italic;
  }
  .orangespan{
    color: #f62b0a;
  }
}
</style>