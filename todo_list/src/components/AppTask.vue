<template>
  <div class="task" :class="{'done' : done}">
    <div class="task-info">
      <h3 class="task__title">{{ title }}</h3>
      <p class="task__desc">{{ description }}</p>
      <div class="tag" :class="tagStyle">{{ tag?.content }}</div>
    </div>
    <div class="btns">
      <button class="task__done" type="button"  @click="doneTask" >✔️</button>
      <button class="task__done" type="button"  @click="edit">
        <img src="@/assets/icons/create-outline.svg" alt="edit" />
      </button>
      <button class="task__done" type="button" @click="del">
        <img src="@/assets/icons/close-circle-outline.svg" alt="remove" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppTask',
  props: {
    title:{
      type: String,
      required: true
    },
    description:{
      type: String,
      default: ""
    },
    tag:{
      type: Object,
      default: ()=>{},
    },
    done:{
      type: Boolean,
      default: false
    },
  },
  computed:{
    tagStyle () {
      let className = "";
      switch (this.tag?.id){
        case 0:
          className = "personal";
          break;
        case 1:
          className = "work";
          break;
        case 2:
          className = "sport";
          break;
        case 3:
          className = "study";
          break;
        case 4:
          className = "leisure";
          break;
      }
      return className;
    },
  },
  methods:{
    doneTask(){
      this.$emit('done-task');
    },
    del(){
      this.$emit('del-task');
    },
    edit(){
      this.$emit('edit-task');
    }
  }
}
</script>

<style scoped>
.task {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  max-width: 100%;
  border-bottom: 1px solid #2f4858;
}
.task:hover:not(.done) {
  background-color: #2f485811;
}
.task__title {
  font-size: 18px;
}
.task__desc {
  font-weight: 500;
  font-size: 16px;
}
.task__done {
  height: 40px;
  width: 40px;
  border: none;
  background-color: unset;
}
.task__done img {
  width: 100%;
  height: 100%;
}
.task__done:hover {
  cursor: pointer;
  border-radius: 4px;
  background-color: #9ee493bb;
}
.task-info .tag {
  border-radius: 5px;
  padding: 5px;
  display: inline-block;
  width: 75px;
  text-align: center;
  color: #fff;
  border-width: 1px;
  border-style: solid;
}
.btns {
  display: flex;
  align-items: center;
}
.sport{
  background: blue;
  border-color: darkblue;
}
.work{
  background: red;
  border-color: darkred;
}
.personal{
  background: green;
  border-color: darkgreen;
}
.study{
  background: grey;
  border-color: darkgrey;
}
.leisure{
  background: orange;
  border-color: orangered;
}

.done .tag, .done .task__title, .done .task__desc{
  opacity: 0.5;
}

.done .task__title, .done .task__desc{
  text-decoration: line-through;
}


</style>