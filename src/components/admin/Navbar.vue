<template>

    <vueCustomScrollbar class="sidebar-content">
        <div class="nav-container">
            <nav id="main-menu-navigation" class="navigation-main">

                <div class="nav-lavel">Applications</div>
                <div v-ripple class="nav-item" :class="[currentPage.includes('/Dashboard') ? activeClass : '']">
                    <router-link to="/Dashboard" exact><i class="ik ik-bar-chart-2"></i><span>Dashboard</span></router-link>
                </div>

                <div class="nav-lavel">Management Questions</div>
                <div v-ripple class="nav-item" :class="[currentPage.includes('DataQuestion') ? activeClass : '']">
                    <router-link active-class="active" to="/Gis" ><i class="ik ik-layers"></i><span>GIS</span></router-link>
                </div>                
                <div class="nav-item">
                    <div v-ripple class="nav-item" :class="[currentPage.includes('AddLoc') ? activeClass : '']">
                        <router-link active-class="active" to="/AddLoc" ><i class="ik ik-layers"></i><span>Add Location</span></router-link>
                    </div>                     
                </div>
                <div class="nav-lavel">Management Level</div>
                <div v-ripple class="nav-item" :class="[currentPage.includes('Level') ? activeClass : '']">
                    <router-link active-class="active" to="/Level" ><i class="ik ik-layers"></i><span>Data Level</span></router-link>
                </div>
                <div class="nav-lavel">Configurations</div>
                <div v-ripple class="nav-item" :class="[currentPage.includes('Profile') ? activeClass : '']">
                    <router-link active-class="active" to="/Profile" ><i class="ik ik-user"></i><span>My Profile</span></router-link>
                </div>
                <div v-ripple class="nav-item" :class="[currentPage.includes('Users') ? activeClass : '']">
                    <router-link active-class="active" to="/Users" ><i class="ik ik-users"></i><span>Users</span></router-link>
                </div>
                <div v-ripple class="nav-item" :class="[currentPage.includes('Access') ? activeClass : '']">
                    <router-link active-class="active" to="/Access" ><i class="ik ik-user-check"></i><span>User Access</span></router-link>
                </div>
                <div v-ripple class="nav-item" :class="[currentPage.includes('Menus') ? activeClass : '']">
                    <router-link active-class="active" to="/Menus" ><i class="ik ik-menu"></i><span>Menus</span></router-link>
                </div>
                <div v-ripple class="nav-item" :class="[currentPage.includes('Setting') ? activeClass : '']">
                    <router-link active-class="active" to="/Setting" ><i class="ik ik-settings"></i><span>Settings</span></router-link>
                </div>  
            </nav>
        </div>
    </vueCustomScrollbar>

</template>

<script>
import vueCustomScrollbar from 'vue-custom-scrollbar'
export default {
  data() {
    return {
      activeClass: 'active'
    };
  },
  components:{
    vueCustomScrollbar
  },
  computed: {
      currentPage(){
          return this.$route.path
      }
  }
};
</script>

<style scoped>
.nav-item.active{
    background-color: rgba(25, 181, 254, 0.21);
}
.nav-item{
    transition: all ease 0.5s;
}
.nav-item:hover{
    background-color: rgba(25, 181, 254, 0.21);
}
</style>