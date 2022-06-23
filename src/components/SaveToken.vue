<template>
  <v-card class="mb-3">
    <!-- <v-card class="mb-3" > -->
    <v-card-title>Mint a Digital Art Collectible</v-card-title>
    <v-card-subtitle
      >Digital Art Collectible ownership DOES NOT represent real world artwork
      ownership.</v-card-subtitle
    >

    <v-card-actions>
      <v-btn
        @click="collectArtwork"
        dark
        color="blue"
        block
        :loading="loading"
        >Collect Artwork</v-btn
      >
    </v-card-actions>
   
  </v-card>
</template>

<script>
import { store } from "../store";

export default {
    name: 'SaveToken',
  components: {},
  data() {
    return {
      loading: false,
      store,
    };
  },

  methods: {
    collectArtwork() {
        console.log(this.store.scannedArtwork)
        this.store.artworkCollection.push(this.store.scannedArtwork);
    },
  },
};
</script>
