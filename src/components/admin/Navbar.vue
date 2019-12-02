<template>
    <div>
        <nav>
        <ul id="dropdown1" class="dropdown-content">
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li class="divider"></li>
            <li><a href="#!">three</a></li>
        </ul>
            <div class="container">
                <div class="nav-wrapper">
                    <router-link to="/" class="brand-logo">Ujian Online</router-link>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><router-link to="/user">User: {{getUser.name}}</router-link></li>
                        <li><router-link to="/login"><i class="material-icons right">logout</i>Logout</router-link></li>
                    </ul>
                    <div>
                        <!-- {{getUser}} -->
                    </div>
                </div>
            </div>
        </nav>
    </div>
  </template>

<script>
import { mapGetters } from "vuex";
    export default {
        data(){
            return{
                userName: 'Hydra'
            }
        },
        computed: {
            ...mapGetters(['getUser'])
        }

    }
</script>

<style scoped>

</style>