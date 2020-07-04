<template>
  <div class="stepInfo">
    
    <PageHeader :title="timeListerHeaderStr">
      [rough idea for text here] Explain why we need all of this info – safer flights, easier for us 
      to give the best possible experience and to ease the scheduling process on our end...
      <br>
    </PageHeader>




    <v-expansion-panels
      popout
      focusable
      inset
    >
      <v-expansion-panel
        v-for="(item,i) in 5"
        :key="i"
      >
        <v-expansion-panel-header>Passenger {{i+1}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

  </div>
</template>

<script>
  import PageHeader from '@/components/PageHeader.vue'

  export default {
    name: "Step_Info",
  
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
      timeListerHeaderStr: function () {
        if (this.$store.state.nrPeople === 1) {
          return "3. Your Details"
        }
        return "3. Group Details"
      }
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