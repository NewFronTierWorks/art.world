<template>
<v-container fluid >
<v-row class="pa-8">
    <v-col cols="12" lg="6" sm="12">
    <v-card class="mb-3">
    </v-card>
        <v-card class="pa-5 mx-auto" max-width="600px">
            <p class="error">{{ error }}</p>

            <qrcode-stream @decode="onDecode" @init="onInit" />
        </v-card> 
                <v-card  dark class="pa-5 mt-3">
                    <h2  class="decode-result">Scan Result: <b>{{ result }}</b></h2>
           
                </v-card>
    </v-col>
 
    <v-col cols="12" lg="6" sm="12">
        <v-card >
            <v-card-title>{{artData.titleText}}</v-card-title>
            <v-card-subtitle>{{artData.classification}}</v-card-subtitle>
            <v-card-text>
                <v-img :src="artData.imageLink"/>
            </v-card-text>
            <v-card-text>
                <h2>By {{artData.creatorIdentity}}</h2>
                <p>{{artData.creatorRole}}</p>
                <p>{{artData.creatorDescription}}</p>
            </v-card-text>


            <v-card-title>{{artData}}</v-card-title>
        </v-card>
    </v-col>
    </v-row>
</v-container>
</template>

<script>
import { QrcodeStream} from 'vue-qrcode-reader'
import axios from 'axios'

export default {
  components: { QrcodeStream },
  data () {
    return {
      validJWT: false,
        haveScan: false,
      result: { 
        },
      error: '',
      artData: {

      }
    
    }
  },
  methods: {
    async onDecode (result) {
      this.result = result;
      console.log(this.result)
      this.haveScan = true;
      axios
      .get('https://nftw.mypinata.cloud/ipfs/' + this.result)
      .then(response => (this.artData = response.data))
        console.log(this.artData)
    },
    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          this.error = "ERROR: you need to grant camera access permission"
        } else if (error.name === 'NotFoundError') {
          this.error = "ERROR: no camera on this device"
        } else if (error.name === 'NotSupportedError') {
          this.error = "ERROR: secure context required (HTTPS, localhost)"
        } else if (error.name === 'NotReadableError') {
          this.error = "ERROR: is the camera already in use?"
        } else if (error.name === 'OverconstrainedError') {
          this.error = "ERROR: installed cameras are not suitable"
        } else if (error.name === 'StreamApiNotSupportedError') {
          this.error = "ERROR: Stream API is not supported in this browser"
        } else if (error.name === 'InsecureContextError') {
          this.error = 'ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.';
        } else {
          this.error = `ERROR: Camera error (${error.name})`;
        }
      }
    },
   
  },
}
</script>

<style scoped>
.error {
  font-weight: bold;
  color: red;
}
.Red {background: #c00000;}
.Gold {background: gold;}
.Purple {background: purple;}
.Black {background: black;}
.Undefined {background: green;}
</style>