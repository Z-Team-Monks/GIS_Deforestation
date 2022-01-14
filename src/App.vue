<template>
  <div id="app">
    <Navbar style="z-index:1000000" />
    <router-view/>
    <Footer />
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
export default {
  components: {Navbar, Footer}
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;600&display=swap');
#app {
  font-family: 'Raleway', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 600;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
