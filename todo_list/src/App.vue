<template>
  <div class="wrapper">
    <button type="button" class="btn btn-primary add" @click="modalOpen = !modalOpen">Новая задача</button>
    <app-task v-for="(item, i) in localData"
              :key="item.title + i"
              :title="item.title"
              :tag="item.tag"
              :description="item.description"
              :diff="item.difficulty"
              :done="item.done">
    </app-task>
    <app-modal :is-active="modalOpen"
               @close-modal="closeModal">
      <input ref="input" placeholder="Новая задача" type="text" class="new_title" v-model="newData.title"/>
      <textarea placeholder="Описание" class="new_description" v-model="newData.description"></textarea>
      <app-dropdown :values="categories"
                    :default_item="newData.tag.content"
                    @choose-drop="choose">
      </app-dropdown>
      <template #footer>
        <button type="button" class="btn btn-success" @click="addTask">Добавить</button>
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
    newData: {
      title: '',
      description: '',
      tag: {},
    },
    localData: null,
  }),
  computed: {
    categories() {
      const arr = [];
      let local = JSON.parse(localStorage.getItem('localData'));
      local.forEach(item => {
        if (arr.findIndex(obj => obj.id === item.tag.id) === -1) {
          arr.push(item.tag);
        }
      });
      return arr;
    }
  },
  methods: {
    closeModal() {
      this.modalOpen = false;
    },
    saveData() {
      localStorage.setItem('localData', JSON.stringify(this.localData));
    },
    addTask() {
      this.localData.push(this.newData);
      this.closeModal();
    },
    choose(e) {
      this.newData.tag = e;
    }
  },
  watch: {
    'localData.length'() {
      this.saveData();
    }
  },
  created() {
    this.newData.tag = this.categories[0];
    this.localData = localStorage.getItem('localData') ? JSON.parse(localStorage.getItem('localData')) : this.defaultData;
  },
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
