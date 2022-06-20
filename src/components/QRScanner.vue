<template>
  <v-container fluid>
    <v-row class="pa-8">
      <v-col cols="12" lg="6" sm="12">
          <!-- <v-card class="mb-3" v-show="haveScan"> -->
          <v-card class="mb-3" >
              <v-card-title>Mint NFT Token of Digital Art Collectible</v-card-title>
              <v-card-subtitle>NFT ownership DOES NOT represent real world artwork ownership.</v-card-subtitle>
              <v-card-text >
                  <h2 class="blue--text">Current Price to Mint on Tezos: {{currentPriceToMintTezos}} XTZ</h2>
                  <h3>Current Number of Tokens on Tezos: {{numberOfTokensTezos}}</h3>
              </v-card-text>
              <v-card-text >
                  <h2>Current Price to Mint on Ethereum: {{currentPriceToMintEthereum}} ETH</h2>
                  <h3>Current Number of Tokens on Ethereum: {{numberOfTokensEthereum}}</h3>
              </v-card-text>
              <v-card-text class="purple--text">
                  <h2>Current Price to Mint on Polygon: {{currentPriceToMintPolygon}} MATIC</h2>
                  <h3>Current Number of Tokens on Polygon: {{numberOfTokensPolygon}}</h3>
              </v-card-text>
              <v-card-text >
                  <h2 class="green--text">Current Price to Mint on Rinkeby: {{currentPriceToMintRinkeby}} ETH</h2>
                  <h3>Current Number of Tokens on Rinkeby: {{numberOfTokensRinkeby}}</h3>
              </v-card-text>
                  <v-card-actions>
                  <v-btn @click="mintNftTezos" dark color="blue" block :loading="loading">Mint Token On Tezos</v-btn>
                  </v-card-actions>
                  <v-card-actions>
                  <v-btn @click="mintNftEthereum" dark color="grey" block :loading="loading">Mint Token On Ethereum</v-btn>
                  </v-card-actions>
                  <v-card-actions>
                  <v-btn @click="mintNftPolygon" dark color="purple" block :loading="loading">Mint Token On Polygon</v-btn>
                  </v-card-actions>
                  <v-card-actions>
                  <v-btn @click="mintNftRinkeby" dark color="green" block :loading="loading">Mint Token On Rinkeby</v-btn>
                  </v-card-actions>
          </v-card>
        <v-card v-show="haveScan" >
          <v-card-title>{{ artData.titleText }}</v-card-title>
          <v-card-subtitle>{{ artData.classification }}</v-card-subtitle>
          <v-card-text>
            <a :href="artData.imageLink" target="_blank">
              <v-img :src="artData.imageLink" />
            </a>
          </v-card-text>
          <v-card-text>
            <h2>
              By {{ artData.creatorIdentity }} - {{ artData.creatorRole }}
            </h2>
            <h3>{{ artData.creationDate }}</h3>
            <h3>{{ artData.dimensionsDescription }}</h3>
            <h4>{{ artData.materialsTechniquesDescription }}</h4>

          <p>Known Location: {{artData.repositoryGeographicLocation}}</p>
          </v-card-text>
        </v-card>
        <v-card dark class="pa-5 mt-3" v-show="haveScan">
          <h2 class="decode-result">
            Scan Result:<br />
            <b>{{ result }}</b>
          </h2>
        </v-card>
      </v-col>
      <v-col cols="12" lg="6" sm="12">
        <v-card class="mb-3"> </v-card>
        <v-card class="pa-5 mx-auto" max-width="600px">
          <v-card-title><h1>Artwork Code Scanner</h1></v-card-title>
          <p class="error">{{ error }}</p>

          <qrcode-stream @decode="onDecode" @init="onInit" />
          <h4 v-show="!haveScan" class="mt-2">
            Please scan the QR Code located on each artwork description to
            capture the IPFS address of the metadata and the digital version.
          </h4>
          <h4 v-show="haveScan" class="mt-2">Scan Another Artwork</h4>
          <v-progress-linear
          v-show="loading"
      indeterminate
      color="yellow darken-2"
    ></v-progress-linear>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";
import axios from "axios";

export default {
  components: { QrcodeStream },
  data() {
    return {
      numberOfTokensTezos: 0,
      numberOfTokensEthereum: 0,
      numberOfTokensPolygon: 0,
      numberOfTokensRinkeby: 0,
      currentPriceToMintTezos: 1,
      currentPriceToMintEthereum: 1,
      currentPriceToMintPolygon: 1,
      currentPriceToMintRinkeby: 1,
      validJWT: false,
      haveScan: false,
      result: {},
      error: "",
      loading: false,
    };
  },
  computed: {
      artData () {
          return this.$store.state.scannedArtwork
      }
  },
  methods: {
      mintNftTezos ( ) {
          alert('Mint Token On Tezos')
          this.numberOfTokensTezos++
          this.currentPriceToMintTezos = this.numberOfTokensTezos
      },
      mintNftEthereum ( ) {
          alert('Mint Token On Ethereum')
          this.numberOfTokensEthereum++
          this.currentPriceToMintEthereum = this.numberOfTokensEthereum
      },
      mintNftPolygon ( ) {
          alert('Mint Token On Polygon')
          this.numberOfTokensPolygon++
          this.currentPriceToMintPolygon = this.numberOfTokensPolygon
      },
      mintNftRinkeby ( ) {
          alert('Mint Token On Rinkeby')
          this.numberOfTokensRinkeby++
          this.currentPriceToMintRinkeby = this.numberOfTokensRinkeby
      },
    async onDecode(result) {
      this.result = result;
      console.log(this.result);
      this.loading = true;
      axios
        .get("https://nftw.mypinata.cloud/ipfs/" + this.result)
        .then((response) => (this.$store.state.scannedArtwork = response.data));
        this.artData = this.$store.state.scannedArtwork;
      this.haveScan = true;
     this.loading = false;
    },
    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "ERROR: you need to grant camera access permission";
        } else if (error.name === "NotFoundError") {
          this.error = "ERROR: no camera on this device";
        } else if (error.name === "NotSupportedError") {
          this.error = "ERROR: secure context required (HTTPS, localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "ERROR: is the camera already in use?";
        } else if (error.name === "OverconstrainedError") {
          this.error = "ERROR: installed cameras are not suitable";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "ERROR: Stream API is not supported in this browser";
        } else if (error.name === "InsecureContextError") {
          this.error =
            "ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.";
        } else {
          this.error = `ERROR: Camera error (${error.name})`;
        }
      }
    },
  },
};
</script>

