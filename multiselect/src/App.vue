<template>
  <div class="wrapper">
    <h2 class="text-center mb-3">Выберите одно или несколько значений</h2>
    <app-select :values="defaultList"
                :default-values="resList"
                @choose-drop="choose">
    </app-select>
  </div>
</template>

<script>
import AppSelect from './components/AppSelect.vue'

export default {
  name: 'App',
  components: {
    AppSelect,
  },
  data: ()=>({
    defaultList:[
      {
        id: 0,
        value: 'Первый',
      },
      {
        id: 1,
        value: 'Второй',
      },
      {
        id: 2,
        value: 'Третий',
      },
      {
        id: 3,
        value: 'Четвертый',
      },
      {
        id: 4,
        value: 'Пятый',
      },
    ],
    resList:[],
  }),
  methods:{
    choose(e) {
      if (this.resList.includes(e)){
        let i = this.resList.indexOf(e);
        this.resList.splice(i,1);
      } else {
        this.resList.push(e);
      }
    }
  },
}
</script>

<style>
  .wrapper{
    max-width:700px;
    margin: 0 auto;
    padding: 100px 0;
  }
</style>
