<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="12" lg="6">
        <v-card>
          <v-card-title>CDWA-NFTW IPFS Token Creator</v-card-title>
          <v-card-subtitle>Generate and Store the artwork metadata in IPFS and create a QR Code</v-card-subtitle>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="12">
                <v-card dark class="pa-4">
                  <v-text-field
                    label="Title Text"
                    :value="NftToMint.titleText"
                    :hint="formSchema.titleText"
                  ></v-text-field>
                  <v-text-field
                    label="IPFS Image Link"
                    :value="NftToMint.imageLink"
                    :hint="formSchema.imageLink"
                  ></v-text-field>
                </v-card>
                <v-text-field
                  label="Classification"
                  :value="NftToMint.classification"
                  :hint="formSchema.classification"
                ></v-text-field>
                <v-text-field
                  label="Catalog Level"
                  :value="NftToMint.catalogLevel"
                  :hint="formSchema.catalogLevel"
                ></v-text-field>
                <v-text-field
                  label="Object Work Type"
                  :value="NftToMint.objectWorkType"
                  :hint="formSchema.objectWorkType"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-text>
            <v-row>

            <v-col cols="12" sm="12" md="6">
              <v-text-field
                label="Creator Description"
                :value="NftToMint.creatorDescription"
                :hint="formSchema.creatorDescription"
              ></v-text-field>
              <v-text-field
                label="Creator Identity"
                :value="NftToMint.creatorIdentity"
                :hint="formSchema.creatorIdentity"
              ></v-text-field>
              <v-text-field
                label="Creator Role"
                :value="NftToMint.creatorRole"
                :hint="formSchema.creatorRole"
              ></v-text-field>
              <v-text-field
                label="Creation Date"
                :value="NftToMint.creationDate"
                :hint="formSchema.creationDate"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-text-field
                label="Dimension Description"
                :value="NftToMint.dimensionsDescription"
                :hint="formSchema.dimensionsDescription"
              ></v-text-field>
              <v-text-field
                label="Materials Technique Description"
                :value="NftToMint.materialsTechniquesDescription"
                :hint="formSchema.materialsTechniquesDescription"
              ></v-text-field>
              <v-text-field
                label="General Subject Terms"
                :value="NftToMint.generalSubjectTerms"
                :hint="formSchema.generalSubjectTerms"
              ></v-text-field>
              <v-text-field
                label="Source Brief Citation"
                :value="NftToMint.sourceBriefCitation"
                :hint="formSchema.sourceBriefCitation"
              ></v-text-field>
            </v-col>
            </v-row>
            <v-col cols="12" sm="12">
              <v-card dark class="pa-3">
                <v-text-field
                  label="Repository Geographic Location"
                  :value="NftToMint.repositoryGeographicLocation"
                  :hint="formSchema.repositoryGeographicLocation"
                ></v-text-field>
                <v-text-field
                  label="Repository Numbers"
                  :value="NftToMint.repositoryNumbers"
                  :hint="formSchema.repositoryNumbers"
                ></v-text-field>
              </v-card>
            </v-col>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="submitTokenToIpfs" block dark color="green"
              >Submit</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import CdwaNftwSchema from "@/assets/CDWA-NFTW-schema.json";
// import QrGenerator from "../components/QrGenerator.vue";
export default {
  name: "TokenForm",
  //   components: { QrGenerator },
  data() {
    return {
      ImageFile: {},
      NftToMint: {
        titleText: "",
      },
    };
  },
  mounted() {},
  methods: {
    submitTokenToIpfs() {
      console.log("Submit to IPFS");
      alert("Submit to IPFS");
    },
  },
  computed: {
    formSchema() {
      return CdwaNftwSchema;
    },
    ImageToUpload() {
      return this.ImageFile;
    },
  },
};
</script>