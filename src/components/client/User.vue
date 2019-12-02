<template>
    <div>
        <Navbar/>
        <div class="container">
            <div class="row">
                <h5>Data Account</h5>
            </div>
            <div class="row">
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>: {{getUser.name}}</td>
                        </tr>
                        <tr>
                            <td>ID</td>
                            <td>: {{getUser.id}}</td>
                        </tr>
                        <tr>
                            <td>Username</td>
                            <td>: {{getUser.username}}</td>
                        </tr>  
                        <tr>
                            <td>Email</td>
                            <td>: {{getUser.email}}</td>
                        </tr>                                                                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/client/Navbar.vue'
import Dialog from '@/components/client/Dialog.vue'
import { mapGetters } from "vuex"

    export default {
        components: {
        Navbar,
		Dialog
        },
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