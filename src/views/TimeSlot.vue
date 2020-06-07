<template>
  <div class="timeSlot">
    
    <PageHeader title="2. Choose a Flight Time...">
      The time of day can make a big difference to what type of 
      flight you get &mdash; there are many variables, including
      which flight, time of year, confidence and your fitness level.

      <br><br>

      Check our Guidelines for details: <a href="#TODO">Flight Guidelines</a>
    </PageHeader>

  </div>
</template>

<script>

  import PageHeader from '@/components/PageHeader.vue'

  export default {
    name: "TimeSlot",
  
    components: {
      PageHeader,
    },
  }
</script>

<style scoped>

</style>