<template>
  <div id="home" class="Page Home">
    <div class="welcome-msg">
      <h3 class="welcome">Hello, Welcome...</h3>
      <h1 class="name">
        <span>I'm &nbsp;</span>Caleb Harshman
        <span class="extra">I'm &nbsp;</span>
      </h1>
      <h2 class="title">Web Developer</h2>
      <span class="welcome-btn">Get to Know Me</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style lang="scss">
@import "../stylesheets/variables";

.Home {
  background-image: url("../assets/images/chicago-feature.jpg");
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.welcome-msg {
  padding: 0 24px;
  letter-spacing: 1px;
  border: solid 4px black;
  border-right: 0;
  background: white;

  .welcome {
    display: flex;
    justify-content: flex-start;
  }

  .name {
    display: flex;
    align-items: flex-start;
    span {
      font-size: 24px;

      &.extra {
        color: white;
      }
    }
  }

  .title {
    display: flex;
    justify-content: flex-end;
  }

  .welcome-btn {
    @include clear_button_styles;
    background: black;
    color: white;
    margin-bottom: 12px;
    padding: 8px;
    transition: transform 300ms ease-in-out;

    &:focus {
      transform: scale(0.5);
    }
  }
}
</style>
