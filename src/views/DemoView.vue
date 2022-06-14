<template>
<v-container class="fill-height" dark>
    <v-row align="center" justify="center" class="fill-height">
      <div class="container">
        <qr-generator tokenAddress="QmW2E7Hq9WgbvGR6pFwL3pWR9LC1gi5tokQ2LSrFPYSV5P"/>
      </div>
    </v-row>
</v-container>

</template>

<script>
  import QrGenerator from "../components/QrGenerator.vue";

  export default {
    name: 'DemoView',

    components: {
      QrGenerator
    },
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

.container .v-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

</style>