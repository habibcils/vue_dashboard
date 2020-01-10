<template>
    <Layout>
        <div class="page-header">
            <div class="row align-items-end">
                <div class="col-lg-8">
                    <div class="page-header-title">
                        <i class="ik ik-users bg-blue"></i>
                        <div class="d-inline">
                            <h5>404</h5>
                            <span>Sorry on Building 404</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <nav class="breadcrumb-container" aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="/"><i class="ik ik-home"></i></a>
                            </li>
                            <li class="breadcrumb-item">
                                <a href="#">404</a>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>        
        <h1>Sorry still on building, 404</h1>
    </Layout>
</template>

<script>
import Layout from '@/components/admin/Layout.vue'

    export default {
        components:{
            Layout
        }
    }
</script>

<style scoped>

</style>
