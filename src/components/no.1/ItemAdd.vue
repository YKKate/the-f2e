<template>
  <div class="add" :class="{'add-open': addOpen}">
    <button @click="addOpen=true">
      <i class="icon-plus">Add Task</i>
    </button>
    <div class="add-content">
      <div class="title">
        <div class="checkbox"></div>
        <input type="text" v-model="add.title" placeholder="Type Something Here...">
        <div class="controls">
          <i class="star icon-star-o"></i>
          <i class="edit icon-pen-angled"></i>
        </div>
      </div>
      <div class="content">
        <div class="field">
          <p class="title">
            <i class="icon-calendar"></i>
            Deadline
          </p>
          <div class="field-content">
            <input type="date" v-model="add.deadline">
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
            <textarea placeholder="Type your memo here…" v-model="add.comment"></textarea>
          </div>
        </div>
      </div>
      <div class="buttons">
        <button class="btn-cancel"  @click="addOpen=false">
          <i class="icon-x">Cancel</i>
        </button>
        <button class="btn-add" @click="addTask">
          <i class="icon-plus">Add Task</i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ItemAdd',
  data () {
    return {
      addOpen: false,
      add: {
        title: ''
      }
    }
  },
  methods: {
    addTask () {
      const addData = {...this.add}
      this.$emit('add', addData)
      this.add = {
        title: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/scss/no.1/_variable.scss';
.add {
  margin-bottom: 25px;
  > button {
    display: block;
    width: 100%;
    padding: 0;
    border: 1px solid #C8C8C8;
    max-height: 100vh;
    overflow: hidden;
    transition: .3s cubic-bezier(0,1,0,1);
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      transform: translate(-2px, -2px);
      box-shadow: 2px 2px 10px 0 darken(#F2F2F2, 20%);
    }
    .icon-plus {
      display: block;
      border-radius: 5px;
      color: #C8C8C8;
      padding: 20px 0;
      @include rem('font-size', 24px);
      @include rem('line-height', 28px);
    }
  }
  .add-content {
    max-height: 0;
    overflow: hidden;
    transition: .3s;
    background-color: #F2F2F2;
    border-radius: 5px;
    box-shadow: 0 4px 4px 0 #C8C8C8;
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
        @include rem('font-size', 24px);
        @include rem('inle-height', 28px);
        &.btn-cancel {
          color: #D0021B;
        }
        &.btn-add {
          color: #fff;
          background-color: #4A90E2;
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
  &.add-open {
    > button {
      max-height: 0;
      transition: .3s ease-in-out;
    }
    .add-content {
      max-height: 200vh;
    }
  }
}
</style>
