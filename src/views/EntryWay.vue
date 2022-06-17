<template>
<v-container>
  <start-menu-box />
  <connect-wallet />
  <collection-grid />
</v-container>
</template>

<script>
  import StartMenuBox from '../components/StartMenuBox'
  import ConnectWallet from '../components/ConnectWallet'
  import CollectionGrid from '../components/CollectionGrid'

  export default {
    name: 'EntryWay',

    components: {
      StartMenuBox,
      ConnectWallet,
      CollectionGrid
    },
  }
</script>
