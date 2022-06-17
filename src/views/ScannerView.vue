<template>
<v-container>
  <qr-scanner/>
</v-container>

</template>

<script>
  import QrScanner from '../components/QRScanner'

  export default {
    name: 'ScannerView',

    components: {
      QrScanner
    },
  }
</script>

<style scoped>
h1, h2 {	font-family: Impact,Haettenschweiler,Franklin Gothic Bold,Charcoal,Helvetica Inserat,Bitstream Vera Sans Bold,Arial Black,sans serif; text-transform: uppercase;
}
.v-card__text, .v-card__title {
  word-break: normal !important;
}
</style>