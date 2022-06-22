<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" lg="4" sm="12" v-show="haveScan">
        <v-card>
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
  
            <p>Current Location: {{ artData.repositoryGeographicLocation }}</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4" sm="12" v-show="haveScan">
      <!-- <v-col cols="12" lg="4" sm="12" > -->
        <v-card dark class="pa-5 mt-3" v-show="haveScan">
          <h2 class="decode-result">
            Scan Result:<br />
            <b>{{ result }}</b>
          </h2>
        </v-card>
        <v-card class="mb-3">
          <!-- <v-card class="mb-3" > -->
          <v-card-title>Mint a Digital Art Collectible</v-card-title>
          <v-card-subtitle
            >Digital Art Collectible ownership DOES NOT represent real world artwork
            ownership.</v-card-subtitle
          >
          <v-card-text>
            <h2 class="blue--text">
              Current Minimum Price to Mint: $ {{ currentPriceToMint }} 
            </h2>
            <h3>
              Current Number of Tokens: {{ numberOfTokens }}
            </h3>
          </v-card-text>
          
          <v-card-actions>
            <v-btn
              @click="mintToken"
              dark
              color="blue"
              block
              :loading="loading"
              >Collect Artwork</v-btn
            >
          </v-card-actions>
      
        </v-card>
      </v-col>
      <v-col cols="12" lg="4" sm="12">
        <v-card class="pa-5 mx-auto">
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
      numberOfTokens: 0,
      currentPriceToMint: 1,
      validJWT: false,
      haveScan: false,
      result: {},
      error: "",
      loading: false,
    };
  },
  computed: {
    artData() {
      return this.$store.state.scannedArtwork;
    },
  },
  methods: {
    mintNftTezos() {
      alert("Mint Digital Collectiblespee");
      this.numberOfTokens++;
      this.currentPriceToMint = this.numberOfTokens;
    },
    mintNftEthereum() {
      alert("Mint Token On Ethereum");
      this.numberOfTokensEthereum++;
      this.currentPriceToMintEthereum = this.numberOfTokensEthereum;
    },
    mintNftPolygon() {
      alert("Mint Token On Polygon");
      this.numberOfTokensPolygon++;
      this.currentPriceToMintPolygon = this.numberOfTokensPolygon;
    },
    mintNftRinkeby() {
      alert("Mint Token On Rinkeby");
      this.numberOfTokensRinkeby++;
      this.currentPriceToMintRinkeby = this.numberOfTokensRinkeby;
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

