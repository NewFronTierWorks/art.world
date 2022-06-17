<template>
  <v-container fluid>
    <v-row class="pa-8">
      <v-col cols="12" lg="6" sm="12">
          {{scannedArtwork}}
        <v-card v-for="(artwork, i) in scannedArtwork" :key="artwork[i]">
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
            <h4>{{ artwork.materialsTechniquesDescription }}</h3>

          <p>Known Location: {{artwork.repositoryGeographicLocation}}</p>
          </v-card-text>
        </v-card>
        <v-card dark class="pa-5 mt-3">
          <h2 class="decode-result">
            Scan Result:<br />
            <b>{{ result }}</b>
          </h2>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  components: {  },
  data() {
    return {
      validJWT: false,
      haveScan: false,
      result: {},
      error: "",
    };
  },
  computed: mapState([
      'scannedArtwork'
  ]),
  methods: {   
  },
};
</script>

