import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex)

// const apiUrl = 'https://comparison.grossoshop.it/api/'

export default new Vuex.Store({
  state: {
    popup: {
      popupShow: false,
      delayShowPopup: 0,
      time: 100,
      show: true
    },
    popupShow: true,
    localStorageData: { 
      data: null,
      startDate: null
    }
  },

  getters: {
    popup (state) {
      return state.popup
    },

    localStorageData (state) {
      return state.localStorageData
    }
  },
  
  mutations: {
    SET_POPUP (state, popup) {
      state.popup = popup
    },

    SET_POPUP_SHOW (state, payload) {
      state.popup.show = payload
    },

    SET_LOCAL_STORAGE_DATA (state, payload) {
      state.localStorageData = payload
    }
  },

  actions: {
    async fetchPopup ({commit}, productId) {
      try {
        // const response = await axios.get(apiUrl)

        // if (response.data.success) {
          // const popup = respons.data.popup
          // popup.show = true
          // commit(SET_POPUP, respons.data.popup)
        // }
      } catch (error) {
        console.log(error.message)
      }
    }
  }
})
