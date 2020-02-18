<template>
  <section> 
  <div class="login-page">
    <div class="login-box">
        <div class="logo">
            <a href="javascript:void(0);">Login Dashboard <b>V1</b></a>
            <small>Ujian Online version 1.0.0</small>
        </div>
        <div class="card">
            <div class="body">
                <form  @submit.prevent="login()">
                    <div class="msg">Sign in</div>
                    <div class="input-group">
                        <span class="input-group-addon">
                            <i class="material-icons">person</i>
                        </span>
                        <div class="form-line">
                            <input type="text" class="form-control" v-model="username" name="username" placeholder="Username" autofocus autocomplete="off">
                        </div>
                    </div>
                    <div class="input-group">
                        <span class="input-group-addon">
                            <i class="material-icons">lock</i>
                        </span>
                        <div class="form-line">
                            <input type="password" class="form-control" v-model="password" name="password" placeholder="Password" autofocus>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-8 p-t-5">
                            <input type="checkbox" name="rememberme" id="rememberme" class="filled-in chk-col-pink">
                            <label for="rememberme">Remember Me</label>
                        </div>
                        <div class="col-xs-4">
                            <button class="btn btn-block bg-pink waves-effect" type="submit">SIGN IN</button>
                        </div>
                    </div>
                    <div class="row m-t-15 m-b--20">
                        <div class="col-xs-6">
                            <a href="sign-up.html">Register Now!</a>
                        </div>
                        <div class="col-xs-6 align-right">
                            <a href="forgot-password.html">Forgot Password?</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>
  </section> 
<!-- 
  <section class="c-app flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <form @submit.prevent="login()">
        <div class="col-md-8">
          <div class="card-group">
            <div class="card p-4">
              <div class="card-body">
                <h1>Login</h1>
                <p class="text-muted">Sign In to your account</p>
                <div class="input-group mb-3">
                  <div class="input-group-prepend"><span class="input-group-text">
                        <i class="icon-user"></i>                      
                      </span></div>
                  <input class="form-control" v-model="username" type="text" placeholder="Username">
                </div>
                <div class="input-group mb-4">
                  <div class="input-group-prepend"><span class="input-group-text">
                    <i class="icon-lock"></i>
                      </span></div>
                  <input class="form-control" v-model="password" type="password" placeholder="Password">
                </div>
                <div class="row">
                  <div class="col-6">
                    <button class="btn btn-primary px-4"  v-on:click="login()">Login</button>
                  </div>
                  <div class="col-6 text-right">
                    <button class="btn btn-link px-0" type="button">Forgot password?</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="card text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <div class="card-body text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <button class="btn btn-lg btn-outline-light mt-3" type="button">Register Now!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </form>        
      </div>
    </div>
  </section> -->

</template>

<script>
import { mapMutations, mapActions } from "vuex";
    export default {
        name: 'Login',
        data(){
            return {
                msg: '',
                id: null,
                username: null,
                password: null,
            }
        },
        methods: {
            // ...mapMutations(['LOGIN']),
            ...mapActions(['authLogin', 'getAllUser']),
            login(){
              if(this.username && this.password){

                this.authLogin({username:this.username,password:this.password}).then( ()=>{
                  // this.msg = 'success login'
                })
              }else{
                console.log('null of value')
              }
            }
        },
        mounted(){
          console.log('ss')
            // this.getAllUser();
        }
    }
</script>
<style scoped>
.login-page {
  margin-top: 0;
  padding-top: 6%;
}
section{
    background-color: #00BCD4;
    margin-top: 0;
    height: 100vh;    
    /* padding-left: 0; */
    /* max-width: 360px; */
    /* margin: 5% auto; */
    /* overflow-x: hidden;                 */
}
</style>  