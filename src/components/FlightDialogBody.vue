<template>
  <div class="flight-body">

    <div>

      <p v-for="(para, key) in paragraphsList" :key="key">

        
        <v-icon 
          v-if="para.icon == 'location'"
          small 
          color="warning" 
          class="mr-1"
        >
          {{mapIcon}}
        </v-icon>
        <v-icon 
          v-if="para.icon == 'info'"
          small 
          color="warning" 
          class="mr-1"
        >
          {{infoIcon}}
        </v-icon>
        <v-icon 
          v-if="para.icon == 'star'"
          small 
          color="warning" 
          class="mr-1"
        >
          {{starIcon}}
        </v-icon>
       
        {{ para.text }}
      </p>

    </div>

    <!-- <p>
      TODO: This needs to switch between the langs...
      <v-icon color="warning" class="">
        mdi-star
      </v-icon>
      <span v-html="$t('step-start.kleinPopup.paragraphFour')" />
    </p> -->

  </div>
</template>

<script>

  import { mdiInformationOutline, mdiStar, mdiMapMarker } from '@mdi/js'

  export default {
    name: "FlightDialogBody",
    props: {
      body: {
        type: String,
        default: ''
      },
      lang: {
        type: String,
        default: 'en'
      },
    },

    data () {
      return {

        infoIcon:  mdiInformationOutline,
        starIcon:  mdiStar,
        mapIcon:  mdiMapMarker,
        
        paragraphsList: {}
      }
    },

    // Lifecycle Hooks

    beforeMount() {
      
      //console.log("beforeMount()")
      this.parseParas()

    },


    watch: {

      body () {

        //console.log("Watching 'body'")
        this.parseParas()

      },
      
    },


    methods: {

      // Modify this method to add/remove icons for the flight info dialog. 
      parseParas () {
        
        //console.log("*** Parsing Paragraphs ***")

        const parasList = []

        // Break double new lines into paragraphs
        //const paras = this.body.split(/\r\n\r\n/) // Tommy

        // Split on custom [p] delimiters.
        const paras = this.body.split( /\[p\]/g )


        //console.log("paras ",paras)

        // Parse out the optional 'icon' type.
        for (const p of paras) {

          const thisP = p
          
          // Find and parse all entries with a "location" icon.
          const iconLocSplit = thisP.split('[location]');
          if (iconLocSplit.length > 1) {
            //console.log("Has Location icon: " + iconLocSplit.length);
            const obj = {"icon":"location", "text":iconLocSplit[1]}
            parasList.push(obj)
            continue
          }

          // Find and parse all entries with a "star" icon.
          const iconStarSplit = thisP.split('[star]');
          if (iconStarSplit.length > 1) {
            //console.log("Has Star icon: " + iconStarSplit.length);
            const obj = {"icon":"star", "text":iconStarSplit[1]}
            parasList.push(obj)
            continue
          }

          // Find and parse all entries with a "Info" icon.
          const iconInfoSplit = thisP.split('[info]');
          if (iconInfoSplit.length > 1) {
            //console.log("Has Info icon: " + iconInfoSplit.length);
            const obj = {"icon":"info", "text":iconInfoSplit[1]}
            parasList.push(obj)
            continue
          }

          // Finally, add any paragraph that doesn't use an 'icon'
          //console.log("Paragraph has NO icon: ")
          //console.log(thisP)
          if (thisP === '') {
            //console.log("- thisP is empty -")
            continue
          }
          const obj = {"icon":"", "text":thisP}
          parasList.push(obj)
          
        }

        //console.log(parasList)

        this.paragraphsList = parasList

      },
      
    }





  }
</script>
