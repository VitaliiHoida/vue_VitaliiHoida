<template>
  <button
    class="btn btn-primary"
    type="button"
    @click="send"
    :disabled="!enabled"
  >
    Send Data
  </button>
</template>

<script>
export default {
  props:{
    enabled: Boolean,
  },
  methods:{
    send(){
      this.$emit('sendForm');
    },
  }
};
</script>

<style>
</style>