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
        <v-col cols="12" sm="4" style="background-color:yellow;"></v-col>
        <v-col cols="12" sm="4" style="background-color:silver;">
          <router-view></router-view>
        </v-col>
        <v-col cols="12" sm="4" style="background-color:yellow;"></v-col>
      </v-row>
    </v-content>

    <v-footer
      color="primary"
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

</style>
