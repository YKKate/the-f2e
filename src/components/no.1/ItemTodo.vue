<template>
  <div v-if="id" class="item" :class="{'top': pin, 'done': completed}">
    <div class="title-box">
      <div class="checkbox" @click="clickCompleted"></div>
      <div class="content" @click="editOpen = !editOpen">
        <p v-show="!editOpen" class="title">{{ title }}</p>
        <input v-show="editOpen" type="text" class="title" v-model="todoTitle">
        <div v-show="!editOpen" class="info">
          <i v-if="deadLine && deadLine != ''" class="deadline icon-calendar">{{ deadlineDate }}</i>
          <i class="icon-file-o"></i>
          <i class="icon-commenting-o"></i>
        </div>
      </div>
      <div v-show="!editOpen" class="controls">
        <i v-show="!pin" class="star icon-star-o" @click="targetTop"></i>
        <i v-show="pin" class="star icon-star" @click="targetTop"></i>
        <i class="edit icon-pen-angled2" @click="editOpen = !editOpen"></i>
      </div>
    </div>
    <div class="edit-content" :class="{'edit': editOpen}">
      <div class="content">
        <div class="field">
          <p class="title">
            <i class="icon-calendar"></i>
            Deadline
          </p>
          <div class="field-content">
            <input type="date" v-model="date">
            <input type="time">
          </div>
        </div>
        <div class="field">
          <p class="title">
            <i class="icon-file-o"></i>
            File
          </p>
          <div class="field-content">
            <input type="file">
            <div class="add-file"></div>
          </div>
        </div>
        <div class="field">
          <p class="title">
            <i class="icon-commenting-o"></i>
            Comment
          </p>
          <div class="field-content">
            <textarea placeholder="Type your memo here…" v-model="todoComment"></textarea>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button class="btn-cancel" @click="editOpen = false">
          <i class="icon-x">Cancel</i>
        </button>
        <button class="btn-add" @click="saveTask">
          <i class="icon-plus">Save</i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
moment.locale('zh-TW')
export default {
  name: 'ItemTodo',
  props: ['id', 'top', 'done', 'title', 'deadLine', 'comment'],
  data () {
    return {
      editOpen: false,
      completed: this.done,
      pin: this.top,
      todoTitle: this.title,
      todoComment: this.comment,
      date: this.deadLine
    }
  },
  computed: {
    deadlineDate () {
      return moment(this.date).format('M/DD')
    }
  },
  methods: {
    clickCompleted () {
      // this.$emit('completed', this.id)
      this.completed = !this.completed
    },
    targetTop () {
      this.pin = !this.pin
    },
    saveTask () {
      const saveData = {
        id: this.id,
        title: this.todoTitle,
        comment: this.todoComment
      }
      this.$emit('save', saveData)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/no.1/_variable.scss';
.item {
  background-color: #F2F2F2;
  border-radius: 5px;
  transition: .3s;
  &:hover {
    background-color: darken(#F2F2F2, 3%);
    transform: translate(-2px, -2px);
    box-shadow: 2px 2px 10px 0 darken(#F2F2F2, 20%);
  }
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  &.top {
    background-color: #FFF2DC;
  }
  &.done {
    .checkbox {
      position: relative;
      background-color: #4A90E2;
      &::before {
        content: '✔';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        @include rem('font-size', 18px);
      }
    }
    .content {
      p.title {
        text-decoration: line-through;
      }
      .info {
        display: none;
      }
    }
  }
  .title-box {
    padding: 25px 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .checkbox {
    $size: 24px;
    flex: none;
    height: $size;
    line-height: $size;
    width: $size;
    background-color: #fff;
    border-radius: 2px;
    border: none;
    cursor: pointer;
  }
  .content {
    flex: 1;
    margin-left: 16px;
    p.title {
      @include rem('font-size', 24px);
    }
    input.title {
      flex: 1;
      // margin-left: 16px;
      border: none;
      color: #000;
      background-color: transparent;
      @include rem('font-size', 24px);
      &:focus {
        outline: none;
      }
      @include placeholder {
        color: #000;
        @include rem('font-size', 24px);
      }
    }
    .info {
      margin-top: 15px;
      i {
        margin-right: 5px;
        color: #757575;
        @include rem('font-size', 14px);
        &.deadline {
          &::before {
            margin-right: 5px;
          }
        }
      }
    }
  }
  .controls {
    i {
      @include rem('font-size', 24px);
      &.icon-star {
        color: #F5A623;
      }
    }
  }
  .edit-content {
    flex: none;
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: .3s;
    background-color: #F2F2F2;
    border-radius: 5px;
    box-shadow: 0 4px 4px 0 #C8C8C8;
    &.edit {
      max-height: 200vh;
    }
    > .title {
      padding: 25px 30px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      border-bottom: 2px solid #C8C8C8;
      .checkbox {
        $size: 24px;
        flex: none;
        height: $size;
        width: $size;
        background-color: #fff;
        border-radius: 2px;
        border: none;
      }
      input {
        flex: 1;
        margin-left: 16px;
        border: none;
        color: #000;
        background-color: transparent;
        @include rem('font-size', 24px);
        &:focus {
          outline: none;
        }
        @include placeholder {
          color: #000;
          @include rem('font-size', 24px);
        }
      }
      .controls {
        i {
          @include rem('font-size', 24px);
          &.edit {
            color: #4A90E2;
          }
        }
      }
    }
    .content {
      padding: 20px 70px 20px 90px;
      box-sizing: border-box;
      .field {
        &:not(:last-child) {
          margin-bottom: 30px;
        }
        .title {
          position: relative;
          margin-bottom: 8px;
          font-weight: bold;
          @include rem('font-size', 20px);
          @include rem('line-height', 24px);
          i {
            position: absolute;
            top: 50%;
            left: -30px;
            transform: translateY(-50%);
          }
        }
        .field-content {
          input {
            height: 35px;
            padding: 5px;
            box-sizing: border-box;
            @include placeholder {
              color: #C8C8C8;
              font-size: 1rem;
            }
          }
          textarea {
            width: 100%;
            height: 120px;
            padding: 5px;
            border: none;
            border-radius: 2px;
            box-sizing: border-box;
          }
        }
      }
    }
    .buttons {
      width: 100%;
      display: flex;
      button {
        flex: 1;
        height: 60px;
        border-color: transparent;
        transition: .3s;
        cursor: pointer;
        @include rem('font-size', 24px);
        @include rem('inle-height', 28px);
        &.btn-cancel {
          color: #D0021B;
          &:hover {
            background-color: #ddd;
          }
        }
        &.btn-add {
          color: #fff;
          background-color: #4A90E2;
          &:hover {
            background-color: darken(#4A90E2, 15%);
          }
        }
        i {
          &::before {
            margin-right: 10px;
            @include rem('font-size', 20px);
            @include rem('inle-height', 24px);
          }
        }
      }
    }
  }
}
</style>
