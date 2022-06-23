<template>
  <v-container class="fill-height" dark>
    <v-row align="center" justify="center" class="fill-height">
      <v-card class="pa-3 mt-12" width="400px">
        <v-card-title>Build Your Collection</v-card-title>
        <v-card-subtitle>Discover NFTW-Art.World QR Codes of Artwork and Mint a Digital Art Collection</v-card-subtitle>
        <v-card-actions>
            <v-btn 
            color="orange" 
            dark
            to="scan-artwork"
            block
            >
                Scan Artwork
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

