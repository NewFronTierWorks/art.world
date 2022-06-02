<template>
    <v-container>
        <v-card width="420px">
            <v-card-title>Create Token</v-card-title>
            <v-card-text>
                <v-text-field label="Title"></v-text-field>
                <v-text-field label="Artist"></v-text-field>
            </v-card-text>
        </v-card>
    </v-container>
</template>


<script>
import pinataSDK from '@pinata/sdk'
export default {
    name: 'TokenForm',
  components: {  },
  data () {
    return {
        pinata: {}
    }
  },
  mounted () {
      this.pinataConnect();
  },
  methods: {
      pinataConnect () {
          const pinata = pinataSDK(process.env.PINATA_KEY, process.env.PINATA_SECRET)
          pinata.testAuthentication().then((result) => {
            //handle successful authentication here
            console.log(result);
        }).catch((err) => {
            //handle error here
            console.log(err);
        });

      }
   
  },
}
</script>