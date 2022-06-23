<template>
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
</template>


<script>
import "@google-pay/button-element";

import { store } from "../store";

export default {
    name: 'PurchaseToken',
  components: {},
  data() {
    return {
      loading: false,
      absolute: true,
      overlay: false,
      store,
    };
  },

  methods: {
    collectArtwork() {
        console.log(this.store.scannedArtwork)
        this.store.artworkCollection.push(this.store.scannedArtwork);
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