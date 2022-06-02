<template>
    <v-container>
        <v-card width="420px">
            <v-card-title>Create Token</v-card-title>
            <v-card-text>
                <v-text-field label="Title"></v-text-field>
                <v-text-field label="Artist"></v-text-field>

                {{formSchema}}
            </v-card-text>
        </v-card>
    </v-container>
</template>


<script>
import CdwaNftw from '@/assets/CDWA-NFTW-example.json'
export default {
    name: 'TokenForm',
  components: {  },
  data () {
    return {
        CdwaNftw: {}
    }
  },
  mounted () {
  },
  methods: {
    
   
  },
  computed: {
      formSchema () {
         return CdwaNftw
      }

  }
}
</script>