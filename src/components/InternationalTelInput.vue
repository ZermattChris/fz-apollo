<template>
  <div style="outline:1px maroon solid;">

    <!-- The international country code input -->
    <v-text-field 
      name="countryCode"
      ref="countryCode"
      id="countryCode"
      v-model="contactPhone"
      background-color="white"
      outlined
      dense
      placeholder="1234"
      prefix="+"
      style="max-width:5em;"
    >
    </v-text-field>

    <!-- National tel nr input -->
    <v-text-field 
      name="telNr"
      ref="telNr"
      id="telNr"
      v-model="contactPhone"
      background-color="white"
      outlined
      dense
      placeholder="456 789-1234"
      style="max-width:10em;"
    >
    </v-text-field>
  
  </div>
</template>

<script>
  export default {
    name: "InternationalTelInput",
    props: {
      title: {
        type: String,
        default: 'Title Default'
      },
    },
  }
</script>

<style scoped>

</style>