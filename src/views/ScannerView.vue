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
