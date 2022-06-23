<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title>
                        <h1>View Your Collection</h1>
                    </v-card-title>

                </v-card>
                <collection-grid></collection-grid>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import CollectionGrid from '../components/CollectionGrid.vue'

export default {
  name: 'CollectionView',
  components: { CollectionGrid },

  data: () => ({
  }),
}
</script>