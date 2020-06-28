<template>

    <v-btn 
      rounded 
      color="primary" 
      elevation="4"
      :disabled="isDisabled"
      @click="navigate"
    >
      Continue
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
          //console.log('_navList.Start:', state._navList.Start)
          return state._navList
        },
        ()=>{
          this.update()
          // const currPage = this.$route.name
          // const key = Object.keys(_navList)[0]
          // const val = Object.values(_navList)[0]
          // //console.log('key', key, 'val', val);
          // // current page is valid, activate CONTINUE button.
          // if (currPage === key) {
          //   this.isDisabled = !val
          // }
        },
        {
          deep:true
        }
      );
    },


    methods: {
      
      // call to force the Continue button to enable/disable 
      // according to the validity flag stored in _navList
      update: function () {
        console.log('Updating CONTINUE Btn')
        const currPage = this.$route.name
        const navList = this.$store.state._navList
        const key = Object.keys(navList)[0]
        const val = Object.values(navList)[0]
        //console.log('key', key, 'val', val);
        // current page is valid, activate CONTINUE button.
        if (currPage === key) {
          this.isDisabled = !val
        }
      },


      navigate: function () {

        const currStep = this.$store.state._currentStep
        console.log('Navigating the CONTINUE Btn')

        switch (currStep) {
          case 'Start': 
            console.log('Leaving Start')
            this.$store.dispatch('setCurrentStep', 'Time')
            break
          case 'Time': 
            console.log('Leaving Time')
            this.$store.dispatch('setCurrentStep', 'Info')
            break
          case 'Info': 
            console.log('Leaving Info')
            this.$store.dispatch('setCurrentStep', 'Next')
            break;
          case 'Next': 
            console.log('Leaving Next')
            this.$store.dispatch('setCurrentStep', 'Pay')
            break;
          case 'Pay': 
            console.log('Leaving Pay')
            this.$store.dispatch('setCurrentStep', 'Thanks')
            break;
          case 'Thanks': 
            console.log('Leaving Thanks. Where next?? (homepage??)')
            this.$store.dispatch('setCurrentStep', 'Completed')
            break;

        }

        const targetStep = this.$store.state._currentStep
        console.log('Nav to:', targetStep)

        this.$router.push({
          path: targetStep
        })

      },

    }, // * -- END METHODS --

  }


</script>
