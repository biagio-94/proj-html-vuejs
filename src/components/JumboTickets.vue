<template>
    <div class="jumbotroneTicket py-5">
      <div class="container text-center">
        <h2><strong>TICKETS</strong></h2>
        <TicketsCard></TicketsCard>
      </div>
    </div>
</template>
<script>
import TicketsCard from './TicketsCard.vue';
export default {
    components: { TicketsCard }
}
</script>