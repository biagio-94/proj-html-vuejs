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
              <div class="mycard-overlay">
                <img :src="`img/newsImg/news${i+1}.jpg`" alt="" />
                
                <div class="myoverlay text-center "><i  class="fa-solid fa-bullhorn"></i><span class="align-middle">STICKY POST</span></div>
              </div>
             

              <p class="card-text mt-4 pb-2">
                <strong>{{ speaker.description.job }}</strong>
              </p>
              <h5 class="card-title">
                <strong>{{ speaker.description.name }}</strong>
              </h5>

              <p class="card-text pb-3">
                <strong>{{ speaker.description.theme }}</strong>
              </p>
              <a href="#" class="card-link ">{{speaker.description.link}} </a>
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
.myoverlay {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40%;
  opacity: 0;
  background-color: #232323;
  color: white;
  i,span{
    font-size: .7rem;
    color: white;
    padding: .5rem .2rem;
  }
}
.mycard-overlay {
 
  position: relative;
  &:hover .myoverlay {
    opacity: 1;
  }
  
  
}
</style>