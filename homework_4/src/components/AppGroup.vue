<template>
  <div class="form-group">
    <label>
      {{ name }}
      <transition             
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__flipOutY"
      >
        <span
          class="ico"
          ref="ico"
          :class="iconClass"
          v-if="activated"
          :key="iconClass"
        >
        </span>
      </transition>
    </label>
    <input
      class="form-control"
      type="text"
      @input="onInputComp"
      :value="value"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    name: String,
    validated: Boolean,
  },
  data() {
    return {
      activated: this.value !== "",
    };
  },
  computed: {
    iconClass() {
      return this.validated ? "check" : "cancel";
    },
  },
  methods: {
    onInputComp(e) {
      this.activated = true;
      this.$emit("field-input", e.target.value);
    },
  },
};
</script>

<style>
.form-group {
  margin: 10px 0;
}

.ico {
  margin: 0 0 0 15px;
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}

.check {
  background-image: url("@/assets/check.png");
}

.cancel {
  background-image: url("@/assets/cancel.png");
}
</style>