<template>
  <div>
    <div class="card">
      <div v-if="ticketsProp.featured" class="text-center featured" >
        <span class="text-center">Featured!</span>
      </div>
      <div class="card-body">
        <div class="top-card py-3">
          <h5 class="card-title text-uppercase"><strong>{{ ticketsProp.title }}</strong> </h5>
          <h6 class="card-subtitle mb-2 text-muted">
            <strong>{{ ticketsProp.subtitle }}</strong> 
          </h6>
        </div>
        <div class="py-4">
           <div
          v-for="feature in ticketsProp.packageDescription"
          :key="feature"
          class="card-text thisclor py-2"
        >
          {{ feature }}
        </div> 
        </div>
        
      </div>
    </div>
    <a href="#" class="btn btn-primary w-100 py-2 text-white fw-bold">BOOK NOW</a>
  </div>
</template>


<script>
export default {
  props: {
    ticketsProp: Object,
  },
};
</script>
<style lang="scss" scoped>
h6 {
  color: #f62b0a !important;
}

.card {
  overflow: hidden;
  position: relative;
  width: 100%;
  border-radius: 0;
  position: relative;
}
a{
  font-size: .7rem;
}
.card-body {
  background-color: #f9f9f9;
  padding: 0 !important;
  .thiscolor{
    color:#8b8b8b!important
  }
}
.btn {
  border-radius: 0;
  background-color: #f62b0a;
}
.top-card {
  background-color: #e9e9e9;
}
.featured {
  color: white;
  position: absolute;
  right: 0;
  transform: translate(30%, 50%) rotateZ(45deg);
  width: 200px;
  background-color: #f62b0a;
  span {
    padding-left: 1.5rem;
    font-size: 0.7rem;
  }
  
}

</style>