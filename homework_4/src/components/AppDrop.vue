<template>
  <div class="custom-select-wrapper" 
       :class="{ 'open-dropdown': shown }" 
       >
    <div class="input-wrapper">
      <label> {{ lbl }} </label>
<!--  @click.stop - запрещает ивент клика по документу для сворачивания списка    -->
      <input
        type="text"
        class="custom-select"
        readonly="readonly"
        @click.stop="show"
        :value="default_item"
      />
      <ul class="droplist">
        <li v-for="(item, i) in values" :key="item" @click="choose(i)" :class="{'hidden' : item == this.default_item}">
          <span> {{ item }} </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    default_item: String,
    values: Array,
    shown: Boolean,
    lbl: String,
  },
  methods: {
    show() {
      this.$emit("show-drop");
    },
    choose(i) {
      let value = this.values[i];
      this.$emit("show-drop");
      this.$emit("choose-drop", value);
    },
  },
};
</script>

<style>
.custom-select-wrapper .input-wrapper {
  background-color: #fff;
}

.custom-select-wrapper .input-wrapper input[type="text"] {
  border: 0;
  padding: 1px 5px;
  cursor: pointer;
  outline: none;
  width: 100%;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
}

.custom-select-wrapper.open-dropdown ul {
  border: 1px solid #ced4da;
}

.custom-select-wrapper ul {
  border: none;
  list-style: none;
  background-color: #fff;
  border-radius: 0.375rem;
  padding: 0;
  height: 0;
  overflow: hidden;
  margin: 5px 0 0 0;
  transition: 0.1s ease-out;
  position: absolute;
  width: auto;
  left: 0;
  right: 0;
}

.custom-select-wrapper ul li {
  line-height: 24px;
  font-size: 24px;
  padding: 7px 15px;
}

.custom-select-wrapper ul li:hover {
  background-color: #0d6efd;
}

.custom-select-wrapper.open-dropdown ul {
  height: auto;
  transition: 0.1s ease-in;
}

.custom-select-wrapper {
  position: relative;
  cursor: pointer;
  width: 50%;
}

li.hidden{
  display:none;
}
</style>
