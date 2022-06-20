<template>
<v-container>
  <start-menu-box />
  <connect-wallet />
</v-container>
</template>

<script>
  import StartMenuBox from '../components/StartMenuBox'
  import ConnectWallet from '../components/ConnectWallet'

  export default {
    name: 'EntryWay',

    components: {
      StartMenuBox,
      ConnectWallet,
    },
  }
</script>
