<template>
  <div>
    <div class="d-flex justify-content-center mt-3 py-4 m-auto">
      <div
        class="
          d-flex
          flex-column
          align-items-center
          justify-content-center
          countdown
        "
        @click="countDown()"
      >
        <span>{{ days }}</span> <span class="textspan">DAYS</span>
      </div>
      <div
        class="
          d-flex
          flex-column
          align-items-center
          justify-content-center
          countdown
        "
      >
        <span>{{ hours }}</span
        ><span class="textspan">HOURS</span>
      </div>
      <div
        class="
          d-flex
          flex-column
          align-items-center
          justify-content-center
          countdown
        "
      >
        <span>{{ minutes }}</span
        ><span class="textspan">MINS</span>
      </div>
      <div
        class="
          d-flex
          flex-column
          align-items-center
          justify-content-center
          countdown
        "
      >
        <span>{{ seconds }}</span
        ><span class="textspan">SECS</span>
      </div>
    </div>
  </div>
</template>



<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      days: "",
      hours: "",
      minutes: "",
      seconds: "",
    };
  },
  methods: {
    countDown() {
      let countDown = dayjs("oct 26, 2031 16:13:42");

      setInterval(() => {
        let fff = dayjs();

        let differencTime = countDown.diff(fff);

        this.days = Math.floor(differencTime / (1000 * 60 * 60 * 24));
        this.hours = Math.floor(
          (differencTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        this.minutes = Math.floor(
          (differencTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        this.seconds = Math.floor((differencTime % (1000 * 60)) / 1000);
      }, 500);
    },
  },
  mounted() {
    this.countDown();
  },
};
</script>
<style lang="scss" scoped>
.countdown {
    padding: .5rem;
  margin-right: 1rem;
  height: 150px;
  aspect-ratio: 1;
  background-color: black;
  opacity: 0.6;
  border-radius: 5px;
}
span {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem!important;
  font-weight: bold;
}
.textspan{
    font-size: .8rem!important;
}
</style>
