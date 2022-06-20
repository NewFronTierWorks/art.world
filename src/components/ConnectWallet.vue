<template>
  <v-container class="fill-height" dark>
    <v-row align="center" justify="center" class="fill-height">
      <v-card class="pa-3 mt-12" width="400px">
        <v-card-title>View Your Collection</v-card-title>
          <v-card-text>
              <h3>Connect your wallet to view your personal NFT collection.</h3>
          </v-card-text>
            <v-btn 
            color="blue" 
            class="my-3"
            dark
            block
            to="tezos-wallet-collection"
            
            >
                Connect Tezos Wallet
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn 
            color="grey" 
            class="my-3"
            dark
            block
            to="ethereum-wallet-collection"
            
            >
                Connect Ethereum Wallet
            </v-btn>
            <v-btn 
            color="purple" 
            class="my-3"
            dark
            block
            to="polygon-wallet-collection"
            
            >
                Connect Polygon Wallet
            </v-btn>
            <v-btn 
            color="green" 
            class="my-3"
            dark
            block
            to="rinkeby-wallet-collection"
            
            >
                Connect Rinkeby Testnet Wallet
            </v-btn>

         
      </v-card>
    </v-row>
 </v-container>
</template>

<script>
import { TezosToolkit } from '@taquito/taquito';

import DemoSet from '../assets/artwork-example-QmX8aqQfqED84SwucgXPRa54rZECJ3QaFQJq8Pdjbv3J7n.json'

export default {
  name: 'ConnectWallet',

  data () {
      return {
      }
    },
  mounted () {
    this.DemoSet = DemoSet
  },
  methods: {
      connectTezosWallet ( ) {
          console.log("Connect Tezos Wallet")
          alert("Connect Tezos Wallet")
          const Tezos = new TezosToolkit('https://testnet-tezos.giganode.io');
          console.log(Tezos)
      },
      connectEthereumWallet ( ) {
          console.log("Connect Wallet")
          alert("Connect Ethereum Wallet")
      },
      connectPolygonWallet ( ) {
          console.log("Connect Wallet")
          alert("Connect Polygon Wallet")
      },
      connectRinkebyWallet ( ) {
          console.log("Connect Wallet")
          alert("Connect Rinkeby Wallet")
      }
  }
}
</script>

