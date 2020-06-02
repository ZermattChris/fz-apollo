<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
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
          <router-view></router-view>
        </v-col>
        <v-col cols="12" md="1" lg="2"></v-col>
      </v-row>
    </v-content>

    <v-footer
      color="primary"
      dark
      app
    >
      <span class="white--text">Not sure what to put here, but like the fixed footer</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
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
  margin-top: -5px;
}

</style>
