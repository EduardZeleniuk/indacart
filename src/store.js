import Vue from "vue";
import Vuex from "vuex";
// import axios from 'axios'

Vue.use(Vuex)

// const apiUrl = 'https://comparison.grossoshop.it/api/'

export default new Vuex.Store({
  state: {
    delayShowPopup: 0,
    popupShow: false,
    time: {},
    localStorageData: { 
      data: null,
      startDate: null
    }
  },

  getters: {
    getDelayShowPopup (state) {
      return state.delayShowPopup
    },
    getPopupShow (state) {
      return state.popupShow
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
      state.time = {
        hours: payload.hours || 0,
        minutes: payload.minutes || 0
      }
    },
    setPopupShow (state, payload) {
      state.popupShow = payload
    }
  },

  actions: {
    popupShow ({commit}, payload) {
      commit('setPopupShow', payload)
    },
    async setTime ({commit}, payload){
      try {
        // const time = await axios.get(apiUrl)
        const time = {
          hours: 0,
          minutes: 1
        }
        
        commit('setTime', time)
      } catch (error) {
        console.log(error.message)
      }
    }
  }
});
