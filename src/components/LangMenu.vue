<template>

  <v-speed-dial
    id="language-menu"
    v-model="fabModel"
    direction="bottom"
    transition="slide-y-transition"
  >
    <template v-slot:activator>
      <v-btn
        class="white--text text-uppercase"
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
      class="primary--text text-uppercase"
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

      langISOList: [],
      // Sets default language to Browser lang (if a match)
      currentLangISO: 'en',

      // List of langs that are enabled on live (all langs are visible in _DEV mode)
      enabledLangs: ['en','ko','fr','de']

    }
  },

  // Lifecycle Hooks
  mounted () {

    const langKeys = Object.keys(this.$i18n.messages)
    langKeys.forEach((key) => {
      //console.log(key)    // de, en, fr, ko...

      // Don't show any lang that isn't finished when running in LIVE mode.
      if (this.$store.state._DEV === false) {
        if (this.enabledLangs.includes(key) !== true) return
      }

      this.langISOList.push(key)
    })

    this.currentLangISO = this.getBroswerLangIfMatch()
    this.$i18n.locale = this.currentLangISO
    this.$store.dispatch('setLocale', this.currentLangISO)
    //console.log(this.currentLangISO)

  },


  methods: {
    onChooseLanguage: function (lang) {
      //console.log('BeforeLang', this.currentLangISO, 'NewLang', lang)
      this.currentLangISO = lang
      this.$i18n.locale = lang
      this.$store.dispatch('setLocale', lang)
    },


    getBroswerLangIfMatch: function () {
      const browserISO = this.getBrowserLocale({ countryCodeOnly: true })
      //console.log('browserISO',browserISO)
      // See if we have a match in our lang list, otherwise default to 'en'
      const result = this.langISOList.includes(browserISO)
      if (result) return browserISO
      return 'en'   // default lang.
    },
    getBrowserLocale: function (options = {}) {
      const defaultOptions = { countryCodeOnly: true }
      const opt = { ...defaultOptions, ...options }

      const navigatorLocale =
        navigator.languages !== undefined
          ? navigator.languages[0]
          : navigator.language

      if (!navigatorLocale) {
        return undefined
      }

      const trimmedLocale = opt.countryCodeOnly
        ? navigatorLocale.trim().split(/-|_/)[0]
        : navigatorLocale.trim()

      return trimmedLocale
    }

    
  },


  
}

</script>

