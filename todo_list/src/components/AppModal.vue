<template>
  <transition enter-active-class="animate__animated animate__lightSpeedInRight"
              leave-active-class="animate__animated animate__lightSpeedOutLeft">
    <div class="modala-overlay" v-if="isActive" ref="overlay"></div>
  </transition>
  <transition enter-active-class="animate__animated animate__backInDown"
              leave-active-class="animate__animated animate__backOutDown">
    <div class="modala" v-if="isActive">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" @click="close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot> </slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
  },
  emits:['closeModal'],
  methods: {
    close() {
      this.$emit('closeModal');
    },
    handleOutsideClick(e) {
      if (this.$refs.overlay.contains(e.target) && this.isActive) {
        this.close();
      }
    },
  },
  watch: {
    isActive() {
      if (this.isActive) {
        document.body.classList.add("modala-open");
        document.addEventListener("click", this.handleOutsideClick);
      } else {
        document.body.classList.remove("modala-open");
        document.removeEventListener("click", this.handleOutsideClick);
      }
    },
  },
};
</script>

<style>
.modala {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  max-width: 600px;
  height: fit-content;
  border-radius: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  background: #fff;
  z-index: 999;
  transform: none;
  border: 2px solid #ced4da;
}
.modala-open {
  overflow: hidden;
  padding: 0 17px 0 0;
}
.modala .btn:last-of-type {
  margin: 0 0 0 20px;
}
.modala-overlay {
  content: "";
  position: absolute;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: #2c3e50;
  opacity: 0.6;
}
.close {
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
}
.close:focus,
.close:hover {
  color: #000;
  text-decoration: none;
  opacity: 0.75;
}
.modal-header .close {
  padding: 15px;
  margin: -25px -15px -15px auto;
}
button.close {
  padding: 0;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
}
button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color !important;
}
.modal-header{
  min-height: 56px;
  align-items: end;
}
.modal-body{
  display: flex;
  flex-wrap:wrap;
}
.modal-header, .modal-footer, .modal-body, .modal-content{
  border:none;
}
.modal-content{
  border-radius: 1rem;
}
</style>
