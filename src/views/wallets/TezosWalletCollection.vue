<template>
  <v-container class="fill-height" dark>
    <v-row align="center" justify="center" class="fill-height">
      <v-card class="pa-3 mt-12" width="400px">
        <v-card-title>Tezos Wallet Collection</v-card-title>
        <v-card-subtitle></v-card-subtitle>
        <v-card-actions>
            <v-btn 
            color="blue" 
            dark
            block
            >
                Refresh
            </v-btn>
          
        </v-card-actions>
      </v-card>
    </v-row>
 </v-container>
</template>

<script>
import { TezosToolkit } from '@taquito/taquito';

import { TempleWallet } from '@temple-wallet/dapp';

const Tezos = new TezosToolkit('https://ithacanet.ecadinfra.com');


export default {
  name: 'TezosWalletCollection',

  data: () => ({
  }),
  mounted () {
    console.log(Tezos)
    this.getTemple();
    this.getWallet();
 
  },
  methods: {
    async getTemple () {
      try {
        const available = await TempleWallet.isAvailable();
        if (!available) {
          throw new Error('Thanos Wallet not installed');
        }
      } catch (err) {
        console.log(err);
      }
    },
    getWallet () {
      const wallet = new TempleWallet('MyAwesomeDapp'); 
      console.log(wallet)
    }
  }
}
</script>

