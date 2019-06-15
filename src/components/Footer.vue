<template>
  <div class="Footer">
    <h6>Caleb Harshman &copy;2019</h6>
    <h6>Made with Vue.js and Imagination</h6>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss">
.Footer {
  position: absolute;
  bottom: 0;
  height: 52px;
  width: 100%;
  background-color: black;
  color: white;
  padding: 0 72px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h6 {
    margin: 0;
    display: inline-flex;
  }

  @media (max-width: 562px) {
    height: 100px;
    padding-bottom: 48px;
  }
}
</style>
