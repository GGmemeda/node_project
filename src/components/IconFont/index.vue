<template>
  <i class="CIconfont" v-on="$attrs" />
</template>

<script>
  export default {
    name: 'IconFont'
  };
</script>

<style scoped>
  .CIconfont:before {
    display: block;
  }
  .CIconfont{
    display: inline-block;
    font-style: normal;
    vertical-align: baseline;
    text-align: center;
    text-transform: none;
    line-height: 1;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
</style>
