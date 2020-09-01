let Vue;

class Store {
   constructor(options){
     const { getters, state, mutations, actions } = options
     this._mutations = mutations
     this._actions = actions
     this._vm = new Vue({
       data:{
         $$state:state
       }
     })
     this.dispatch = this.dispatch.bind(this)
     this.commit = this.commit.bind(this)

     if(getters){
       this.handleGetters(getters)
     }
   }

   get state(){
     return this._vm._data.$$state
   }

   commit(type, payload){
    const entry = this._mutations[type]
    if(entry){
      entry(this.state, payload)
    }
   }

   dispatch(type,payload){
     const entry = this._actions[type]
     if(entry){
       entry(this, payload)
     }
   }

   handleGetters(getters){
     this.getters = {}
     Object.keys(getters).forEach((key)=>{
       Object.defineProperty(this.getters,key,{
         get:()=> getters[key](this.state)
       })
     })
   }
}

let install = function(_vue){
  Vue = _vue
  Vue.mixin({
    beforeCreate(){
      if(this.$options.store){
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

export default {
  Store,
  install
}