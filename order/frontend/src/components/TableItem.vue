<template>
  <tr>
    <th scope="row">
      <div class="row mt-3">
        <img :src="item.product_variant.photos[0].photo" alt="" class="img-fluid col-auto item-image">
        <div class="item-info col">
          <p>{{ item.product_variant.product.name }}</p>
          <span>арт. {{ item.product_variant.vendor_code }}</span>
        </div>
      </div>
    </th>
    <td>
      <div class="mt-3">{{ item.size }}</div>
    </td>
    <td>
      <div class="mt-3">{{ item.product_variant.color.name }}</div>
    </td>
    <td>
      <div class="d-inline-block cart-element-count">
        <p class="fs-6 d-inline-block">Количество:</p>
        <button class="btn nav-icon" v-on:click="itemAction('sub')">
          <img src="@/assets/remove.svg" alt="remove">

        </button>
        <span>{{ item.quantity }}</span>
        <button class="btn nav-icon" v-on:click="itemAction('add')">
          <img src="@/assets/add.svg" alt="add">
        </button>
      </div>
    </td>
    <td class="price-block">
      <div class="mt-3">{{ item_price }}</div>
      <div class="delete-item"><a class="btn btn-primary" v-on:click="itemAction('del')">Удалить</a></div>

    </td>
  </tr>
</template>

<script>

export default {
  name: "TableItem",
  props: [
    'item',
    'index',
  ],
  methods: {
    itemAction: function (action) {
      this.$store.dispatch('cartItemAction', [this.index, action])

    }
  },
  computed: {
    item_price: function () {

      return this.item.quantity * this.item.product_variant.price

    }
  }
}
</script>

<style scoped>
.item-image {
  width: 150px;
  height: 200px;
}
.price-block {
  position: relative;
}
.delete-item {
  position: absolute;
  bottom: 10%;
}
</style>