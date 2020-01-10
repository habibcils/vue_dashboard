<template>
    <transition name="modal">
    <div v-show="modal" class="modal fade show" role="dialog" aria-labelledby="exampleModalCenterLabel" style="display: block;padding-right: 17px;">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div  class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterLabel">Edit Data</h5>
                    <button type="button" @click="closeModal" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <form @submit.prevent="$emit('save', 'save aja')">
                <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <label for="exampleInputUsername1">Username</label>
                                    <input v-model="data.username" type="text" class="form-control" id="exampleInputUsername1" placeholder="Username">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputUsername1">Password</label>
                                    <input v-model="data.password" type="text" class="form-control" id="exampleInputUsername1" placeholder="Username">
                                </div>                                
                                <div class="form-group">
                                    <label for="exampleInputUsername1">Name</label>
                                    <input v-model="data.name" type="text" class="form-control" id="exampleInputUsername1" placeholder="Username">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputUsername1">Email</label>
                                    <input v-model="data.email" type="text" class="form-control" id="exampleInputUsername1" placeholder="Username">
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputUsername1">Point</label>
                                    <input v-model="data.point" type="text" class="form-control" id="exampleInputUsername1" placeholder="Username">
                                </div>
                            </div>
                        </div>
                </div>
                <div class="modal-footer">
                    <button type="button" @click="closeModal" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button v-ripple type="submit" class="btn btn-primary mr-2"><i class="ik ik-save"></i> Save changes</button>
                </div>
                </form>
            </div>
        </div>
    </div>       
    </transition>
</template>
<script>
// import {FadeTransition} from 'vue2-transitions'

    export default {
        components: {
            // FadeTransition
        },
        props: ['modal', 'closeModal', 'saveModal', 'data', 'modeModal']
    }
</script>

<style scoped>

</style>