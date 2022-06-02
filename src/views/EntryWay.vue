<template>
<v-container>

  <start-menu-box />
</v-container>
</template>

<script>
  import StartMenuBox from '../components/StartMenuBox'

  export default {
    name: 'HomeView',

    components: {
      StartMenuBox
    },
  }
</script>
