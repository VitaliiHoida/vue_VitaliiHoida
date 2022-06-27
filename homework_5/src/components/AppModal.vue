<template>
  <div class="modal fade" :class="{ show: isActive }" tabindex="-1" @click="handleOutsideClick">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header"></slot>
          <button type="button" class="close" @click="close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot> </slot>
        </div>
        <div class="modal-footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
  },
  methods: {
    close() {
      this.$emit("close-modal");
    },
    handleOutsideClick(e) {
      if (!e.target.closest('.modal-dialog')) {
        this.close();
      }
    },
  },
  watch: {
    isActive (){
        this.isActive
        ? document.body.classList.add('modal-open')
        : document.body.classList.remove('modal-open');
    } 
  }

};
</script>

<style>
.show {
  display: block;
}

.modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto;
}

.fade.show{
    background: #0000008c;
}

.modal-open{
    overflow: hidden;
}
</style>