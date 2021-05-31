import Vue from 'vue'
import Vuex from 'vuex'
import Gallery from './gallery';

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Gallery
    }

})