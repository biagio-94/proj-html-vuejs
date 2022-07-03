<template>
    <div class="jumbotroneCountdown py-5">
      <div class="container text-center">
        <TheTimer></TheTimer>
        <h3 class="mt-3 py-4">SUBSRIBE FOR UPDATE</h3>
        <div class="input-group mb-3 w-50 m-auto py-3">
          <input
            type="text"
            class="form-control"
            placeholder="Please fill your email"
            aria-label="Please fill your email"
            aria-describedby="button-addon2"
          />
          <button class="btn btn-danger ms-2" type="button" id="button-addon2">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
</template>

    <script>
import TheTimer from './TheTimer.vue';
    export default {
    components: { TheTimer }
}
    </script>