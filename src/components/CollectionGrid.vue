<template>
  <v-container class="fill-height" dark>
    <v-row align="center" justify="center" class="fill-height">
      <v-card v-show="artwork" v-for="(artwork, i) in store.scannedArtwork" :key="i">

          <v-card-title>{{ artwork.titleText }}</v-card-title>
          <v-card-subtitle>{{ artwork.classification }}</v-card-subtitle>
          <v-card-actions>
            <v-btn @click="overlay = !overlay" color="green" block dark>Purchase Digital Version</v-btn>
          </v-card-actions>
          <v-card-text>
            <a :href="artwork.imageLink" target="_blank">
              <v-img :src="artwork.imageLink" max-width="420px"/>
            </a>
          </v-card-text>
          <v-card-text>
            <h2>
              By {{ artwork.creatorIdentity }} - {{ artwork.creatorRole }}
            </h2>
            <h3>{{ artwork.creationDate }}</h3>
            <h3>{{ artwork.dimensionsDescription }}</h3>
            <h4>{{ artwork.materialsTechniquesDescription }}</h4>
  
            <p>Current Location: {{ artwork.repositoryGeographicLocation }}</p>
          </v-card-text>
          <v-overlay :absolute="absolute" :value="overlay">
      <v-row>
        <google-pay-button
          environment="TEST"
          button-type="buy"
          button-color="black"
          v-bind:paymentRequest.prop="{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: 'CARD',
                parameters: {
                  allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                  allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD'],
                },
                tokenizationSpecification: {
                  type: 'PAYMENT_GATEWAY',
                  parameters: {
                    gateway: 'example',
                    gatewayMerchantId: 'exampleGatewayMerchantId',
                  },
                },
              },
            ],
            transactionInfo: {
              totalPriceStatus: 'FINAL',
              totalPriceLabel: 'Total',
              totalPrice: '100.00',
              currencyCode: 'USD',
              countryCode: 'US',
            },
          }"
          v-on:loadpaymentdata="onLoadPaymentData"
          v-on:error="onError"
        ></google-pay-button>
      </v-row>
      <v-row>
        <v-btn color="success" @click="overlay = false"> Cancel </v-btn>
      </v-row>
    </v-overlay>
        </v-card>
    </v-row>
 </v-container>
</template>

<script>
import "@google-pay/button-element";

import {store} from '../store'

export default {
  name: 'ConnectWallet',

  data () {
      return {
        overlay: false,
        absolute: true,
        store
      }
    },
  mounted () {
  },
  methods: {
    onLoadPaymentData: event => {
      console.log('load payment data', event.detail);
    },
    onError: event => {
      console.error('error', event.error);
    },
     
  }
}
</script>

