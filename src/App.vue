<template>
  <div id="app">
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Contact/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Portfolio from "./components/Portfolio.vue";
import Contact from "./components/Contact.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Home,
    About,
    Portfolio,
    Contact
  }
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  height: 100%;
}

html {
  box-sizing: border-box;
  z-index: 9;
  scroll-behavior: smooth;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  z-index: 10;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  text-decoration: none;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.Page {
  min-height: 105vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.Page__inner {
  position: relative;
  width: 100%;
  max-width: 840px;
  margin: 0 auto;

  @media (min-width: 562px) and (max-width: 973px) {
    padding-left: 52px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
