<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app{
  margin: 15px;
}
table {
  width: 100%;
  border: 1px solid #222;
  margin-bottom: 10px;
  td {
    width: 25%;
  }
}
</style>
