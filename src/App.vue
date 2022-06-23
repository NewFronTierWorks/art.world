<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
      <v-btn class="d-flex align-center" to="/entry-way">
      NFTW-art.world
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn class="d-flex align-center" to="/demo">
      Demo
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn class="d-flex align-center" to="/view-collection">
      View Collection
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn
        href="https://newfrontierworks.com"
        target="_blank"
        text
      >
        <span class="mr-2">NFTW</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
h1, h2 {	font-family: Impact,Haettenschweiler,Franklin Gothic Bold,Charcoal,Helvetica Inserat,Bitstream Vera Sans Bold,Arial Black,sans serif; text-transform: uppercase;
}
.v-card__text, .v-card__title {
  word-break: normal !important;
}
</style>