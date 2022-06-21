<template>
  <div class="custom-select-wrapper" 
       :class="{ 'open-dropdown': shown }" 
       >
    <div class="input-wrapper">
      <input
        type="text"
        placeholder="Select Your Country (optional)"
        class="custom-select"
        readonly="readonly"
        @click="show"
        :value="value"
      />
      <i class="fa fa-angle-down" aria-hidden="true"></i>
      <ul class="droplist">
        <li v-for="(item, i) in values" :key="item" @click="choose(i)">
          <span> {{ item }} </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    default: String,
    values: Array,
    shown: Boolean,
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    show() {
      this.$emit("show-drop");
    },
    choose(i) {
      this.value = this.values[i];
      this.$emit("show-drop");
      this.$emit("choose-drop", this.value);
    },
  },
};
</script>

<style>
.custom-select-wrapper .input-wrapper {
  background-color: #fff;
  border: 1px solid #00000052;
  border-radius: 6px 6px 0 0;
  padding: 0 10px;
}

.custom-select-wrapper .input-wrapper input[type="text"] {
  border: 0;
  padding: 5px;
  cursor: pointer;
  outline: none;
  width: 100%;
}

.custom-select-wrapper ul {
  z-index: 1;
  border: 1px solid #00000052;
  border-top: none;
  list-style: none;
  background-color: #fff;
  border-radius: 0 0 6px 6px;
  padding: 0;
  height: 0;
  overflow: hidden;
  margin: 0;
  transition: 0.1s ease-out;
  position: absolute;
  width: auto;
  left: 0;
  right: 0;
}

.custom-select-wrapper ul li {
  line-height: 24px;
  font-size: 24px;
  padding: 12px 15px;
}

.custom-select-wrapper ul li:hover {
  background-color: #0a58ca;
}

.custom-select-wrapper.open-dropdown ul {
  height: auto;
  transition: 0.1s ease-in;
}

.custom-select-wrapper {
  position: relative;
  cursor: pointer;
  margin: 10px 0;
  width: 50%;
}

.custom-select-wrapper.open-dropdown i {
  transform: rotate(180deg);
  transition: 0.9s;
}

.custom-select-wrapper i {
  transition: 0.9s;
}
</style>
