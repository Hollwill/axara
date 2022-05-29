<script setup>
/* eslint-disable */
import {maska} from 'maska'

const props = defineProps({
  context: Object,
})
function handleInput(e) {
  props.context.node.input(e.target.dataset.maskRawValue)
  console.log(e.target.dataset.maskRawValue)
}

</script>

<template>
  <input @keyup="handleInput" type="tel" id="masked-tel" v-maska="'+7 (###) ###-##-##'">
</template>