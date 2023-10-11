<template>
  <div class="flight-body">

    <p v-for="(para, key) in paragraphsList" :key="key">

      <v-icon small color="warning" class="mr-1">
        {{ infoIcon }}
      </v-icon>
      {{ para.text }}
    </p>

  </div>
</template>

<script>

  import { mdiInformation } from '@mdi/js'

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

        infoIcon:  mdiInformation,
        
        paragraphsList: {}
      }
    },



    watch: {

      body () {

        console.log("Watching 'body'")

        const parasList = []

        // Break double new lines into paragraphs
        const paras = this.body.split(/\n\n/)
        //console.log(paras)

        // Parse out the optional 'icon' type.
        for (const p of paras) {
          const iconSplit = p.split('[location]');
          if (iconSplit.length > 1) {
            console.log("Has Location icon: " + iconSplit.length);
            const obj = {"icon":"location", "text":iconSplit[1]}
            parasList.push(obj)
          }
        }

        console.log(parasList)



        return parasList
      },
      
    },




  }
</script>
