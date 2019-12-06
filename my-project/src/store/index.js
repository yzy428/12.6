import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  mutations: {
    setState(state,params){
      state[params.key]=params.value
    }
  },
  actions: {
     getList({commit,state}){
          axios({
            url:'/api/list'
          }).then(res=>{
            commit({type:'setState',key:'list',value:JSON.parse(JSON.stringify( res.data.data))   })
           
          })
     }
  },
  modules: {
  }
})
