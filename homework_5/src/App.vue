<template>
  <div class="wrapper">
    <div class="container">
      <button class="btn btn-primary btn-lg" @click="open">Show modal</button>
      <button class="btn btn-primary btn-lg" @click="open2">Show modal 2</button>
      <app-modal :isActive="show" @close-modal="close">
        <template #default>
          Some body
        </template>
      </app-modal>
      <app-modal :isActive="show2" @close-modal="close">
        <template #header>
          BIG TITLE
        </template>
        <template #default>
          Some body 2 
        </template>
      </app-modal>
      <div class="empty"></div>
    </div>
  </div>
</template>

<script>
import AppModal from './components/AppModal.vue'

export default {
  name: 'App',
  components: {
    AppModal,
  },
  data: () => ({
    show: false,
    show2: false
  }),
  methods: {
    open (){
      this.show = !this.show;
    },
     open2 (){
      this.show2 = !this.show2;
    },
    close (){
      this.show = false;
      this.show2 = false;
    },
  },
}
</script>

<style>
  .wrapper{
    margin: 50px auto 0;
  }

  .btn{
    margin: 20px;
  }
  .empty{
    height: 1000px;
    background: #324233;
  }
</style>