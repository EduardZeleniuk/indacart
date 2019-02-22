<template>
  <div id="app">
    <div class='c-indacart' :class="[isShow ? 'is-active' : '']">
      <div class='c-indacart__left-block'>
        <a href='#' class='c-indacart__close'>
          <img svg-inline src='./assets/icon-close.svg' alt='close' />
        </a>
        <div class="c-indacart__timer-wrap">
          <img svg-inline class='c-indacart__icon-timer' src='./assets/icon-timer.svg' alt='close' />
          <div class='c-indacart__timer'>
            <Timer :time='getTime()'/>
          </div>
        </div>
      </div>
      <div class='c-indacart__right-block'>
          <div class='c-indacart__header'>
            {{ textInPopup }}
          </div>
          <div class='c-indacart__content'>
            <div class='c-indacart__content-discount-wrap'>
              <div class='c-indacart__content-discount'>
                <span>25<span class='c-indacart__content-discount-percent'>%</span></span>
              </div>
              <div class='c-indacart__content-price-wrap'>
                <div class='c-indacart__content-price-old'><s>$1.500</s></div>
                <div class='c-indacart__content-price-new'>$1.125</div>
              </div>
            </div>
            <div class='c-indacart__content-btn'>
                <a href="#">{{ textInBtn }}</a>
                <div class="c-indacart__footer">
                  Made by 
                  <img svg-inline class='c-indacart__icon-logo' src='./assets/logo.svg' alt='logo' />
                </div>
            </div>
          </div>
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
    // this.$store.dispatch('fetchPopup', productId)

    if (!this.$localStorage.get('indacart')) {
      let serialObj = JSON.stringify(this.$store.getters.localStorageData);

      this.$localStorage.set('indacart', serialObj)
    }

    const popup = this.$store.popup
  },
  
  data () {
    return {
      textInPopup: 'Special discount! Only NOW!',
      textInBtn: 'Add to cart',
      oldPrice: 0,
      newPrice: 0,
      dicount: 0,
      // delayShowPopup: this.$store.getters.getDelayShowPopup, 
      isShow: true
    }   
  },

  methods: {
    getTime () {
      const popup = this.$store.getters.popup

      if (popup && typeof popup === 'object') {
        return popup.time
      } else {
        return 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "./styles/components/indacart.scss"
</style>
