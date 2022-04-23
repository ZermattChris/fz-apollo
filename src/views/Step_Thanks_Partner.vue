<template>
  <div class="stepThanks">
    
    <PageHeader :title="$t('step-thanks.title')">
      {{$t('step-thanks.description')}}
      Partner Thanks page goes here. TODO.
    </PageHeader>

    <div style="max-width:600px; margin:0 auto;">

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

      <p class="mt-12 primary--text">
        {{$t('step-thanks.resendEmailIfNeeded')}}
      </p>

      <div class="text-center mr-auto ml-auto" style="max-width:400px;">

        <!-- Enter email to resend order to.  -->
        <v-text-field 
          :label="$t('step-thanks.resendTo')"
          v-model="resendEmail"
          :hint="resendEmailHint"
          persistent-hint
          class="float-left pr-6"
          style="width:75%;"
        >
        </v-text-field>
        <v-btn
          elevation="2"
          @click="onResendEmailBtn"
          class="float-left mt-2"
        >
          {{$t('step-thanks.sendEmail')}}
        </v-btn>
      </div>

      

      <div class="pt-12 float-end">
        {{$t('step-thanks.ifAnyProblems')}}
        <a href="mailto:info@flyzermatt.com">info@flyzermatt.com</a>
        {{$t('step-thanks.orCallUs')}}
        <a href="tel:+41796436808">+41 79 643 6808</a>
      </div>




      <div 
        class="pt-12 float-end"
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

  </div>
</template>

<script>
  import PageHeader from '@/components/PageHeader.vue'

  import axios from "axios"

  export default {
    name: "Step_Thanks_Partner",
  
    components: {
      PageHeader
    },

    data () {
      return {
        
        resendEmail: '',
        // resendEmailHint: this.$t('step-thanks.resendToStr')

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

      resendEmailHint: function () {
        return this.$t('step-thanks.resendToStr')
      },
      
    },

    methods: {

      closeBookingSystem() {
        this.resetLocalStorage()
        window.location.href = "https://www.flyzermatt.com/"
      },

      onResendEmailBtn() {
        //alert("TODO: Call Tommy API that resends this order's email, using the email entered here (allows for correction of mistaken email entry earlier).")

        // Check for valid email format.

        // Call Tommy API
        // https://bookings.simpleitsolutions.ch/api/resendCustomerConfirmation/[orderID]/[email]

        
        const orderID = this.$store.state.orderID

        axios.get("https://bookings.simpleitsolutions.ch/api/resendCustomerConfirmation/" + orderID + "/" + this.resendEmail)
        .then(response => {
          // let data = response.data;
          // console.log(data)
          if (response.data == 'success') {
            this.resendEmailHint = this.$t('step-thanks.successfullySentTO') + this.resendEmail 
            this.resendEmail = ''
          }
        })
        .catch(error => {
          console.log(error)
          this.resendEmailHint = this.$t('step-thanks.failedToSentTO') + this.resendEmail 
        })




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