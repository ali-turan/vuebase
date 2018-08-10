import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'


const requireModule = require.context("@/modules", true, /.*\/store\.js/); //extract js files inside modules folder
const modules = {};

//populate vuex modules
requireModule.keys().forEach(fileName => {
  const moduleName = (fileName.split('/')[1]); //get module name
  modules[moduleName] = requireModule(fileName).default; //add module itself to the modules
});


Vue.use(Vuex);

//Set persistence plugin for vuex
//See : https://github.com/championswimmer/vuex-persist
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  supportCircular: true,
  modules:["core"]
});

export default new Vuex.Store({
  modules,
  plugins: [
    vuexLocal.plugin
  ],
  state: {

  },
  getters: {

  },
  mutations: {

  },
  actions: {

  }
})