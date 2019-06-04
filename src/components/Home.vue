<template>
  <div id="home" class="Page Home">
    <div class="Page__inner">
      <div class="welcome-container">
        <h3 class="welcome">Hello, Welcome...</h3>
        <h1 class="name">
          <span>I'm &nbsp;</span>
          Caleb Harshman
          <span class="extra">I'm &nbsp;</span>
        </h1>
        <h2 class="title">Web Developer</h2>
        <button class="welcome-btn">
          <div class="welcome-msg">Get to Know Me</div>
        </button>
      </div>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .Page__inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }

  .welcome-container {
    transform: translateX(4px);
    padding: 0 24px;
    letter-spacing: 1px;
    border: solid 4px black;
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
          opacity: 0;
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
      display: inline-flex;
      
      &:hover {
        color: $dark_blue;
      }
    }

    .welcome-msg {
      transition: transform 300ms ease-in-out;

      &:active {
        transform: scale(0.5);
      }
    }
  }
}
</style>
