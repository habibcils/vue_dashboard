<template>
    <div id="app">
      <router-view/>
    </div>
</template>

<script>
require('dotenv').config();

export default {
    name: 'App',
    mounted: ()=>{
          console.log(process.env.VUE_APP_API_LOCATION)
          console.log(process.env.NODE_ENV)

      // console.log(process.env.VUE_APP_API)
      // console.log(process.env)
      // console.log('hemm '+process.env.PORT)
    }
}
</script>