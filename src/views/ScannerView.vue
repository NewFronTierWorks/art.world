<template>
<v-container>
  <qr-scanner/>
</v-container>

</template>

<script>
  import QrScanner from '../components/QRScanner'

  export default {
    name: 'HomeView',

    components: {
      QrScanner
    },
  }
</script>
