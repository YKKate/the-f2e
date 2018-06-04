<template>
  <div id="login">
    <div class="form">
      <div class="logo">
        <img src="/static/img/oto_hunter_logo.svg" alt="oto_hunter_logo">
      </div>
      <div class="label">
        <i class="icon-envelope"></i>
        <input type="email" placeholder="Enter E-mail">
      </div>
      <div class="label">
        <i class="icon-lock"></i>
        <input type="password" placeholder="Enter Password">
      </div>
      <p class="error-text" :class="{'error': this.error.status}">{{ this.error.errorText }}</p>
      <button class="login" @click="login">Login</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PageLogin',
  data () {
    return {
      error: {
        status: false,
        errorText: 'Error Text'
      }
    }
  },
  methods: {
    login () {
      if (this.error.status) {
        this.$router.push({name: 'PageIndex'})
      }
      this.error.status = !this.error.status
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/scss/_variable.scss';
#login {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #8AC54B;
  .form {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 500px;
    max-width: 95%;
    padding: 20px 40px;
    transform: translate(-50%, -50%);
    border: 1px solid $borderColor;
    border-radius: 5px;
    .logo {
      $paddingVertical: 17px;
      $paddingLeft: 10px;
      position: relative;
      display: block;
      padding-left: $paddingLeft;
      margin-bottom: 30px;
      text-align: center;
      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        height: 5px;
        width: 50%;
        bottom: -$paddingVertical / 2;
        background-color: #fff;
        border-radius: 2px;
        transform: translateX(-50%);
      }
      img {
        display: inline-block;
        width: 50%;
      }
    }
    .label {
      $iconWidth: 50px;
      background-color: #fff;
      border-radius: 15px;
      margin-bottom: 15px;
      padding: 5px;
      box-sizing: border-box;
      text-align: center;
      font-size: 0;
      i {
        display: inline-block;
        width: $iconWidth;
        vertical-align: middle;
        font-size: 1.3rem;
        color: $borderColor;
      }
      input {
        display: inline-block;
        vertical-align: middle;
        width: calc(100% - #{$iconWidth});
        border-color: transparent;
        background-color: transparent;
        font-size: 1rem;
        &:focus {
          outline: none;
        }
      }
    }
    .error-text {
      opacity: 0;
      color: red;
      font-size: 1.2rem;
      text-align: center;
      transition: opacity .3s;
      &.error {
        opacity: 1;
      }
    }
  }
  .login {
    display: block;
    width: 90%;
    margin: auto;
    margin-top: 50px;
    padding: 5px;
    border-radius: 5px;
    color: #fff;
    background-color: #124797;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color .3s;
    &:hover {
      background-color: darken($color: #124797, $amount: 10%);
    }
  }
}
</style>
