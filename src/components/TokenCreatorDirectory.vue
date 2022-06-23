<template>
  <v-container class="fill-height" dark>
    <v-row align="center" justify="center" class="fill-height">
      <v-card class="pa-3 mt-12" width="400px">
        <v-card-title>For Museums and Galleries</v-card-title>
        <v-card-text>
            <p>
            <strong>NFTW</strong>-art.world allows museums, galleries and private collectors to tokenize art works using the <br> CDWA-<strong>NFTW</strong> standard and IPFS data storage.  
        </p>
        </v-card-text>
        <v-card-actions>
          
            <v-btn 
            dark
            to="token-creator"
            block
            >
                Create Artwork Token
            </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
 </v-container>
</template>

<script>

export default {
  name: 'TokenCreatorDirectory',

  data: () => ({
  }),
}
</script>

