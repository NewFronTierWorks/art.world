<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{this.balance}}
    <v-btn @click="getTezos">Get Tezos</v-btn>
    <v-btn @click="getWallet">Get Wallet</v-btn>
  </div>
</template>

<script>
import { TezosToolkit } from '@taquito/taquito';

  export default {
    name: 'AboutView',
    data () {
      return {
        tezos: null,
        balance: 0,
      }
    },
    mounted () {
      
    },
    components: {
      },
    methods: {
      getTezos () {
        const Tezos = new TezosToolkit('https://testnet-tezos.giganode.io');
        console.log(Tezos)
      },
      getWallet () {
        console.log('getwallet')
      }
      
    }
  }
</script>


// import { TezosToolkit } from '@taquito/taquito'cadinfra.com;
// const Tezos = new TezosToolkit('https://ithacanet.e');

Tezos.tz
  .getBalance('tz1h3rQ8wBxFd8L9B3d7Jhaawu6Z568XU3xY')
  .then((balance) => println(`${balance.toNumber() / 1000000} ꜩ`))
  .catch((error) => println(JSON.stringify(error)));
