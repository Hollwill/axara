<template>
  <div class="order-confirmation">
    <h3 class="mb-2">Итого</h3>
    <div class="d-flex justify-content-between mb-2">
      <p>Товары на сумму</p>
      <p>{{ fullPrice }} руб.</p>
    </div>
    <div class="d-flex justify-content-between mb-2">
      <p>Доставка:</p>
      <p>Бесплатно</p>
    </div>
    <h4>Доставка и оплата</h4>
    <p>Оплата: Онлайн-оплата</p>
    <hr>
    <div class="d-flex justify-content-between">
      <h4>Всего</h4>
      <h4>{{ fullPrice }} руб.</h4>
    </div>
    <hr>
    <FormKit
    type="submit"

    :classes="{
      input: 'btn btn-dark mt-2 mb-4 w-100'
    }"
    label="Подтвердить заказ"
  />


  </div>
</template>

<script>
export default {
  name: "OrderConfirmation",
  computed: {
    fullPrice() {
      return this.$store.state.fullPrice
    }
  },
  mounted() {
    this.$store.commit('UPDATE_FULL_PRICE')
  }
}
</script>

<style scoped>
.order-confirmation {
  background-color: rgb(244, 244, 244);
}
</style>