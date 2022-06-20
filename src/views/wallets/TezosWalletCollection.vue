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
import { BeaconWallet } from '@taquito/beacon-wallet';

const tezos = new TezosToolkit('https://ithacanet.ecadinfra.com');

const options = {
  name: 'MyAwesomeDapp',
  iconUrl: 'https://tezostaquito.io/img/favicon.svg',
  preferredNetwork: 'ithacanet',
  eventHandlers: {
    PERMISSION_REQUEST_SUCCESS: {
      handler: async (data) => {
        console.log('permission data:', data);
      },
    },
  },
};

const wallet = new BeaconWallet(options);



export default {
  name: 'TezosWalletCollection',

  data: () => ({
  }),
  mounted () {
    console.log(tezos)
    console.log(wallet)
 
  }
}
</script>

