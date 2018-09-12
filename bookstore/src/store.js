import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookdata: [],
  },
  mutations: {
    getBookData(state, bookdata){
        this.state.bookdata = bookdata;
    }
  },
  actions: {}
});
