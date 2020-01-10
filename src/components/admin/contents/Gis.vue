<template>
    <Layout>
        <div class="page-header">
            <div class="row align-items-end">
                <div class="col-lg-8">
                    <div class="page-header-title">
                        <i class="ik ik-users bg-blue"></i>
                        <div class="d-inline">
                            <h5>Data Users</h5>
                            <span>List all users on this application</span>
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
                                <a href="#">Configurations</a>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Data Users</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>


        <div class="row">
            <div class="col-md-12">
                <div class="card">

                    <div class="card-header"><h3>GIS </h3></div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-12">

                            </div>
                        </div>                                            
                    </div>
                </div>
            </div>
        </div>

    </Layout>
</template>

<script>
import Layout from '@/components/admin/Layout.vue'

export default {
	components:{
		Layout
	},
	// name: "Index",
	data() {
		return {
			msg: "Welcome to Your Vue.js App"
		};
	}
};
</script>