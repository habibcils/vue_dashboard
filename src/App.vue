<template>
    <div id="app">
      <router-view/>
      <vue-progress-bar></vue-progress-bar>
    </div>
</template>

<script>
// require('dotenv').config();
// import VueProgressBar from 'vue-progressbar'

export default {
  components:{
    // VueProgressBar
  },
  name: 'App',
  methods:{
    start () {
        this.$Progress.start()
    },
    set (num) {
        this.$Progress.set(num)
    },
    increase (num) {
        this.$Progress.increase(num)
    },
    decrease (num) {
        this.$Progress.decrease(num)
    },
    finish () {
        this.$Progress.finish()
    },
    fail () {
        this.$Progress.fail()
    },
    test(){
      this.$Progress.start()

      this.$http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=7waqfqbprs7pajbz28mqf6vz')
      .then((response) => {
          this.$Progress.finish()
      }, (response) => {
          this.$Progress.fail()
      })
    }
  },
  beforeMount(){
  },
  mounted(){
  },
  beforeUpdate(){
    this.start()
  },
  updated(){
    this.finish()
  }
}
</script>