<template>
  <div class="timeSlot">
    
    <PageHeader title="2. Choose a Flight Time...">
      The time of day can make a big difference to what type of 
      flight you get &mdash; there are many variables, including
      which flight, time of year, confidence and your fitness level.

      <br><br>

      Check our Guidelines for details: <a href="#TODO">Flight Guidelines</a>
    </PageHeader>


    <div id="steps-controls" class="">
      <TimeLister 
        class="d-none d-md-inline-block"
        dense
      />
      <TimeLister/>
      <TimeLister
        class="d-none d-sm-inline-block"
        dense
      />
    </div>

    <div class="vSpacerForAbsolute"></div>

  </div>
</template>

<script>

  import PageHeader from '@/components/PageHeader.vue'
  import TimeLister from '@/components/TimeLister.vue'

  export default {
    name: "TimeSlot",
  
    components: {
      PageHeader,
      TimeLister,
    },



  }
</script>

<style scoped>
#steps-controls {
  position: absolute;
  left:0; right: 0;
  text-align: center;
  /* background-color: rgb(194, 194, 194); */
}
.vSpacerForAbsolute {
  width: 100%;
  height: 424px;
}
</style>