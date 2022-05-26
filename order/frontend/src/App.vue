<template>
  <div class="mt-5">
    <h1 class="mb-3 text-center">Оформление заказа</h1>
    <CartTable/>
    <FormKit
        id="order-form"
        @submit="submitOrder"
        type="form"
        v-model="formData"
        :actions="false"
    >
      <div class="d-flex container mt-5">

        <div class="col-8 me-2 mt-1">
          <OrderForm/>
        </div>
        <div class="col-4">
          <OrderConfirmation/>
        </div>

      </div>
    </FormKit>

  </div>


</template>

<script>
import CartTable from "@/components/CartTable";
import OrderForm from "@/components/OrderForm";
import OrderConfirmation from "@/components/OrderConfirmation";

import {ref} from 'vue'

export default {
  name: 'App',
  data() {
    return {
      formData: ref({})
    }
  },
  methods: {
    submitOrder(data) {
      this.$store.commit('UPDATE_ORDER_FORM', data)
      let cart = JSON.parse(JSON.stringify(this.$store.state.cart))
      for (let item of cart)
        item.product_variant = item.product_variant.id
      this.axios.post('order/create', {
        order_data: data,
        cart: cart
      }).then(response => {
        console.log(response.data)
      })

    }
  },
  components: {
    OrderConfirmation,
    OrderForm,
    CartTable
  }
}
</script>

<style>

</style>
