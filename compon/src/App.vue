<template>
  <div class="wrapper">
    <app-button :name="'Reset Filter'"></app-button>
    <hr/>
    <app-button :name="'Reset'" :variant="'orange'"></app-button>
    <hr/>
    <app-button :name="'remove'" :variant="'red'" :tt="'uppercase'"></app-button>
    <hr/>
    <app-button icon :icon-src="require('@/assets/logo.png')" :variant="true ? 'icon-active' : ''"></app-button>
    <app-button icon :icon-src="require('@/assets/logo.png')" style="margin-left: 10px;"></app-button>
    <hr/>
    <app-button :name="'add to cart'" :tt="'uppercase'" :variant="'colored'" :pdng="'23px 63px'" :br="'12px'" style="margin-right: 10px;"></app-button>
    <app-button :name="'buy'" :tt="'uppercase'" :variant="'bordered'" :pdng="'23px 63px'" :br="'12px'"></app-button>
    <hr/>
    <app-button :name="'14-inch'" :variant="'variant-select' + true ? 'variant-select-active' : ''" :pdng="'23px 35px'" :br="'12px'"></app-button>
    <app-button :name="'24-inch'" :variant="'variant-select'" style="margin-left: 10px;" :pdng="'23px 35px'" :br="'12px'"></app-button>
    <hr/>
    <app-button :name="'white'" :variant="'filter-select' + true ? 'filter-select-active' : ''" :pdng="'16px 32px'" :br="'7px'"></app-button>
    <app-button :name="'black'" :variant="'filter-select'" style="margin-left: 10px;" :pdng="'16px 32px'" :br="'7px'"></app-button>
    <hr/>
    <app-button :name="'Add to cart'" :variant="'bordered'" :pdng="'18px 92px'" :br="'12px'" :bw="'2px'"></app-button>
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
  padding: 100px;
  max-width: 700px;
  margin: 0 auto;
}
</style>
