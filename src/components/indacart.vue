<template>
  <div class='c-indacart'>
    <div class='c-indacart__left-block'>
      <a href='#' class='c-indacart__close'>
        <img svg-inline src='../assets/icon-close.svg' alt='close' />
      </a>
      <!-- <img svg-inline class='c-indacart__icon-timer' src='../assets/icon-timer.svg' alt='close' /> -->
      <span class='c-indacart__timer'>
        24:00
      </span>
    </div>
    <div class='right-block'>

   </div> 
  </div>

</template>

<script>
  export default {
    name: "indacart",
  };
</script>

<style lang="scss" scoped>
  @import "../styles/components/indacart.scss"
</style>
