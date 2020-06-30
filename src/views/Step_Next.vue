<template>
  <div class="stepInfo">
    
    <PageHeader title="4. Next Steps">
      General information you should know about before finalizing your booking...

      <br><br>
      <ul>
        <li>• Cancellations</li>
        <ul>
            <li>◦ Groups of more than 8x…?</li>
            <li>◦ 24 hours after booking made, no fees</li>
            <li>◦ 48 hours before flight date, 3% cancellation fee (CC charge)</li>
            <li>◦ 24 hours 50%</li>
            <li>◦ less than 24 hours, full price (contact your travel insurance company for possible refund).</li>
        </ul>
        <li>• Able to run 15 meters for take off (little start video or animation?)</li>
        <ul>
            <li>◦ We can have multiple videos, for chosen launch and time of year + day.</li>
        </ul>
        <li>• Link to full T&amp;Cs (new browser tab)</li>
      </ul>
      
    </PageHeader>

  </div>
</template>

<script>
  import PageHeader from '@/components/PageHeader.vue'

  export default {
    name: "Step_Next",
  
    components: {
      PageHeader
    },

    data () {
      return {
        
      }
    },

    created() {


    },


    computed: {
      
      userFlightDate: function () {
        return this.$store.state.flightDate
      },
      usersGroupSize: function () {
        return this.$store.state.nrPeople
      },
      
    },

    methods: {
      setUserDate: function (dateStr) {
        //console.log(dateStr)
        this.userTimeSlot = dateStr
        return dateStr
      }
    },
  }

</script>

<style scoped>
.steps-controls {
  position: absolute;
  left:0; right: 0;
  text-align: center;
  margin: 0 auto;
}


</style>