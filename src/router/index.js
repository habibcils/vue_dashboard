import Vue from 'vue'
import store from '@/store'
import router from '@/router/index'; 
import Router from 'vue-router'

import Index from '@/components/Index'
import Login from '@/components/Login'
import User from '@/components/client/User'
import Dashboard from '@/components/admin/Dashboard'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Index',
			component: Index,
			beforeEnter(to, from, next){
				// if(store.getters.getLogin === 0){
					// router.push('/login')
				// }else{
					next()
				// }
			}
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
			// beforeEnter(to, from, next){
			// 	if(store.getters.getLogin != 0){
			// 		router.push('/')
			// 	}else{
			// 		next()
			// 	}
			// }			
		},
		{
			path: '/user',
			name: 'user',
			component: User,
			beforeEnter(to, from, next){
				if(store.getters.getLogin == 0){
					router.push('/login')
				}else{
					next()
				}
			}
		},
		{
			path: '/dashboard',
			name: 'dashboard',
			component: User,
			beforeEnter(to, from, next){
				if(store.getters.getLogin == 0){
					router.push('/login')
				}else{
					next()
				}
			}
		},		 		   
	],
	mode: 'history',
	// base: 'index.html'
})
