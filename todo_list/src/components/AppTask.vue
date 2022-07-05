<template>
  <div class="task">
    <div class="task-info">
      <h3 class="task__title">{{ title }}</h3>
      <p class="task__desc">{{ description }}</p>
      <div class="tag" :class="tagStyle" :style="tagStyles">{{ tag?.content }}</div>
    </div>
    <div class="btns">
      <button class="task__done">✔️</button>
      <button class="task__done">
        <img src="@/assets/icons/create-outline.svg" alt="edit" />
      </button>
      <button class="task__done">
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
    diff:{
      type: String,
      required: true
    },
    done:{
      type: Boolean,
      default: false
    },
  },
  computed:{
    tagStyle () {
      let className = "";
      switch (this.tag.id){
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
  height: 30px;
  width: 30px;
  border: none;
  background-color: unset;
}

.task__done img {
  width: inherit;
  height: inherit;
}

.task__done:hover {
  cursor: pointer;
  border-radius: 4px;
  background-color: #9ee493bb;
}

.task-info .tag {
  border-radius: 10px;
  padding: 5px;
  display: inline-block;
  width: 75px;
  text-align: center;
  color: #fff;
}

.btns {
  display: flex;
  align-items: center;
}

.sport{
  background: #19b994;
  border-color: #16836a;
}
.work{
  background: #c8238e;
  border-color: #85207d;
}
.personal{
  background: #979ddf;
  border-color: #4216ea;
}
.study{
  background: #19b994;
  border-color: #16836a;
}
.leisure{
  background: #19b994;
  border-color: #16836a;
}

</style>