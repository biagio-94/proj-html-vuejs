<template>
  <div class="card py-5" style="width: 18rem">
  <div class="d-flex">
    <i class="fa-solid" :class="cardProp.icon"></i>
    <div class="card-body">
      <h6 class="card-title"><strong>{{cardProp.title}}</strong></h6>

      <p class="card-text">
       <strong>{{cardProp.description}}</strong> 
      </p>
      <a href="#" class="card-link"><strong>{{cardProp.link}}</strong> </a>
    </div>
  </div>
    
  </div>
</template>

<script>
export default {
    props:{
        cardProp:Object
    }
};
</script>
<style lang="scss">

.card{
    i{
        font-size: 1.3rem;
        color:#bababa;
        padding: var(--bs-card-spacer-y) var(--bs-card-spacer-x);
    }
    color: black;
    border-color: white!important;
    a {
    text-decoration: none;
    color: var(--bs-primary);
    font-style: italic;
  }
  p{
    color:#979ca9;
    font-size: .9rem;
    font-style: italic;
  }
}
    
</style>