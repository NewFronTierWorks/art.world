<template>
<v-container>

  <token-form/>
  
</v-container>
</template>

<script>
  import TokenForm from '../components/TokenForm'
 

  export default {
    name: 'TokenCreator',

    components: {
      TokenForm,
      
    },
  }
</script>
