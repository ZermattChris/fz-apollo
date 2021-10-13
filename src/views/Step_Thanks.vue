<template>
  <div class="stepThanks">
    
    <PageHeader :title="$t('step-thanks.title')">
      {{$t('step-thanks.description')}}
    </PageHeader>

    <p>
      {{$t('step-thanks.transactionNr')}} <strong class="primary--text">{{$store.state.orderID}}</strong> 
    </p>
    <p>
      {{$t('step-thanks.orderSentTo')}} <strong class="primary--text">{{orderEmail}}</strong>
    </p>

    <p style="background-color: #c78b48;" class="rounded-lg white--text mt-6 mb-6 mx-4 px-2 py-1">
      <v-icon color="white">
        mdi-at
      </v-icon>
      {{$t('step-thanks.checkSpamStart')}}
      <strong class="black--text">{{$t('step-thanks.checkSpamJunk')}}</strong>
      {{$t('step-thanks.checkSpamEnd')}}
    </p>

    <p class="">
      {{$t('step-thanks.ifAnyProblems')}}
      <a href="mailto:info@flyzermatt.com">info@flyzermatt.com</a>
      {{$t('step-thanks.orCallUs')}}
      <a href="tel:+41796436808">+41 79 643 6808</a>
    </p>


    <!-- <p class="text-center mt-12 mr-auto ml-auto" style="max-width:300px;">
      
      <v-text-field 
        :label="$t('step-thanks.resendTo')"
        v-model="orderEmail"
      >
      </v-text-field>
    </p>
    <p class="text-center"> 
      <v-btn
        elevation="2"
        @click="onResendEmailBtn"
      >
        {{$t('step-thanks.sendEmail')}}
      </v-btn>
    </p> -->

    <div 
      class="pt-12"
      style="width:100%; text-align:center;"
    >
      <v-btn 
        rounded 
        x-large
        color="fzPink" 
        elevation="4"
        class="white--text"
        @click="closeBookingSystem"
      >
        {{$t('nav.done')}}
        <!-- <v-icon right>{{iconNextArrow}}</v-icon> -->
      </v-btn>
    </div>

  </div>
</template>

<script>
  import PageHeader from '@/components/PageHeader.vue'

  export default {
    name: "Step_Thanks",
  
    components: {
      PageHeader
    },

    data () {
      return {
        
      }
    },

    beforeMount () {
      this.$store.dispatch('setCurrentStep', "Thanks")
      window.addEventListener('beforeunload', () => {
          this.closeBookingSystem()
      })
    },


    beforeCreate() {

    },
    
    // beforeRouteLeave (to, from, next) {
    //   alert('Thanks beforeRouteLeave()')
    //   this.resetLocalStorage()
    //   next(false)
    // },


    computed: {
      
      orderEmail: function () {
        return this.$store.state.contactEmail
      },
      
    },

    methods: {

      closeBookingSystem() {
        this.resetLocalStorage()
        window.location.href = "https://www.flyzermatt.com/"
      },

      onResendEmailBtn() {
        alert("TODO: Call Tommy API that resends this order's email, using the email entered here (allows for correction of mistaken email entry earlier).")
      },
      
      resetLocalStorage() {
        console.log('Thanks page is calling resetLocalStorage()!')
        this.$store.dispatch('setOrderId', '')
        this.$store.dispatch('setCurrentStep', 'Start')
        this.$store.dispatch('setFlightsList', '')
        this.$store.dispatch('clearNavList', '')
        this.$store.dispatch('clearTimeListDates')

        this.$store.dispatch('setWantsPhotos', '')
        this.$store.dispatch('setVideoPrice', '')

        this.$store.dispatch('setArriveDate', '')
        this.$store.dispatch('setDepartDate', '')
        this.$store.dispatch('setFlightDate', '')

        this.$store.dispatch('setFlight', '')
        this.$store.dispatch('setOrderMessage', '')

        this.$store.dispatch('clearSlotsPassengers', '')
        this.$store.dispatch('setFlightsList', '')
        
      },

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