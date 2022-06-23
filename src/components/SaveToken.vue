<template>
  <v-card class="mb-3">
    <!-- <v-card class="mb-3" > -->
    <v-card-title>Mint a Digital Art Collectible</v-card-title>
    <v-card-subtitle
      >Digital Art Collectible ownership DOES NOT represent real world artwork
      ownership.</v-card-subtitle
    >
    <v-card-text>
      <h2 class="blue--text">
        Current Minimum Price to Mint: $ {{ currentPriceToMint }}
      </h2>
      <h3>Current Number of Tokens: {{ numberOfTokens }}</h3>
    </v-card-text>

    <v-card-actions>
      <v-btn
        @click="overlay = !overlay"
        dark
        color="blue"
        block
        :loading="loading"
        >Collect Artwork</v-btn
      >
    </v-card-actions>
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
</template>

<script>
import "@google-pay/button-element";

import { store } from "../store";

export default {
    name: 'SaveToken',
  components: {},
  data() {
    return {
      numberOfTokens: 0,
      currentPriceToMint: 1,
      loading: false,
      absolute: true,
      overlay: false,
      store,
    };
  },

  methods: {
    mintToken() {
      alert("Mint Digital Collectible");
      this.numberOfTokens++;
      this.currentPriceToMint = this.numberOfTokens;
    },
     onLoadPaymentData: event => {
      console.log('load payment data', event.detail);
    },
    onError: event => {
      console.error('error', event.error);
    },
  },
};
</script>
