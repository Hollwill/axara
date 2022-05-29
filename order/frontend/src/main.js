import {createApp} from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {plugin, defaultConfig} from '@formkit/vue'
import {ru} from '@formkit/i18n'
import Maska from 'maska'

const app = createApp(App)


function getCsrfToken() {
    return document.cookie.match("(^|;)\\s*" + "csrftoken" + "\\s*=\\s*([^;]+)")?.pop()
}

app.use(plugin, defaultConfig({
    locales: {ru,},
    locale: 'ru',
}))
app.use(VueAxios, axios)
app.use(Maska)
app.axios.defaults.baseURL = "http://127.0.0.1:8000/";
app.axios.defaults.headers.post['X-CSRFToken'] = getCsrfToken()
app.axios.defaults.headers.post['Content-Type'] = "application/json"
app.axios.defaults.headers.post['Accept'] = "application/json"


const store = createStore({
    state() {
        return {
            cart: [],
            orderForm: {},
            fullPrice: null
        }
    },
    actions: {
        async fetchCart({commit}) {
            try {
                const response = await app.axios.get('cart/get_cart')
                commit('SET_CART', response.data)
            } catch (error) {
                console.log(error)
            }
        },
        async cartItemAction({commit, state}, payload) {
            let index, action
            [index, action] = payload
            let action_urls = {'add': 'add_quantity', 'sub': 'sub_quantity', 'del': 'remove_from_cart'}

            let url = 'cart/' + action_urls[action]
            let response = await app.axios.post(url, {
                product_variant_id: state.cart[index].product_variant.id,
                size: state.cart[index].size
            })
            if (response.statusText === 'OK') {
                switch (action) {
                    case 'add':
                        commit('INCREMENT_CART_ITEM', index)
                        break
                    case 'sub':
                        commit('SUBSTRACT_CART_ITEM', index)
                        break
                    case 'del':
                        commit('DELETE_CART_ITEM', index)
                }
            }
            commit('UPDATE_FULL_PRICE')
        }
    },
    mutations: {
        SET_CART(state, responseData) {

            state.cart = responseData.cart
        },
        INCREMENT_CART_ITEM(state, index) {
            state.cart[index].quantity += 1
        },
        SUBSTRACT_CART_ITEM(state, index) {
            let quantity = state.cart[index].quantity
            if (quantity === 1) {
                state.cart.splice(index, 1)
            } else {
                state.cart[index].quantity -= 1
            }
        },
        DELETE_CART_ITEM(state, index) {
            state.cart.splice(index, 1)
        },
        UPDATE_ORDER_FORM(state, form) {
            state.orderForm = form
        },
        UPDATE_FULL_PRICE(state) {
            app.axios.get('cart/full_price').then( response => {
                state.fullPrice = response.data.full_price
            })
        }
    }
})
app.use(store)
app.mount('#app')
