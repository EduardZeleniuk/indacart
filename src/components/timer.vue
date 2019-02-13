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
        temp: '00:00',
        time: this.$store.getters.getTime,
        dateNow: new Date()
      }
    },

    methods: {
      returnEndDate(h,m) {
        let endDate = this.dateNow
        endDate.setHours(endDate.getHours()+h);
        endDate.setMinutes(endDate.getMinutes()+m);

        if  (this.$localStorage.get('indacart')) {
            console.log(1);
            
        } else {
            console.log(2);

        }



        // if($.cookie("timer")){
        //   var dateEnd = $.cookie("timer");
        // } else {
        //   var dateEnd = returnEndDate(0,0,3);
        //   $.cookie("timer", dateEnd, {expires: 7});
        // }

        return endDate;
      },

      start () {
        this.isRunning = true

        if (!this.timer) {
          this.timer = setInterval( () => {
            if (this.time > 0) {
              this.time--

              let time = this.time / 60
              let hours = parseInt(time)
              let minutes = Math.round((time - hours) * 60)

              if (hours < 10) {
                hours = "0" + hours
              }
              if (minutes < 10) {
                minutes = "0" + minutes
              }

              this.temp = hours + ':' + minutes
            } else {
              this.reset()
            }
          }, 1000 ) 
        }
      },

      reset () {
        this.isRunning = false
        clearInterval(this.timer)
        this.timer = null
        this.time = 0
        this.temp = '00:00'
		  }
    },

    mounted () {
      this.start()
    }
  };
</script>
