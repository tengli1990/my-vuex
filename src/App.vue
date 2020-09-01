<template>
  <div id="app">
     <p>{{this.$store.state.counter}}</p>
     <p>{{this.$store.getters.doubleCounter}}</p>
     <button @click="add()">增加</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {

    }
  },
  methods:{
    add(){
      this.$store.dispatch('add')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
