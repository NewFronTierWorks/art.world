<template>
  <v-container class="fill-height" dark>
    <v-row align="center" justify="center" class="fill-height">
      <v-card class="pa-3 mt-12" width="400px">
        <p>
            <strong>NFTW</strong>-art.world allows museums, galleries and private collectors to tokenize art works using the CDWA-<strong>NFTW</strong> standard, IPFS data storage and Tezos blockchain technology for ownership proofs.  
        </p>
        <v-card-actions>
            <v-btn 
            color="blue" 
            dark
            to="scan-artwork"
            >
                Scan Artwork
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn 
            dark
            to="token-creator"
            >
                Create Token
            </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
 </v-container>
</template>

<script>

export default {
  name: 'StartMenuBox',

  data: () => ({
  }),
}
</script>

