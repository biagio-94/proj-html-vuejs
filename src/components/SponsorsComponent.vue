<template>
  <div class="background">
    <div class="container py-5 text-center">
      <div class="w-25 m-auto">
        <h2><strong>Sponsors</strong></h2>
        <h6>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Elite!
        </h6>
      </div>
      <div class="row">
        <div v-for="sponsor in sponsorImg" :key="sponsor" class="col">
          <img :src="sponsor" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sponsorImg: [
        "img/banner/banner-1.jpg",
        "img/banner/banner-2.jpg",
        "img/banner/banner-3.jpg",
        "img/banner/banner-4.jpg",
        "img/banner/banner-5.jpg",
        "img/banner/banner-6.jpg",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
    .background{
        
        background-color: #f6f6f6;
    }
    .container{
      color: black;
        h6{
            color: #9998b8;
        }
    }
</style>