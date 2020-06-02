<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      hide-on-scroll
    >
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
          <router-view
            v-on:form-is-valid="onEnableContinueBtn"
          ></router-view>

          <div class="text-center mt-12 ml-n5 ml-sm-n8 ml-md-n10">
            <!-- Continue Btn -->
            <v-btn 
              rounded 
              color="primary" 
              elevation="4"
              :disabled="!canContinue"
            >
              Continue
              <v-icon right>mdi-arrow-right-bold-circle</v-icon>
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
      <div class="white--text overline">© 2020 by FlyZermatt</div>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    canContinue: false
  }),
  methods: {
    onEnableContinueBtn: function (valid) {
      //console.log('Enable Btn: ' + valid)
      this.canContinue = valid
    }
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
