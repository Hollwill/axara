<script setup>
import {createInput} from '@formkit/vue'
import MaskedTelInput from './MaskedTelInput'
const maskedTel = createInput(MaskedTelInput)
</script>
<template>
  <div class="form">

    <div class="form-item d-flex mb-3">
      <label class="col-4 "><span class="h5">Телефон</span><span class="form-star-required">*</span></label>
      <div class="col-8">
        <FormKit
            :type="maskedTel"
            name="phone"
            placeholder="xxx-xxx-xxxx"
            :validation="[['required'], ['matches', /^\d{10}/] ]"
            validation-label="телефон"
            :validation-messages="{
              matches: 'Формат номера должен быть: xxx-xxx-xxxx',
            }"
        />
      </div>
    </div>
    <div class="form-item d-flex mb-3">
      <label class="col-4 "><span class="h5">Почта</span><span class="form-star-required">*</span></label>
      <div class="col-8">
        <FormKit
            name="email"
            validation-label="почта"
            type="email"
            validation="required|length:5|*email"
        />
      </div>
    </div>
    <div class="form-item d-flex mb-3">
      <label class="col-4 "><span class="h5">Имя</span><span class="form-star-required">*</span></label>
      <div class="col-8">
        <FormKit
            name="name"
            type="text"
            validation-label="имя"
            validation="required"
        />
      </div>
    </div>
    <div class="form-item d-flex mb-3">
      <label class="col-4 "><span class="h5">Фамилия</span><span class="form-star-required">*</span></label>
      <div class="col-8">
        <FormKit
            name="subname"
            type="text"
            validation-label="фамилия"
            validation="required"
        />
      </div>
    </div>
    <div class="form-item d-flex mb-3">
      <label class="col-4 "><span class="h5">Населенный пункт</span><span class="form-star-required">*</span></label>
      <div class="col-8">
        <FormKit
            name="locality"
            type="text"
            validation-label="населенный пункт"
            validation="required"
        />
      </div>
    </div>
    <div class="form-item d-flex mb-3">
      <label class="col-4 "><span class="h5">Адрес доставки</span><span class="form-star-required">*</span></label>
      <div class="col-8">
        <FormKit
            name="deliver_address"
            type="text"
            validation-label="адрес доставки"
            validation="required"
        />
      </div>
    </div>
    <div class="form-item d-flex mb-3">
      <label class="col-4"><span class="h5">Коментарий</span></label>
      <div class="col-8">
        <FormKit
            name="comment"
            type="textarea"
        />
      </div>
    </div>

  </div>
</template>

<script>

export default {

  name: "OrderForm"
}
</script>

<style>
.form-star-required {
  color: red;
}

.form-item input, textarea {
  width: 100%;
}

.form-item ul {
  list-style-type: none;
}

.form-item li {
  color: red;
}

</style>