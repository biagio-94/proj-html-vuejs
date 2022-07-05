<template>
    <div class="jumbotroneCountdown py-5">
      <div class="container text-center">
        <TheTimer></TheTimer>
        <h4 class="mt-3 py-4 text-black fw-semibold">SUBSRIBE FOR UPDATES</h4>
        <div class="input-group mb-3 w-50 m-auto py-3">
          <input
            type="text"
            class="form-control"
            placeholder="Please fill your email"
            aria-label="Please fill your email"
            aria-describedby="button-addon2"
          />
          <button class="btn btn-primary ms-2 py-2 px-4 rounded-0" type="button" id="button-addon2">
            <span class="text-white fw-semibold">SUBSCRIBE</span>
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