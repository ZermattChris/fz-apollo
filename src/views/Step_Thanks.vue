<template>
  <div class="stepThanks">
    
    <PageHeader title="Thank you!">
      Your payment succeeded.
    </PageHeader>

    <p>
      Please check your inbox for your order and payment confirmations.
    </p>

    <ul>
      <li>Reset booking vars</li>
      <li>Provide a way to review previous bookings (link in Email??)</li>
    </ul>

  </div>
</template>

<script>
  import PageHeader from '@/components/PageHeader.vue'

  export default {
    name: "Step_Thanks",
  
    components: {
      PageHeader
    },

    data () {
      return {
        
      }
    },

    created() {


    },


    computed: {
      
 
      
    },

    methods: {
      
    },
  }

</script>

<style scoped>
.steps-controls {
  position: absolute;
  left:0; right: 0;
  text-align: center;
  margin: 0 auto;
}


</style>