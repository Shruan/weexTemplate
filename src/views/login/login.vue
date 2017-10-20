<template>
  <div class="page-login">
    <!-- <view-box ref="viewbox">
      <box gap="10px 10px"> -->
        <div class="login-box">
          <div class="vux-demo">
            <h1 class="title">Welcome</h1>
          </div>
          <input class="input-class" type="text" v-model="username" />
          <input class="input-class" type="password" v-model="password" />
          <text class="btn-login" type="primary" @click="login">登录</text>
        </div>
      <!-- </box>
    </view-box> -->
  </div>
</template>

<script>
// import { Group, Cell, ViewBox, Box, XButton, Toast } from 'vux'

export default {
  components: {
    // Group,
    // Cell,
    // ViewBox,
    // Box,
    // XButton
  },
  data () {
    return {
      username: 13489145937,
      password: 123456
    }
  },
  created () {
    console.log(this.apiUrl)
  },
  methods: {
    login () {
      if (this.username == '' || this.password == '') {
        this.$vux.toast.text('账号密码不能为空', 'top', '#fff')
        return false
      }
      let url = this.apiUrl + '/tow/index/login'
      let data = {
        username: this.username,
        password: this.password,
        channel: 4,
        type: 1
      }
      let header = {
        'Access-Control-Allow-Origin': 'http://http://shangmenyi.biniukeji.com'
      }
      this.$http.post(url, data, {headers: header}).then(res => {
        res = res.data
        if (res) {
          if (res.code == 0) {
            let user = {
              token: res.token
            }
            this.$store.commit('user', user)
          }
          // this.$vux.toast.text('登录成功', 'top')
          this.$router.push({path: '/mine/mine'})
        }
      }).catch(() => {
          // this.$vux.toast.text('网络错误', 'top')
      })
    }
  }
}
</script>

<style>
  .title {
    font-size: 40px;
    color: #fff
  }
  .page-login {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .vux-demo {
    text-align: center;
  }
  .page-login .btn-login {
    margin-top: 25px;
  }
  .page-login .weui-btn {
    border-radius: 50px;
  }
  .input-class {
    width: 300px;
    height: 40px;
    margin-top: 25px;
    border-width: 1px;
    border-style: solid;
    border-color: #eee;
    border-radius: 50px;
    padding-left: 20px;
  }
  .login-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .weui-toast__content {
    color: #fff
  }
</style>
