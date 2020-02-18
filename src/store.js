import vuex from 'vuex'
import vue from 'vue'
import axios from 'axios'
// import Router from 'vue-router'
import router from '@/router/index'; 

vue.use(vuex,axios)


export default new vuex.Store({
    state: {
        stateLogin: 0,
        userData: [],
        loading: false,
    },
    getters: {
        getUser : state => {
            return state.userData
        },
        getLogin: state => {
            return state.stateLogin
        }
    },
    mutations: {
        LOGIN(state, payload){
            state.stateLogin = payload
        },
        SET_USER(state, payload){
            state.userData = payload
        }
    },
    actions: {
        authLogin({commit,payload}, data ){
            console.log(data.username+' ' +data.password)
            // console.log(payload)
            axios
                .post('http://localhost/api_ujian/api/users/auth',{
                    username: data.username,
                    password: data.password
                })
                    .then(data => {
                        console.log(data.data.data)
                        commit('SET_USER', data.data.data[0])
                        commit('LOGIN', data.data.data[0].id)
                        setTimeout( ()=> {
                            router.push('/')
                        },500)
                        // localStorage.setItem('token',token)
                    }).catch(err => {
                        console.log(err)
                        // return false;
                    })
        },
        logOut(){
            
        },
        checkLogin(){

        },
        getAllUser(){
            console.log(process.env.VUE_APP_API)
        }
    },
})