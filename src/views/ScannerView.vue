<template>
  <qr-scanner/>
</template>

<script>
  import QrScanner from '../components/QRScanner'

  export default {
    name: 'HomeView',

    components: {
      QrScanner,
    },
  }
</script>
