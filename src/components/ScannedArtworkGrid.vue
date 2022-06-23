<template>
  <v-container class="fill-height" dark>
    <v-row align="center" justify="center" class="fill-height">
      <v-card v-show="artwork" v-for="(artwork, i) in store.scannedArtwork" :key="i">
          <v-card-title>{{ artwork.titleText }}</v-card-title>
          <v-card-subtitle>{{ artwork.classification }}</v-card-subtitle>
          <v-card-text>
            <a :href="artwork.imageLink" target="_blank">
              <v-img :src="artwork.imageLink" />
            </a>
          </v-card-text>
          <v-card-text>
            <h2>
              By {{ artwork.creatorIdentity }} - {{ artwork.creatorRole }}
            </h2>
            <h3>{{ artwork.creationDate }}</h3>
            <h3>{{ artwork.dimensionsDescription }}</h3>
            <h4>{{ artwork.materialsTechniquesDescription }}</h4>
  
            <p>Current Location: {{ artwork.repositoryGeographicLocation }}</p>
          </v-card-text>
        </v-card>
    </v-row>
 </v-container>
</template>

<script>

import {store} from '../store'

export default {
  name: 'ConnectWallet',

  data () {
      return {
        store
      }
    },
  mounted () {
  },
  methods: {
     
  }
}
</script>

