import Vue from 'vue'
import store from '@/store'
import app from '@/main'; 
import VueRouter from 'vue-router'

// import Dashboard from '@/components/admin/contents/Dashboard'
const Dashboard = r => require.ensure([], () => r(require('@/components/admin/contents/Dashboard')), 'big-pages')
const Gis = r => require.ensure([], () => r(require('@/components/admin/contents/Gis')), 'big-pages')
const Users = r => require.ensure([], () => r(require('@/components/admin/contents/Users')), 'big-pages')
const Null404 = r => require.ensure([], () => r(require('@/components/admin/contents/404')), 'big-pages')
// import DataQuest from '@/components/admin/contents/DataQuest'
import Login from '@/components/Login'
import User from '@/components/client/User'
// import Dashboard from '@/components/admin/Dashboard'

Vue.use(VueRouter)




const router = new VueRouter({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Dashboard,
			beforeEnter(to, from, next){
				if(store.getters.getLogin == 0){
					router.push('/Dashboard')					
					// router.push('/login')
				}else{
					next()
					router.push('/Dashboard')					
				}
			}			
		},
		{
			path: '/Dashboard',
			name: 'Dashboard',
			component: Dashboard,
			beforeEnter(to, from, next){
				// if(store.getters.getLogin === 0){
					// router.push('/login')
				// }else{
					next()
				// }
			}
		},
		{
			path: '/Gis',
			name: 'Gis',
			component: Gis,
			beforeEnter(to, from, next){
				// if(store.getters.getLogin === 0){
					// router.push('/login')
				// }else{
					next()
				// }
			}
		},	
		{
			path: '/AddLoc',
			name: 'AddLoc',
			component: Null404,
			beforeEnter(to, from, next){
				// if(store.getters.getLogin === 0){
					// router.push('/login')
				// }else{
					next()
				// }
			}
		},
		{
			path: '/Level',
			name: 'Level',
			component: Null404,
			beforeEnter(to, from, next){
				// if(store.getters.getLogin === 0){
					// router.push('/login')
				// }else{
					next()
				// }
			}
		},
		{
			path: '/Profile',
			name: 'Profile',
			component: Null404,
			beforeEnter(to, from, next){
				// if(store.getters.getLogin === 0){
					// router.push('/login')
				// }else{
					next()
				// }
			}
		},	
		{
			path: '/Access',
			name: 'Access',
			component: Null404,
			beforeEnter(to, from, next){
				// if(store.getters.getLogin === 0){
					// router.push('/login')
				// }else{
					next()
				// }
			}
		},
		{
			path: '/Menus',
			name: 'Menus',
			component: Null404,
			beforeEnter(to, from, next){
				// if(store.getters.getLogin === 0){
					// router.push('/login')
				// }else{
					next()
				// }
			}
		},	
		{
			path: '/Setting',
			name: 'Setting',
			component: Null404,
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
		{
			path: '/users',
			name: 'users',
			component: Users,
			beforeEnter(to, from, next){
				// if(store.getters.getLogin == 0){
					// router.push('/login')
				// }else{
					next()
				// }
			}
		},			 		   
	],
	mode: 'history',
	base: '/dev/dashboard/'
})

router.beforeEach((to, from, next) => {
	console.log(' '+app)
	// app.loading = true	
	// loading
	next()
}) 

router.afterEach((to, from, next) => {
	// app.loading = false
	// console.log('load end '+app.loading)

}) 

export default router;