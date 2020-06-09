<template>
  <div>

    <h1 
      class="ml-n2 disable-select"
      v-html="title"
    >
    </h1>
    <p>
        <slot>Default Page Header text...</slot>
    </p>

    <v-divider></v-divider>

  </div>
</template>

<script>
  export default {
    name: "PageHeader",
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