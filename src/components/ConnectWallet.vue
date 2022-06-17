<template>
  <v-container class="fill-height" dark>
    <v-row align="center" justify="center" class="fill-height">
      <v-card class="pa-3 mt-12" width="400px">
          <v-card-text>
              <p>Connect your wallet to view your collection.</p>
          </v-card-text>
            <v-btn 
            color="blue" 
            class="my-3"
            dark
            block
            @click="connectTezosWallet"
            
            >
                Connect Tezos Wallet
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn 
            color="purple" 
            class="my-3"
            dark
            block
            @click="connectPolygonWallet"
            
            >
                Connect Polygon Wallet
            </v-btn>
      </v-card>
    </v-row>
 </v-container>
</template>

<script>
import { TezosToolkit } from '@taquito/taquito';

export default {
  name: 'ConnectWallet',

  data: () => ({
  }),
  methods: {
      connectTezosWallet ( ) {
          console.log("Connect Tezos Wallet")
          alert("Connect Tezos Wallet")
          const Tezos = new TezosToolkit('https://testnet-tezos.giganode.io');
          console.log(Tezos)
      },
      connectPolygonWallet ( ) {
          console.log("Connect Wallet")
          alert("Connect Polygon Wallet")
      }
  }
}
</script>

