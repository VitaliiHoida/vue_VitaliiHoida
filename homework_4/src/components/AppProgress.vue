<template>
  <div class="progress">
    <div class="progress-bar" :style="width"></div>
  </div>
</template>

<script>
export default {
  props: {
    val: Number,
  },
  computed: {
    width() {
      return {
        width: this.val + "%",
      };
    },
  },
};
</script>

<style>
</style>