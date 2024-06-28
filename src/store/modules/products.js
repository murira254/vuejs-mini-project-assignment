const state = {
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
const getters = {
	stock: (state) => state.stockDetails,
}
const actions = {

}
const mutations = {

}
export default {
	state,
	getters,
	actions,
	mutations
}

