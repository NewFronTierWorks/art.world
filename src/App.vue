<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
      <div class="d-flex align-center">
      NFTW-art.world
      </div>

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
