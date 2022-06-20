<template>
  <v-container class="fill-height" dark>
    <v-row align="center" justify="center" class="fill-height">
      <v-card class="pa-3 mt-12" width="400px">
        <v-card-title>Rinkeby Wallet Collection</v-card-title>
        <v-card-subtitle></v-card-subtitle>
        <v-card-actions>
            <v-btn 
            color="green" 
            dark
            block
            @click="getWeb3"
            >
                Refresh
            </v-btn>
          
        </v-card-actions>
      </v-card>
    </v-row>
 </v-container>
</template>

<script>

export default {
  name: 'RinkebyWalletCollection',

  data: () => ({
  }),
  methods: {
    getWeb3 () {
        alert('getWeb3')
    }
  }
}
</script>

