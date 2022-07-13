<template>
  <div class="wrapper">
    <app-button :icon="require('@/assets/logo.png')" bordered></app-button>
    <hr/>
    <app-button :name="'Reset Filter'" orange></app-button>
    <hr/>
    <app-button :name="'chekout'" uppercase bordered></app-button>
    <hr/>
    <app-button ></app-button>
  </div>
</template>

<script>
import AppButton from './components/AppButton.vue'

export default {
  name: 'App',
  components: {
    AppButton
  }
}
</script>

<style>
.wrapper{
  padding: 100 px;
  max-width: 700px;
  margin: 0 auto;
}
</style>
