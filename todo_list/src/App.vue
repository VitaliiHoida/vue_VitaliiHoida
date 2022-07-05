<template>
  <div class="wrapper">
    <button type="button" class="btn btn-primary" @click="modalOpen = !modalOpen">Новая задача</button>
    <app-task v-for="(item, i) in defaultData"
              :key="item.title + i"
              :title="item.title"
              :tag="item.tag"
              :description="item.description"
              :diff="item.difficulty"
              :done="item.done">
    </app-task>
    <app-modal :is-active="modalOpen"
                @close-modal="close">
      <input ref="input" placeholder="Новая задача" type="text"/>
      <textarea placeholder="Описание"></textarea>
      <app-dropdown :values="categories"
                    :default_item="categories[0].content"

      ></app-dropdown>
    </app-modal>
  </div>
</template>

<script>
import AppTask from "@/components/AppTask.vue";
import AppModal from "@/components/AppModal.vue";
import AppDropdown from "@/components/AppDropdown.vue";

export default {
  name: 'App',
  components: {
    AppTask,
    AppModal,
    AppDropdown,
  },
  data:()=>({
    defaultData: [
      {
        title: "Запланировать Урок",
        description: "Подготовить шаблон компонента",
        tag: {
          id: 1,
          content: "Работа",
        },
        difficulty: "Легко",
        done: false,
      },
      {
        title: "Встретиться с девушкой",
        description: "Позвонить и договориться о встрече",
        tag: {
          id: 0,
          content: "Личное",
        },
        difficulty: "Легко",
        done: false,
      },
      {
        title: "Прочитать документацию по JS",
        description: "js",
        tag: {
          id: 3,
          content: "Учеба",
        },
        difficulty: "Легко",
        done: false,
      },
      {
        title: "Тренировка",
        description: "Сходить на тренировку",
        tag: {
          id: 2,
          content: "Спорт",
        },
        difficulty: "Легко",
        done: false,
      },
      {
        title: "Сыграть с другом",
        description: "Предложить сыграть в какую-то стратежку",
        tag: {
          id: 4,
          content: "Досуг",
        },
        difficulty: "Легко",
        done: false,
      },
    ],
    modalOpen: false,
    newData:{
      title:'',
      description:'',
      category: {},
    }
  }),
  computed:{
    categories(){
      const arr = [];

      this.defaultData.forEach(item => {
        if (arr.findIndex(obj => obj.id === item.tag.id) === -1){
          arr.push(item.tag);
        }
      });
      return arr;
    }
  },
  methods: {
    close(){
      this.modalOpen = false;
    }
  },
  created (){
    this.newData.category = this.categories[0];
  }
}
</script>

<style>
  .wrapper{
    padding: 50px;
  }
</style>
