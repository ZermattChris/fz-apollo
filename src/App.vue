<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      hide-on-scroll
    >
      <!-- Back Btn -->
      <v-btn
        class="text-capitalize"
        :class="canGoBack ? '' : 'd-none'"
        style="position:absolute;"
        text
        @click="onBackBtnClick"
      >
        <v-icon left>{{iconPrevChevron}}</v-icon>
        Back
      </v-btn>
      
      <div 
        id="logo"
        class="d-flex align-center"
      >
        <v-img
          alt="FlyZermatt Logo"
          class="shrink mr-2"
          contain
          src="@/assets/FlyZermatt-logo-light.svg"
          transition="scale-transition"
          width="220"
        />
      </div>

    </v-app-bar>

    <v-content>
      <v-row no-gutters>
        <v-col cols="12" md="1" lg="2"></v-col>
        <v-col class="pa-md-12 pa-6" cols="12" md="10" lg="8" >

          <!-- Router hooked up here -->
          <transition
            name="fade"
            mode="out-in"
          >
            <router-view
              v-on:form-is-valid="onEnableContinueBtn"
            ></router-view>
          </transition>

          <div class="text-center mt-12 ml-n5 ml-sm-n8 ml-md-n10">
            <!-- Continue Btn -->
            <v-btn 
              rounded 
              color="primary" 
              elevation="4"
              :disabled="!canContinue"
              @click="onContinueBtnClick"
            >
              Continue
              <v-icon right>{{iconNextArrow}}</v-icon>
            </v-btn>
          </div>


        </v-col>
        <v-col cols="12" md="1" lg="2"></v-col>
      </v-row>
    </v-content>

    <v-footer
      class="justify-end pr-2"
      color="primary"
      dark
      app
      padless
    >
      <div class="white--text overline">© 2020 - FlyZermatt</div>
    </v-footer>
  </v-app>
</template>

<script>
import { mdiArrowRightCircle, mdiChevronLeft } from '@mdi/js'

export default {
  name: 'App',

  components: {
    
  },
  beforeUpdate() {
    // Show/hide the Back Btn.
    if (this.$route.name === 'Start') {
      //console.log('ON HOME PAGE')
      this.onEnableBackBtn(false)
    } else {
      this.onEnableBackBtn(true)
    }
  },

  data: () => ({

    iconNextArrow:   mdiArrowRightCircle,
    iconPrevChevron: mdiChevronLeft,
    
    canGoBack:   false,
    canContinue: false
  }),

  methods: {
    onEnableContinueBtn: function (valid) {
      //console.log('Enable Btn: ' + valid)
      this.canContinue = valid
    },
    onContinueBtnClick: function () {
      //console.log('Clicked Enable Btn:')
      this.$router.push('TimeSlot')
      // disable Continue btn
      this.onEnableContinueBtn(false)
      this.onEnableBackBtn(true)
    },

    onEnableBackBtn: function (show) {
      //console.log('Enable Btn: ' + valid)
      this.canGoBack = show
    },
    onBackBtnClick: function () {
      //console.log('Clicked Back Btn:')
      this.$router.go(-1)
    },
    // onIsHome: function () {
    //   //console.log('ON HOME PAGE')
    //   this.onEnableBackBtn(false)
    // }
  }

};


</script>

<style>

#logo {
  margin: 0 auto;
}

.v-divider {
  margin-bottom: 20px;
}
.controls {
  margin-top: 10px;
  margin-left: 30px;
  margin-bottom: 30px;
}
h3 > .v-icon {
  position: relative;
  margin-top: -7px;
  margin-right: 3px;
}
.v-input__icon {
  margin-right: 5px !important;
}

</style>
