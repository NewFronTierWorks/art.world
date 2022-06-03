<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-btn @click="getTezos"></v-btn>
  </div>
</template>

<script>
import { TezosToolkit } from '@taquito/taquito';
  export default {
    name: 'AboutView',
    data () {
      return {
        tezos: null
      }
    },
    mounted () {
      const tezos = new TezosToolkit('https://ithacanet.e');
      this.tezos = tezos
      console.log(tezos)
      
    },
    components: {
    },
    methods: {
      getTezos () {
        console.log("working on it")
        this.tezos.tz
        .getBalance('tz1h3rQ8wBxFd8L9B3d7Jhaawu6Z568XU3xY')
        .then((balance) => console.log(`${balance.toNumber() / 1000000} ꜩ`))
        .catch((error) => console.log(JSON.stringify(error)));
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
