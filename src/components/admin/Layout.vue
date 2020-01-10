<template>

    <div class="wrapper" v-bind:class="{'nav-collapsed':isActive}" >
        <Header/>
        <div class="page-wrap">
            <div class="app-sidebar colored" @mouseover="hovering(true)" @mouseout="hovering(false)"  v-bind:class="{ 'active' : hover}">
                <div class="sidebar-header">
                    <a class="header-brand" href="index.html">
                        <div class="logo-img">
                            <img src="http://localhost/all_assets/tk_theme/src/img/brand-white.svg" class="header-brand-img" alt="lavalite"> 
                        </div>
                        <span class="text">VUER's</span>
                    </a>
                    <button v-if="!isActive" type="button" class="nav-toggle" @click="toggleSidebar"><i data-toggle="expanded" class="ik ik-toggle-right toggle-icon"></i></button>
                    <button v-else type="button" class="nav-toggle" @click="toggleSidebar"><i data-toggle="expanded" class="ik ik-toggle-left toggle-icon"></i></button>
                    <button  id="sidebarClose" class="nav-close"><i class="ik ik-x"></i></button>
                </div>
                <Navbar/>
            </div>
            
            <div class="main-content">
                <div class="container-fluid">
                    <slot/>
                </div>
            </div>
            <RightSidebar/>
            <ChatPanel/>
            <Footer/>
            
        </div>
    </div>

</template>

<script>
import Header from '@/components/admin/Header.vue'
import Navbar from '@/components/admin/Navbar.vue'
import RightSidebar from '@/components/admin/RightSidebar.vue'
import ChatPanel from '@/components/admin/ChatPanel.vue'
import Footer from '@/components/admin/Footer.vue'

export default {
	components:{
        Header,
		Navbar,
        RightSidebar,
        ChatPanel,
        Footer,
	},
	name: "Index",
	data() {
		return {
            isActive:false,
            hover: false
		};
    },
    methods:{
        hovering(param){
            this.hover = param
            // console.log('hmm')
        },
        toggleSidebar(){
            this.isActive = !this.isActive
            // this.hover = true
        },
        expandSidebar(){
            this.isActive = false
        }
    }
};

require('@/assets/css/style.css');

</script>