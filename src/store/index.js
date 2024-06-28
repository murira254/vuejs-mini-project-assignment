import vuex from 'vuex'

import products from './modules/products'
import cart from './modules/cart'

export default new vuex.Store({
    state:{},
    getters:{},
    actions:{},
    mutations: {},
    modules:{
        products,
        cart,

    },
})