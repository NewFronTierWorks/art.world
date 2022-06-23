<template>
  <v-container class="fill-height" dark>
    <v-row align="center" justify="center" class="fill-height">
      <v-card class="pa-3 mt-12" width="400px">
        <v-card-title>View The Works You Have Already Discovered</v-card-title>
          <v-card-text>
              <h3>Connect your wallet to view your personal Digital Art Collection.</h3>
          </v-card-text>
            <v-btn 
            color="blue" 
            class="my-3"
            dark
            block
            to="view-collection"
            
            >
                Login with Google
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn 
            color="grey" 
            class="my-3"
            dark
            block
            to="view-collection"
            
            >
                Login with NFT
            </v-btn>
      </v-card>
    </v-row>
 </v-container>
</template>

<script>

export default {
  name: 'ConnectWallet',

  data () {
      return {
      }
    },
  mounted () {
  },
  methods: { }

}
</script>

