<template>
	<div>
		<Navbar/>
		<!-- <div class="container">
			<Dialog/>
		</div> -->
	</div>
</template>

<script>
import Navbar from '@/components/client/Navbar.vue'
import Dialog from '@/components/client/Dialog.vue'

export default {
	components:{
		Navbar,
		Dialog
	},
	name: "Index",
	data() {
		return {
			msg: "Welcome to Your Vue.js App"
		};
	}
};
</script>
