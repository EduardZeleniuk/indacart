<template>
  <div id="app">
    <div class='c-indacart' :class="[isShow ? 'is-active' : '']">
      <div class='c-indacart__left-block'>
        <a href='#' class='c-indacart__close'>
          <img svg-inline src='./assets/icon-close.svg' alt='close' />
        </a>
        <img svg-inline class='c-indacart__icon-timer' src='./assets/icon-timer.svg' alt='close' />
        <span class='c-indacart__timer'>
          <Timer/>
        </span>
      </div>
      <div class='c-indacart__right-block'>

      </div> 
    </div>
  </div> 
</template>

<script>
  import Timer from './components/timer'

  export default {
    components: {
      Timer
    },

  created () {
    this.$store.dispatch('setTime')
    this.$store.dispatch('popupShow', true)

    if (!this.$localStorage.get('indacart')) {
      let serialObj = JSON.stringify(this.$store.getters.getLocalStorageData);

      this.$localStorage.set('indacart', serialObj)
    }
  },
  
  data () {
    return {
      delayShowPopup: this.$store.getters.getDelayShowPopup, 
      isShow: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./styles/components/indacart.scss"
</style>
