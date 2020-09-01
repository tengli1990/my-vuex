import Vue from 'vue'
import Vuex from './myVuex'

Vue.myUse = function(plugin){
  const installedPlugins = (this._installedPlugins || (this._installedPlugins=[]));
  if(installedPlugins.indexOf(plugin) > -1){
    return this
  }

  const args = Array.prototype.slice.call(arguments,1);
  args.unshift(this)

  if(typeof plugin.install === 'function'){
    plugin.install.apply(plugin,args)
  }else if(typeof plugin ==='function'){
    plugin.apply(null,plugin,args)
  }
  installedPlugins.push(plugin)
  return this
}


Vue.myUse(Vuex)




export default new Vuex.Store({
  state: {
    counter:0
  },
  mutations: {
    add(state){
      return state.counter++
    }
  },
  actions: {
    add({commit}){
        commit('add') 
    }
  },
  getters:{
    doubleCounter: function(state){
      return state.counter * 2
    }
  },
  modules: {
  }
})
