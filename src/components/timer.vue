<template>
  <div class="countdown">
    {{temp}}
  </div>
</template>


<script>
  export default {
    data () {
      return {
        isRunning: false,
        timer: null,
        temp: '00:00:00',
        time: this.$store.getters.getTime
      }
    },

    methods: {
      setLocalStorageStartDate () {
        let returnObj
        let serialObj

        if  (this.$localStorage.get('indacart')) {
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

      getEndDate (h, m, startDate) {
        let endDate = startDate
        endDate.setHours(endDate.getHours() + h); 
        endDate.setMinutes(endDate.getMinutes() + m);

        return endDate;
      },

      start () {
        let startDate = this.getStartDate()
        let endDate = this.getEndDate(this.time.hours, this.time.minutes, this.getStartDate()) 
        let time = (endDate - new Date())/1000

        this.isRunning = true

        if (!this.timer && time > 0) {
          this.timer = setInterval( () => {
          
            if (time > 0) {
              time--

              let hours = parseInt(time/(60*60))
              let minutes = parseInt(time/60)%60
              let seconds = parseInt(time)%60

              if (hours < 10) {
                hours = "0" + hours
              }
              if (minutes < 10) {
                minutes = "0" + minutes
              }
              if (seconds < 10) {
                seconds = "0" + seconds
              }

              this.temp = hours + ':' + minutes + ":" + seconds
            } else {
              this.reset()
              this.$store.dispatch('popupShow', false)
            }
          }, 1000 ) 
        } else {
            this.$store.dispatch('popupShow', false)
        }
      },

      reset () {
        this.isRunning = false
        clearInterval(this.timer)
        this.timer = null
        this.time = 0
        this.temp = '00:00:00'
		  }
    },

    mounted () {
      this.setLocalStorageStartDate ()
      this.start()
    }
  };
</script>
