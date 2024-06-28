<template>
    <h1>sale</h1>

    <div>
        <v-row>
        <v-col cols="12" md="4"  v-for="product in stock" :key=product>     
            <v-card
                class="mx-auto my-12"
                max-width="374"
            >
                <v-img
                    height="290"
                    :src="product.itemImage"
                    cover
                ></v-img>

                <v-card-item>
                    <v-card-title>{{product.itemName}}</v-card-title>
                </v-card-item>

                <v-card-text>
                    <div class="my-4 text-subtitle-1">{{product.itemPrice}}</div>
                    <div>{{ product.description }}</div>
                </v-card-text>

                <v-divider class="mx-4 mb-1"></v-divider>
                <v-card-actions>
                    <v-btn
                        color="blue"
                        text="Add to Cart"
                        block
                        border
                        @click="addToCart(product)"
                    ></v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        </v-row>
    </div>

</template>
    
   <script>
   import { mapActions, mapGetters } from 'vuex'
   export default{
   data(){
    return{
          products:[1,2,3,4,5,6,7,8,9,10],
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
           ],total:0,

           cartItems:[],
    }

   },
   methods:{
    calculateTotal(itemPrice){
        this.total += itemPrice },
        addToCart(product){
            this.cartItems.push(product)
            this.calculateTotal(product.itemPrice)
        },
        removeFromCart(product){
            this.cartItems.pop(product)
            this.total -= product.itemPrice
        }

   },
   computed: {
    ...mapGetters({
        stock:'stock'
    })
   }
   }
   </script>