<template>
  <v-container class="fill-height" dark>
    <v-row align="center" justify="center" class="fill-height">
      <v-card class="pa-3 mt-12" width="400px">
        <v-card-title>Tezos Wallet Collection</v-card-title>
        <v-card-subtitle></v-card-subtitle>
        <v-card-text>
          UserAddress: {{userAddress}}
          <br>
          Balance: {{balance}}

        </v-card-text>
        <v-card-actions>
          <v-btn color="blue" dark block @click="connectWallet">
            Get Wallet
          </v-btn>
          </v-card-actions>
        <v-card-actions>
          <v-btn color="black" dark block @click="fetchBalance">
            Get Balance
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { TezosToolkit } from '@taquito/taquito';

import { BeaconWallet } from '@taquito/beacon-wallet';

import { TempleWallet } from '@temple-wallet/dapp'






export default {
  name: 'TezosWalletCollection',

  data() {
    return {
      toolKit: {},
      tezos: {},
      wallet: {},
      userAddress: '',
      balance: 0,
      errorMessage: '',
      accountBalance: 0,
      options: {
        name: 'NFTW-art.World',
        iconUrl: 'https://tezostaquito.io/img/favicon.svg',
        preferredNetwork: 'ithacanet',
        eventHandlers: {
          PERMISSION_REQUEST_SUCCESS: {
            handler: async (data) => {
              console.log('permission data:', data);
            },
          },
        },
      }
    }
  },
  mounted() {
    this.getTezosToolkit();

  },
  methods: {
    async connectWallet () {
      try {
        const available = await TempleWallet.isAvailable();
        if (!available) {
          throw new Error('Thanos Wallet not installed');          
        }
        this.userAddress = '';
        this.errorMessage = '';
        this.wallet = new TempleWallet('NFTW-art.World');
        await this.wallet.connect({
          name: 'ithacanet',
          rpc: 'https://ithacanet.ecadinfra.com'
        });

        //get Tezos singleton from Thanos Wallet
        this.toolKit = await this.wallet.toTezos();
        this.toolKit.setWalletProvider(this.wallet)

        console.log("Wallet", this.wallet)
        this.userAddress = await this.wallet.getPKH();


      } catch (err) {
        console.log(err)
      }
    },
    async fetchBalance () {
     this.accountBalance = await this.toolKit.tz.getBalance(this.userAddress)
      console.log(this.accountBalance);
    },
    getTezosToolkit () {
      this.tezos = new TezosToolkit('https://ithacanet.ecadinfra.com');
    },
    async getWallet() {
      this.wallet = new BeaconWallet(this.options);
      console.log(this.wallet)
      console.log(this.tezos)
      this.getBeacon();
      // const userAddress = await this.wallet.getPKH();
      // console.log(userAddress)
      // this.tezos.setWalletProvider(this.wallet);
    },
    async getBeacon() {
      await this.wallet.requestPermissions({
        network: {
          type: 'mainnet' | 'hangzhounet' | 'ithacanet' | 'custom',
        },
      });
      
    },
  }
}
</script>

