<template>
  <div class="jumbotroneTicket py-5">
    <div class="container text-center">
      <h2><strong>TICKETS</strong></h2>
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
          title: "One Day Access",
          subtitle:"FREE",
          featured:false,
          packageDescription:["One Day Access","Cofee Break","Lunch(International)","Document Sheet","50USD Voucher For Next Event"]
        }, 
        {
          title: "Four Day Access",
          subtitle:"750.00 USD",
          featured:false,
          packageDescription:["Four Day Access","Cofee Break","Lunch(International)","Document Sheet","100USD Voucher For Next Event"]
        },
        {
          title: "Two Day Access",
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