<template>
  <button type="button"
          @click="click"
          class="stndt-btn"
          :class="[{icon: icon}, variant]"
          :style="{fontsize: fs + 'px',
                   lineHeight: lh + 'px',
                   textTransform: tt,
                   padding: pdng,
                   borderRadius: br,
                   borderWidth: bw}">
    {{ name }}
    <img v-if="icon" :src="iconSrc">
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    name: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: ''
    },
    icon:{
      type: Boolean,
      default: false
    },
    iconSrc: {
      type: String,
      default: ''
    },
    fs: Number,
    lh: Number,
    tt: String,
    pdng: String,
    br:{
      type: String,
      default: 'auto'
    },
    bw:{
      type: String,
      default: 'auto'
    }
  },
  methods: {
    click() {
      this.$emit('btnClick');
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');

.stndt-btn {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #7B7B7B;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
}
.stndt-btn:hover, .stndt-btn:active {
  color: #FF7020;
}

.orange{
  color: #FF7020;
}
.orange:hover{
  color: #7B7B7B;
}

.red{
  color: #FF3535;
}
.red:hover{
  color: #7B7B7B;
}

.icon,
.icon-active,
.colored,
.bordered,
.variant-select,
.variant-select-active,
.filter-select,
.filter-select-active
{
  border: 1px solid;
}

.icon{
  border: 1px solid #D8D8D8;
  border-radius: 12px;
  padding: 15px;
  line-height: 0;
}
.icon:hover,
.icon-active{
  background: #FF7020;
  border-color: #ff7020;
}
.icon img{
  max-height: 22px;
}

.colored{
  background: #FF7020;
  color: #FBFBFB;
}
.colored:hover{
  border-color: #FF7020;
  color: #FF7020;
  background: #FBFBFB;
}

.bordered{
  background: #FBFBFB;
  color: #FF7020;
}
.bordered:hover{
  border-color: #FF7020;
  color: #FBFBFB;
  background: #FF7020;
}

.variant-select{
  color: #7B7B7B;
  border-color: #FFEADE;
}
.variant-select-active,
.variant-select:hover{
  background: rgba(255, 112, 32, 0.15);
  border-color: #ffeade;
  color: #FF7020;
}

.filter-select{
  border-color: #FFD6BE;
  color: #FF7020;
}
.filter-select-active,
.filter-select:hover{
  background: #FFE6D9;
  border-color: #FFE6D9;
  color: #FF7020;
}



</style>