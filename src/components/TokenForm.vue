<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="6">
                <v-card width="420px">
                    <v-card-title>Create Token</v-card-title>
                    <v-card-text>
                        <v-text-field label="Title Text" :value="NftToMint.titleText" :hint="formSchema.titleText"></v-text-field>
                        <v-text-field label="Artist"></v-text-field>

                        <v-file-input 
                            v-model="ImageFile"
                            accept="image/*"
                        ></v-file-input>
                        {{ImageFile}}

                    </v-card-text>
                </v-card>

            </v-col>
            <v-col cols="12" sm="6">
                <v-card>
                    <qr-generator tokenAddress="QmW2E7Hq9WgbvGR6pFwL3pWR9LC1gi5tokQ2LSrFPYSV5P"/>
                </v-card>
            </v-col> 
        </v-row>
    </v-container>
</template>


<script>
import CdwaNftwSchema from '@/assets/CDWA-NFTW-schema.json'
import QrGenerator from "../components/QrGenerator.vue"
export default {
    name: 'TokenForm',
  components: {  QrGenerator },
  data () {
    return {
        ImageFile: {},
        NftToMint: {
            titleText : ""
        }
    }
  },
  mounted () {
  },
  methods: {
    
   
  },
  computed: {
      formSchema () {
         return CdwaNftwSchema
      },
      ImageToUpload () {
          return this.ImageFile
      }

  }
}
</script>