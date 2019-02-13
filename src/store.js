import Vue from "vue";
import Vuex from "vuex";
// import axios from 'axios'

Vue.use(Vuex)

// const apiUrl = 'https://comparison.grossoshop.it/api/'

export default new Vuex.Store({
  state: {
    delayShowPopup: 0,
    time: 0,
    localStorageData: { startDate: null, data: null }
  },

  getters: {
    getDelayShowPopup (state) {
      return state.delayShowPopup
    },
    getTime (state) {
      return state.time
    },
    getLocalStorageData (state) {
      return state.localStorageData
    }
  },
  
  mutations: {
    setTime (state, payload) {
      state.time = (payload.hours * 60 + payload.minutes)
    }
  },

  actions: {
    async setTime ({commit}, payload){
      try {
        // const time = await axios.get(apiUrl)
        const time = {hours: 10, minutes: 35 }
        commit('setTime', time)
      } catch (error) {
        // console.log(error.message)
      }
    }
  }
});
