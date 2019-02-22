<template>
  <div class="countdown">
    {{temp}}
  </div>
</template>


<script>
  export default {
    props: [
    'time'
    ],
    data () {
      return {
        isRunning: false,
        timer: null,
        temp: '00:00',
      }
    },

    methods: {
      setLocalStorageStartDate () {
        let returnObj
        let serialObj

        if (this.$localStorage.get('indacart')) {
          returnObj = JSON.parse(this.$localStorage.get('indacart'))      

          if ( !returnObj.startDate) {
            returnObj.startDate = new Date()
            serialObj = JSON.stringify(returnObj);
            this.$localStorage.set('indacart', serialObj) 
          }
        } 
      },

      getStartDate () {
        let startDate
        let returnObj

        if  (this.$localStorage.get('indacart')) {
          returnObj = JSON.parse(this.$localStorage.get('indacart'))          

          if (returnObj.startDate) {
            startDate = new Date(returnObj.startDate)
          } else {
            startDate = new Date()
          }
        }

        return startDate
      },

      getEndDate (time, startDate) {
        let endDate = startDate
        endDate.setSeconds(endDate.getSeconds() + time);

        return endDate;
      },

      start () {
        let endDate = this.getEndDate(this.time, this.getStartDate()) 
        let time = (endDate - new Date())/1000

        this.isRunning = true

        if (!this.timer && time > 0) {
          this.timer = setInterval( () => {
          
            if (time > 0) {
              time--

              let minutes = parseInt(time/60)
              let seconds = parseInt(time)%60

              if (minutes < 10) {
                minutes = "0" + minutes
              }
              if (seconds < 10) {
                seconds = "0" + seconds
              }

              this.temp = minutes + ":" + seconds
            } else {
              this.reset()
              this.$store.commit('SET_POPUP_SHOW', false)
            }
          }, 1000 ) 
        } else {
            this.$store.commit('SET_POPUP_SHOW', false)
        }
      },

      reset () {
        this.isRunning = false
        clearInterval(this.timer)
        this.timer = null 
        this.temp = '00:00'
		  }
    },

    mounted () {
      this.setLocalStorageStartDate ()
      this.start()
    }
  }
</script>
