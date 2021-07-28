<template>
  <div class="stepThanks">
    
    <PageHeader title="Thank you!">
      Your payment succeeded &amp; your order is complete.
    </PageHeader>

    <p>
      Transaction Nr: <strong class="primary--text">{{$store.state.orderID}}</strong> 
    </p>
    <p>
      Your order confirmation has been sent to <strong class="primary--text">{{orderEmail}}</strong>
    </p>

    <p style="background-color: #c78b48;" class="rounded-lg white--text text-caption mt-6 mb-6 mx-4 px-2 py-1">
      <v-icon color="white">
        mdi-at
      </v-icon>
      Please make sure to check your email <strong>Spam/Junk</strong> folders if your order confirmation doesn't arrive (emails
      can take a bit to arrive sometimes)
    </p>

    <p class="text-caption">
      If you have any problems with your order, please contact us at:
      <a href="mailto:info@flyzermatt.com">info@flyzermatt.com</a>
      or give us a call at:
      <a href="tel:+41796436808">+41 79 643 6808</a>
    </p>


    <p class="text-center mt-12 mr-auto ml-auto" style="max-width:300px;">
      
      <v-text-field 
        label="Resend confirmation email to:"
        v-model="orderEmail"
      >
      </v-text-field>
    </p>
    <p class="text-center"> 
      <v-btn
        elevation="2"
        @click="onResendEmailBtn"
      >
        SEND
      </v-btn>
    </p>

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

    destroyed() {

      this.resetLocalStorage()

    },


    computed: {
      
      orderEmail: function () {
        return this.$store.state.contactEmail
      },
      
    },

    methods: {

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

        this.$store.dispatch('setArriveDate', '')
        this.$store.dispatch('setDepartDate', '')
        this.$store.dispatch('setFlightDate', '')

        this.$store.dispatch('setFlight', '')
        this.$store.dispatch('setOrderMessage', '')

        this.$store.dispatch('clearSlotsPassengers', '')
        
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