<template>

  <v-speed-dial
    id="language-menu"
    v-model="fabModel"
    direction="bottom"
    transition="slide-y-transition"
  >
    <template v-slot:activator>
      <v-btn
        v-model="fabModel"
        fab
        small
      >
        {{ currentLangISO }}
      </v-btn>
    </template>

    <v-btn
      v-for="(lang, index) in langISOList"
      :key="index"
      :hidden="lang == currentLangISO"
      class="primary--text"
      fab
      x-small
      color="white"
      @click="onChooseLanguage(lang)"
    >
      {{lang}}
    </v-btn>
  </v-speed-dial>

</template>

    
<script>
// @ is an alias to /src

// import { mdiPlusCircleOutline, mdiMinusCircleOutline } from '@mdi/js';

export default {
  name: "LangMenu",

  props: {

  }, 

  data () {
    return {
      
      fabModel: false,
      currentLangISO: 'EN',
      langISOList: ['EN','DE','FR','KR']

    }
  },

  methods: {
    onChooseLanguage: function (lang) {
      //console.log(lang)
      this.currentLangISO = lang
    },
    
  },


  
}

</script>

<style scoped>





</style>