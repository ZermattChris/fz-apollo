<template>
  <div class="stepThanks">
    
    <PageHeader title="Payment Cancelled">
      Payment didn't work for whatever reason. Give a message and probably just go back to
      the normal payment page... (let them try a different payment method)
    </PageHeader>

  </div>
</template>

<script>
  import PageHeader from '@/components/PageHeader.vue'

  export default {
    name: "Step_Cancelled",
  
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