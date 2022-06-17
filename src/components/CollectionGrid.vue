<template>
  <v-container class="fill-height" dark>
    <v-row align="center" justify="center" class="fill-height">
      <v-card class="pa-3 mt-12" width="400px">
           DemoSet {{DemoSet}}
      </v-card>
    </v-row>
 </v-container>
</template>

<script>

import DemoSet from '../assets/artwork-example-QmX8aqQfqED84SwucgXPRa54rZECJ3QaFQJq8Pdjbv3J7n.json'

export default {
  name: 'ConnectWallet',

  data () {
      return {
        DemoSet: {}
      }
    },
  mounted () {
    this.DemoSet = DemoSet
  },
  methods: {
     
  }
}
</script>

