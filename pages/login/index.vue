<template>
    <div class="auth-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">{{ isLogin ? 'Sign in': 'Sign up'}}</h1>
        <p class="text-xs-center">
          <nuxt-link v-if="isLogin" to="/register">Need an account?</nuxt-link>
          <nuxt-link v-else to="/login">Have an account?</nuxt-link>
        </p>

        <ul class="error-messages">
          
          <template v-for="(messages,field) in errors">
            <li v-for="(message,index) in messages" :key="index">
              {{field}}{{message}}
            </li>
          </template>
        </ul>

        <form @submit.prevent="onSubmit">
          <fieldset class="form-group" v-if="!isLogin">
            <input class="form-control form-control-lg" 
            v-model="user.username"
            type="text" placeholder="Your Name">
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" 
            v-model="user.email" type="text" placeholder="Email">
          </fieldset>
          <fieldset class="form-group">
            <input class="form-control form-control-lg" 
            v-model="user.password" type="password" placeholder="Password">
          </fieldset>
          <button class="btn btn-lg btn-primary pull-xs-right">
            {{ isLogin ? 'Sign in': 'Sign up'}}
          </button>
        </form>
      </div>

    </div>
  </div>
</div>
</template>
<script>
import {login,register} from '@/api/user'
export default {
    name:'LoginIndex',
    computed: {
        isLogin (){
            return this.$route.name === 'login'
        }        
    },
    data () {
      return{
        user:{
          username:'',
          email: '',
          password: ''
        },
        errors:{}
      }
    },
    methods: {
        // 提交表单登录
        async onSubmit () {
          try{
            const {data} = this.isLogin ?
              await login({
                user: this.user
            })
            : await register({
                user: this.user
           })
           console.log(data)
            // 跳转到首页
           this.$router.push('/')
        }catch (err) {
          // console.log ('请求失败',err)
          this.errors=err.response.data.errors
        }
      }
    }
}
</script>
<style scoped>

</style>