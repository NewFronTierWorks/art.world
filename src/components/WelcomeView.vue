<template>
  <v-container class="fill-height" dark>
    <v-row align="center" justify="center" class="fill-height">
      <div class="container">

        <v-img
          :src="require('../assets/NFTW-Square-Logo.svg')"
          alt="NFTW Logo"
          class="my-1"
          contain
          height="400"
        />
        <v-btn 
        class="btn pa-3"
        variant="outlined"
        icon
        size="x-large"
        to="entry-way"
        >Enter
        </v-btn>
   
      </div>
    </v-row>
 </v-container>
</template>

<script>

export default {
  name: 'HelloWorld',

  data: () => ({
  }),
}
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  max-width: 400px;
}

.container img {
  width: 100%;
  height: auto;
}

.container .v-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

</style>
