<template>
  <div>
   
    <GmapMap :options="{scrollwheel: true}" :center="center" :zoom="15.5" style="width: 100%; height: 600px" googleapikey="AIzaSyBGMn1KYiSzb002Sx58nSPkTe0oz29ZCu0"/>
  </div>
</template>


<script>
export default {
  data() {
    return {
      center: { lat: 51.507351, lng: -0.127758 },
      
    };
  },
  methods: {
    
  },
};
</script>