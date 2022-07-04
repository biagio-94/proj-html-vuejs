<template>
  <div class="py-5">
    <div class="container">
      <div class="d-flex justify-content-between py-5">
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
          class="col-2 days-class py-3 ps-4"
          :class="day.classDark ? 'darker-color' : ``" 
          @click="changeDay(i)"
        >
          <h6>DAY {{ i + 1 }}</h6>
          <span>2{{ i + 2 }} May 2016</span>
        </div>
        <div class="col-2 days-class"></div>
      </div>
      <div class="">
        <div class="my-card d-flex py-5 px-5">
          <div class="left">
            <h6>
              <i class="me-3 fa-solid fa-clock"></i>{{ currentDay.data_time }}
            </h6>
            <h6>
              <i class="me-3 fa-solid fa-paper-plane"></i>{{ currentDay.room }}
            </h6>
            <h6>
              <i class="me-3 fa-solid fa-user"></i>{{ currentDay.speaker }}
            </h6>
          </div>
          <div class="right ps-5">
            <h5>{{ currentDay.title }}</h5>
            <h6 class="py-4">{{ currentDay.description }}</h6>
            <img :src="`img/speakers/${currentDay.speaker_img}`" alt="" />
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
      currentDay: {
        data_time: "09:00-10:30",
        room: "Room A",
        speaker: "Laurence Francis",
        speaker_img: "speaker-1-150x150.jpg",
        title: "WELCOMING AND INTRODUCTION",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quasi cumque at voluptatem totam accusamus aperiam itaque? Vitae, illo beatae. Dolores excepturi corrupti laudantium reprehenderit, commodi repellat veritatis iure ex.",
      },
      daysProgram: [
        {
          classDark: true,
          data_time: "09:00-10:30",
          room: "Room A",
          speaker: "Laurence Francis",
          speaker_img: "speaker-1-150x150.jpg",
          title: "WELCOMING AND INTRODUCTION",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quasi cumque at voluptatem totam accusamus aperiam itaque? Vitae, illo beatae. Dolores excepturi corrupti laudantium reprehenderit, commodi repellat veritatis iure ex.",
        },
        {
          classDark: false,
          data_time: "10:00-11:30",
          room: "Room B",
          speaker: "Patrick Spencer",
          speaker_img: "speaker-2-150x150.jpg",
          title: "SOCIAL NETWORK BASIS",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quasi cumque at voluptatem totam accusamus aperiam itaque? Vitae, illo beatae. Dolores excepturi corrupti laudantium reprehenderit, commodi repellat veritatis iure ex.",
        },
        {
          classDark: false,
          data_time: "11:30-13:00",
          room: "Room C",
          speaker: "Michael Dover",
          speaker_img: "speaker-3-150x150.jpg",
          title: "FULL IMMERSION INSTAGRAM",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quasi cumque at voluptatem totam accusamus aperiam itaque? Vitae, illo beatae. Dolores excepturi corrupti laudantium reprehenderit, commodi repellat veritatis iure ex.",
        },
        {
          classDark: false,
          data_time: "09:30-11:00",
          room: "Room AF",
          speaker: "Angelina Holy ",
          speaker_img: "speaker-4-150x150.jpg",
          title: "TIK TOK POLICIES",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quasi cumque at voluptatem totam accusamus aperiam itaque? Vitae, illo beatae. Dolores excepturi corrupti laudantium reprehenderit, commodi repellat veritatis iure ex.",
        },
        {
          classDark: false,
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

  methods: {
    changeDay(indice) {
      this.currentDay = this.daysProgram[indice];
      for (let i = 0; i < this.daysProgram.length; i++) {
        if (i != indice) {
          this.daysProgram[i].classDark = false;
        } else {
          this.daysProgram[i].classDark = true;
        }
        console.log(this.daysProgram[i].classDark);
      }
      
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  color: black;
  .row {
    color: white;
    padding: 0 0.72rem;
  }
  .darker-color {
    background-color: #c72b11 !important;
  }
}
h2 {
  font-size: 2.5rem;
}
.days-class {
  background-color: #f62b0a;
  border-right: 1px solid #c72b11;
}
.my-card {
  background-color: #f7f7f7;
  width: 100%;
  .left {
    width: 30%;
  }
}
</style>