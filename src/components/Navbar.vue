<template>
  <div class="Navbar">
    <div class="navbar-content">
      <a class="navbar-item" href="#home" title="Home">
        <i class="fas fa-home"></i>
      </a>
      <a class="navbar-item" href="#about" title="Caleb Harshman">
        <i class="fas fa-user"></i>
      </a>
      <div class="navbar-item logo">CH</div>
      <a class="navbar-item" href="#portfolio" title="Portfolio">
        <i class="fas fa-book"></i>
      </a>
      <a class="navbar-item" href="#contact" title="Contact Me">
        <i class="fas fa-phone"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss">
@import "../stylesheets/variables.scss";
.Navbar {
  z-index: 11;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: unset;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;

  @media (max-width: 562px) {
    width: unset;
    height: 48px;
    top: unset;
    bottom: 0;
    right: 0;
  }

  .navbar-content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-height: 500px;
    height: 100%;
    width: 100%;
    margin: 24px 0;

    @media (max-width: 562px) {
      margin: 0 24px;
      flex-direction: row;
    }
  }

  .navbar-item {
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    width: 48px;
    height: 40px;
    color: white;

    &:hover {
      color: $dark_blue;
    }

    &.logo {
      cursor: default;
      font-weight: bold;
      color: black;
      background-color: white;

      @media (max-width: 562px) {
        display: none;
      }
    }
  }
}
</style>
