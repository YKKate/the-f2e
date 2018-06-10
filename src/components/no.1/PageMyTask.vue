<template>
  <div id="my-task" class="page">
    <item-add
      @add="addTask"
    ></item-add>
    <div class="todo-list">
      <draggable v-model="todos" @end="dragEnd">
        <transition-group>
          <item-todo
            v-for="t in todos"
            :key="t.id"
            :id="t.id"
            :top="t.top"
            :title="t.title"
            :dead-line="t.deadline"
            :done="t.done"
            :comment="t.comment"
          ></item-todo>
        </transition-group>
      </draggable>
    </div>
    <p class="total">{{ todos.length }} task<span v-if="todos.length > 1">s</span> left</p>
  </div>
</template>
<script>
import ItemAdd from './ItemAdd.vue'
import ItemTodo from './ItemTodo.vue'
import draggable from 'vuedraggable'

export default {
  name: 'No1PageMyTask',
  data () {
    return {
      todos: [
        {
          id: 1,
          top: true,
          title: 'Type Something Here…',
          deadline: '2018-06-14'
        },
        {
          id: 2,
          top: false,
          title: 'Type Something Here…',
          comment: 'this is test~'
        },
        {
          id: 3,
          top: false,
          title: 'Type Something Here…',
          deadline: '2018-06-14',
          done: true
        }
      ]
    }
  },
  methods: {
    addTask (data) {
      const maxId = this.todos[this.todos.length - 1].id
      data.id = parseInt(maxId) + 1
      data.done = false
      this.todos.push(data)
    },
    dragEnd () {
      console.log(this.todos)
    }
  },
  components: {
    'item-add': ItemAdd,
    'item-todo': ItemTodo,
    draggable
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/scss/no.1/_variable.scss';

</style>
