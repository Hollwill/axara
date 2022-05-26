<template>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">Товар</th>
      <th scope="col">Размер</th>
      <th scope="col">Цвет</th>
      <th scope="col">Количество</th>
      <th scope="col">Цена</th>
    </tr>
    </thead>
    <tbody>
    <TableItem
        v-for="(item, index) in cart_items"
        v-bind:item="item"
        v-bind:index="index"
        v-bind:key="index"
    />
    </tbody>
  </table>
</template>

<script>
import TableItem from "@/components/TableItem";

export default {
  name: "CartTable",
  components: {TableItem},
  computed: {
    cart_items() {
      return this.$store.state.cart
    }
  },

  mounted: function () {
    this.$store.dispatch('fetchCart')
  },
}
</script>

<style scoped>

</style>