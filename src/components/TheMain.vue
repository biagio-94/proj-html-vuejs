<template>
  <div>
    <JumboTroneSlider id="Pages"></JumboTroneSlider>
    <!-- agiungo section oresentazione "WHO WE ARE ECC.." -->
    <div class="container">
      <div class="row">
        <div v-for="card in simpleCardData" :key="card.title" class="col">
          <SimpleCard :card-prop="card"></SimpleCard>
        </div>
      </div>
    </div>
    <JumboCountdown ></JumboCountdown>
    <SpeakerCarousel id="Speakers"></SpeakerCarousel>
    <ProgramSection id="Programs"></ProgramSection>
    <MapsContent></MapsContent>
    <JumboLocation></JumboLocation>
    <RecentNews></RecentNews>
    <JumboTickets id="Tickets"></JumboTickets>
    <TwitterSection id="Blog"></TwitterSection>
    <SponsorsComponent></SponsorsComponent>
    <TheFooter id="ShortCodes"></TheFooter>
  </div>
</template>

<script>
import JumboTroneSlider from "./JumboTroneSlider.vue";
import JumboCountdown from "./JumboCountdown.vue";
import JumboLocation from "./JumboLocation.vue";
import JumboTickets from "./JumboTickets.vue";
import SimpleCard from "./SimpleCard.vue";
import SpeakerCarousel from "./SpeakerCarousel.vue";
import SponsorsComponent from "./SponsorsComponent.vue";
import TheFooter from "./TheFooter.vue";
import MapsContent from "./MapsContent.vue";
import RecentNews from "./RecentNews.vue";
import TwitterSection from "./TwitterSection.vue";
import ProgramSection from "./ProgramSection.vue";

export default {
  components: {
    JumboTroneSlider,
    JumboCountdown,
    JumboLocation,
    JumboTickets,
    SimpleCard,
    SpeakerCarousel,
    SponsorsComponent,
    TheFooter,
    MapsContent,
    RecentNews,
    TwitterSection,
    ProgramSection
},
  data() {
    return {
      simpleCardData: [
        {
          title: "WHO WE ARE",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum cupiditate accusantium illo, possimus.",
          link: "Learn More",
          icon:"fa-trophy"
        },
        {
          title: "WHAT WE DO",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum cupiditate accusantium illo, possimus.",
          link: "Learn More",
          icon:"fa-bolt"
        },
        {
          title: "WHY US?",
          description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum cupiditate accusantium illo, possimus.",
          link: "Learn More",
          icon:"fa-question"
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.my-border-top {
  border-top: 2px solid white;
  border-radius: 2px;
}
.jumbotroneCountdown {
  background-image: url("../assets/background/coutdown-bg1.jpg");
  background-position: center;
  background-size: inherit;
}
.jumbotroneLocation {
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
  a {
    text-decoration: none;
    color: #ff4c2f;
  }
}
.jumbotroneSlider {
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
  
}
.jumbotroneTicket {
  background-image: url("../assets/background/ticket-bg.jpg");
  background-position: center;
  background-size: inherit;
}
</style>
