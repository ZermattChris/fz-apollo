<template>

    <v-btn 
      rounded 
      color="white" 
      elevation="4"
      :disabled="isDisabled"
      @click="navigate"
    >
      {{$t('nav.continue')}}
      <v-icon right>{{iconNextArrow}}</v-icon>
    </v-btn>

</template>

<script>

  // import { mapGetters } from 'vuex'
  import { mdiArrowRightCircle } from '@mdi/js'

  export default {
    name: "NavButton",
    props: {
      
    },

    data () {
      return {
        
        isDisabled: true,
        
        iconNextArrow: mdiArrowRightCircle,
      }
    }, // * -- END DATA --

    created () {
      this.$store.watch(
        (state)=>{
          // What to watch in store.
          //console.log('Watched -> state._navList', state._navList)
          return state._navList
        },
        ()=>{
          // How to react to the watch
          //console.log('Reacted to watched -> state._navList')
          this.update()
        },
        {
          // React to changes in the watched Object in store.
          deep:true
        }
      )
    },

    methods: {
      // ! Issues here. route.name resolves to null ??
      // call to force the Continue button to enable/disable 
      // according to the validity flag stored in _navList
      update: function () {
        const currPage = this.$route.name
        //console.log('Updating CONTINUE Btn for: ', currPage)
        const val = this.$store.state._navList[currPage]
        //console.log('currPage', currPage, 'val', val)
        this.isDisabled = !val
      },

      // Where to go when the CONTINUE button is clicked.
      // This seems to be working properly.
      navigate: function () {

        const currStep = this.$store.state._currentStep
        //console.log('Navigating the CONTINUE Btn')

        switch (currStep) {
          case 'Start': 
            //console.log('Leaving Start')
            this.$store.dispatch('setCurrentStep', 'Time')
            break
          case 'Time': 
            //console.log('Leaving Time')
            this.$store.dispatch('setCurrentStep', 'Info')
            break
          case 'Info': 
            //console.log('Send the Info page an event that opens the Review your Booking dialog.')
            // TODO something hangs here at times, needs to be researched...
            if (this.$store.state._hasReviewedData === false) {
              this.$store.dispatch('showReviewDialog', true)
              return
            }
            this.$store.dispatch('setCurrentStep', 'Next')
            break
          case 'Next': 
            //console.log('Leaving Next')
            this.$store.dispatch('setCurrentStep', 'Pay')
            break
          case 'Pay': 
            //console.log('Leaving Pay')
            this.$store.dispatch('setCurrentStep', 'Thanks')
            break
          case 'Thanks': 
            //console.log('Leaving Thanks. Where next?? (homepage??)')
            this.$store.dispatch('setCurrentStep', 'Completed')
            window.location = 'http://www.flyzermatt.com'
            return
        }

        const targetStep = this.$store.state._currentStep
        //console.log('Nav to:', targetStep)

        this.$router.push({
          path: targetStep
        })

      },

    }, // * -- END METHODS --

  }


</script>

<style scoped>
  .theme--dark.v-btn {
    color: black;
  }
</style>>
