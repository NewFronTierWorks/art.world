<template>
<v-container>
  <start-menu-box />
  <connect-wallet />
  <token-creator-directory />
</v-container>
</template>

<script>
  import StartMenuBox from '../components/StartMenuBox'
  import ConnectWallet from '../components/ConnectWallet'
  import TokenCreatorDirectory from '../components/TokenCreatorDirectory'

  export default {
    name: 'EntryWay',

    components: {
      StartMenuBox,
      ConnectWallet,
      TokenCreatorDirectory
    },
  }
</script>
