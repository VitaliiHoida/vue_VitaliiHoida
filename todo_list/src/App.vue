<template>
  <div class="wrapper">
    <div class="app-header">
      <h2>Список дел</h2>
      <div class="task-counters">
        <p class="task-count">Всего: <strong>{{ localData.length }}</strong></p>
        <p class="taks-done-count">Выполнено: <strong>{{ tasksDoneCount }}</strong></p>
      </div>
      <button type="button" class="btn btn-primary add" @click="toggleModal">Новая задача</button>
    </div>

    <app-task v-for="(item, i) in localData"
              :key="item.title + i"
              :title="item.title"
              :tag="item.tag"
              :description="item.description"
              :done="item.done"
              @done-task="doneT(i)"
              @del-task="delT(i)"
              @edit-task="editT(i)">
    </app-task>
    <app-modal :is-active="modalOpen"
               @close-modal="toggleModal">
      <input ref="input" placeholder="Новая задача" type="text" class="new_title" v-model="newData.title"/>
      <textarea placeholder="Описание" class="new_description" v-model="newData.description"></textarea>
      <app-dropdown :values="categories"
                    :default_item="newData.tag?.content"
                    @choose-drop="choose">
      </app-dropdown>
      <template #footer>
        <button type="button" class="btn btn-success" @click="buttonAction" :disabled="btnDisabled">
          {{ buttonText }}</button>

      </template>
    </app-modal>
  </div>
</template>

<script>
import 'animate.css';
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
  data: () => ({
    defaultData: [
      {
        title: "Запланировать Урок",
        description: "Подготовить шаблон компонента",
        tag: {
          id: 1,
          content: "Работа",
        },
        done: false,
      },
      {
        title: "Встретиться с девушкой",
        description: "Позвонить и договориться о встрече",
        tag: {
          id: 0,
          content: "Личное",
        },
        done: false,
      },
      {
        title: "Прочитать документацию по JS",
        description: "js",
        tag: {
          id: 3,
          content: "Учеба",
        },
        done: false,
      },
      {
        title: "Тренировка",
        description: "Сходить на тренировку",
        tag: {
          id: 2,
          content: "Спорт",
        },
        done: false,
      },
      {
        title: "Сыграть с другом",
        description: "Предложить сыграть в какую-то стратежку",
        tag: {
          id: 4,
          content: "Досуг",
        },
        done: false,
      },
    ],
    modalOpen: false,
    newData: {
      title: '',
      description: '',
      tag: {},
      done: false,
    },
    localData: null,
    editMode: false,
    activeIndex: null,
  }),
  computed: {
    categories() {
      const arr = [];

      this.localData?.forEach(item => {
        if (arr.findIndex(obj => obj.id === item.tag.id) === -1) {
          arr.push(item.tag);
        }
      });
      return arr;
    },
    btnDisabled() {
      return !this.newData.title || !this.newData.title;
    },
    tasksDoneCount() {
      return this.localData.reduce((acc, item) => acc + (item.done ? 1 : 0), 0);
    },
    buttonText(){
     return this.editMode ? "Сохранить" : "Добавить";
    },
    buttonAction(){
      return this.editMode ? this.saveEditedT : this.addT;
    }
  },
  methods: {
    toggleModal() {
      this.modalOpen = !this.modalOpen;
      if (!this.modalOpen){
        this.newData = {
          title: '',
          description: '',
          tag: {},
          done: false,
        };
        this.editMode = false;
      }
    },
    saveData() {
      localStorage.setItem('localData', JSON.stringify(this.localData));
    },
    choose(e) {
      this.newData.tag = e;
    },
    addT() {
      const obj = Object.assign({}, this.newData);
      this.localData.push(obj);
      this.newData = {
        title: '',
        description: '',
        tag: {},
        done: false,
      };
      this.toggleModal();
    },
    doneT(i) {
      this.localData[i].done = !this.localData[i].done;
    },
    delT(i) {
      this.localData.splice(i, 1);
    },
    editT(i) {
      this.activeIndex = i;
      this.editMode = true;
      this.toggleModal();
      const obj = Object.assign({}, this.localData[i]);
      this.newData = obj;
    },
    saveEditedT(){
      this.localData[this.activeIndex] = { ...this.newData };
      this.toggleModal();
    }
  },
  watch: {
    localData: {
      handler() {
        this.saveData();
      },
      deep: true
    }
  },
  created() {
    this.newData.tag = this.categories[0];
    this.localData = localStorage.getItem('localData') ? JSON.parse(localStorage.getItem('localData')) : this.defaultData;
  }
  ,
}
</script>

<style>
.wrapper {
  max-width: 750px;
  margin: 20px auto;
  padding: 2rem 2rem 3rem;
  border: 2px solid #ced4da;
  border-radius: 1rem;
}

.btn.add {
  margin: 0 0 20px 10px;
}

.new_description, .new_title {
  width: 100%;
  margin: 0 0 10px 0;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  font-weight: 500;
  line-height: 30px;
}

@media screen and (max-width: 767px) {
  .wrapper {
    max-width: unset;
    width: calc(100% - 40px);
    padding: 1rem 0.5rem;
  }
}
</style>
