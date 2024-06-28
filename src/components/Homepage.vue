<script>

  export default {
    data() {
      return {
          image: '../images/vinicius-amnx-amano-dbOV1qSiL-c-unsplash.jpg',
          url: 'https://www.vuejs.org/',
          stockDetails : [
          {
            itemNumber: 1,
            itemName : "GG MARMONT MINI SHOULDER BAG",
            itemPrice : 50000,
            itemQuantity : 30,
            itemImage: '../images/beautiful-elegance-luxury-fashion-green-handbag.jpg',
            description : "Made by the finest of crafters using the topmost leather and cashmere, the GG MARMONT MINI SHOULDER BAG is a masterpiece by itself"
        },
        {
            itemNumber: 2,
            itemName : "GUCCI JACKIE MEDIUM TOTE BAG",
            itemPrice : 1000,
            itemQuantity : 4,
            itemImage: '../images/green-accessory-leather-elegance-handbags.jpg',
            description:"The GUCCI JACKIE MEDIUM TOTE BAG is the epitome of perfection, made to last the bag is made from the finest fabrics in the market to give a quality feel and look "
        },
        {
            itemNumber: 3,
            itemName : "JACKIE 1961 MEDIUM SHOULDER BAG",
            itemPrice : 530000,
            itemQuantity : 30,
            itemImage: '../images/hand-bag-layout-with-place-text-women-s-accessories-jewellery-background-mockup-banner-fashion-accessories.jpg',
           description :"Old meets new with the JACKIE 1961 MEDIUM SHOULDER BAG.it combines a vintage design with modern fabrics to give it a premium finish"
            
        }, 
          ],
        }
    },

    methods() {
      // we shall add our functions here
    },

    computed(){
      //we use this when working with forms
    }
  }
</script>
<template>
    <v-card
      class="mx-auto"
      width="1000"
    >
      
  
      <v-carousel>
  <v-carousel-item
    src="/public/images/beautiful-elegance-luxury-fashion-green-handbag.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="/public/images/hand-bag-layout-with-place-text-women-s-accessories-jewellery-background-mockup-banner-fashion-accessories.jpg"
    cover
  ></v-carousel-item>

  <v-carousel-item
    src="/public/images/green-accessory-leather-elegance-handbags.jpg"
    cover
  ></v-carousel-item>
</v-carousel>

</v-card>
<v-card align="center">
        <v-card-item>
          <v-card-title>Welcome to shoppy online store</v-card-title>

          <v-card-subtitle>HANDBAGS FOR WOMEN</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Crafted in luxurious leather, canvas and precious materials, designer handbags for women include shoulder bags, crossbody bags, totes and more.
        </v-card-text>
      </v-card>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <v-divider></v-divider>
      <h3 class="text-center">What our customers say</h3>
      <v-divider></v-divider>
  <v-row>
    <v-col cols="12" md="4">
      <v-card
        subtitle="Nancy Mueni"
        text="only the best at shoppy"
        title="Good service"
      ></v-card>

      <div class="text-center text-caption"></div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <template v-slot:title>
          Good service
        </template>

        <template v-slot:subtitle>
          Rachael Ruto
        </template>

        <template v-slot:text>
        definetely worth it. Good customer service and only the best in premium bags
        </template>
      </v-card>

      <div class="text-center text-caption"></div>
    </v-col>

    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>Good service</v-card-title>

          <v-card-subtitle>Salome Harrington</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Good customer service 
        </v-card-text>
      </v-card>

      <div class="text-center text-caption"></div>
    </v-col>
  </v-row>

  </template>