
import Vue from 'vue'
import  Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        coords: [],
    },
    mutations:{
        getCoordinates(state,coordinates){
            state.coords = coordinates
        }
    }

})