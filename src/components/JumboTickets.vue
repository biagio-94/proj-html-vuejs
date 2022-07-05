<template>
  <div class="jumbotroneTicket py-5">
    <div class="container text-center">
      <h2 class="pb-5 mt-4"><strong>TICKETS</strong></h2>
      <div class="row">
        <div v-for="ticket in tickets" :key="ticket.title" class="col">
          <TicketsCard :tickets-prop="ticket"></TicketsCard>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import TicketsCard from "./TicketsCard.vue";
export default {
  components: { TicketsCard },
  data() {
    return {
      tickets: [
        {
          title: "One Day Pass",
          subtitle:"FREE",
          featured:false,
          packageDescription:["One Day Access","Cofee Break","Lunch(International)","Document Sheet","50USD Voucher For Next Event"]
        }, 
        {
          title: "Four Day Passes",
          subtitle:"750.00 USD",
          featured:true,
          packageDescription:["Four Day Access","Cofee Break","Lunch(International)","Document Sheet","100USD Voucher For Next Event"]
        },
        {
          title: "Two Day Passes",
          subtitle:"580.00 USD",
          featured:false,
          packageDescription:["Two Day Access","Cofee Break","Lunch(International)","Document Sheet","70USD Voucher For Next Event"]
        },
      ],
    };
  },
};
</script>
<style lang="scss">
</style>