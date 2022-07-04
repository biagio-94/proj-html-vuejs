<template>
  <div class="py-5">
    <div class="container">
      <div class="d-flex justify-content-between ">
        <h2>PROGRAM</h2>
        <div class="flex-grow-1 ps-4 ms-5">
          <span
            >This conference run through 4 days from 23-26 May 2016. <br />We
            also provide free lunch and cofee break in each day.</span
          >
        </div>
        <span class="orangespan">View Full Program</span>
      </div>
      <div class="row">
        <div
          v-for="(day, i) in daysProgram"
          :key="day + i"
          class="col-2 days-class"
          @click="changeDay(i)"
        >
          <h4>DAY {{ i + 1 }}</h4>
          <span>2{{ i + 2 }} May 2016</span>
        </div>
        <div class="col-2 days-class"></div>
      </div>
      <div class="">
        <div class="my-card d-flex py-5 px-5">
          <div class="left">
            <h5>{{ currentDay.data_time }}</h5>
            <h5>{{ currentDay.room }}</h5>
            <h5>{{ currentDay.speaker }}</h5>
          </div>
          <div class="right">
            <h2>{{ currentDay.title }}</h2>
            <h6>{{ currentDay.description }}</h6>
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
      currentDay: {},
      daysProgram: [
        {
          data_time: "09:00-10:30",
          room: "Room A",
          speaker: "Laurence Francis",
          speaker_img: "speaker-1-150x150.jpg",
          title: "WELCOMING AND INTRODUCTION",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quasi cumque at voluptatem totam accusamus aperiam itaque? Vitae, illo beatae. Dolores excepturi corrupti laudantium reprehenderit, commodi repellat veritatis iure ex.",
        },
        {
          data_time: "10:00-11:30",
          room: "Room B",
          speaker: "Patrick Spencer",
          speaker_img: "speaker-2-150x150.jpg",
          title: "SOCIAL NETWORK BASIS",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quasi cumque at voluptatem totam accusamus aperiam itaque? Vitae, illo beatae. Dolores excepturi corrupti laudantium reprehenderit, commodi repellat veritatis iure ex.",
        },
        {
          data_time: "11:30-13:00",
          room: "Room C",
          speaker: "Michael Dover",
          speaker_img: "speaker-3-150x150.jpg",
          title: "FULL IMMERSION INSTAGRAM",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quasi cumque at voluptatem totam accusamus aperiam itaque? Vitae, illo beatae. Dolores excepturi corrupti laudantium reprehenderit, commodi repellat veritatis iure ex.",
        },
        {
          data_time: "09:30-11:00",
          room: "Room AF",
          speaker: "Angelina Holy ",
          speaker_img: "speaker-4-150x150.jpg",
          title: "TIK TOK POLICIES",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quasi cumque at voluptatem totam accusamus aperiam itaque? Vitae, illo beatae. Dolores excepturi corrupti laudantium reprehenderit, commodi repellat veritatis iure ex.",
        },
        {
          data_time: "09:00-10:30",
          room: "Room BA",
          speaker: "Biagio Ferro",
          speaker_img: "speaker-5-150x150.jpg",
          title: "NEUTRINI PROPAGATION IN SOIL",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quasi cumque at voluptatem totam accusamus aperiam itaque? Vitae, illo beatae. Dolores excepturi corrupti laudantium reprehenderit, commodi repellat veritatis iure ex.",
        },
      ],
    };
  },
  mounted: {
    loadcurrentday() {
      this.currentDay = this.daysProgram[0];
    },
  },
  methods: {
    changeDay(indice) {
      this.currentDay = this.daysProgram[indice];
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  color: black;
  .row{
    color: white;
  }
}
h2 {
  font-size: 2.5rem;
}
.days-class{
    background-color:#f62b0a ;
    border-right: 1px solid lightgray;
}
.my-card {
  background-color: #f7f7f7;
  width: 100%;
.left{
    width: 30%;
}
  
}
</style>