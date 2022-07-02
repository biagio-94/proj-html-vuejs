<template>
  <div class="container">
    <div class="d-flex justify-content-between px-3">
      <h2>SPEAKERS</h2>
      <div>
        <button class="btn "> &#60; </button>
        <button class="btn ">></button>
      </div>
    </div>
    <div class="row">
      <div class="col" v-for="speaker in speakerData" :key="speaker.img">
        <div class="card py-5" style="width: 18rem">
          <div class="card-body">
            <img :src="`img/speakers/${speaker.img}`" alt="">
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
  computed:{
    filterArray(value){
      let printArray=[];
      /* if(value>=this.speakerData.length-1){

      } */
      for(let i=value;i<value+4;i++){
        printArray.push(this.speakerData[i])
      }
      return printArray
    }
  }
};
</script>
<style lang="scss" scoped>
img{
  width: 100%;
}
.container{
  color: black;
}
  
</style>