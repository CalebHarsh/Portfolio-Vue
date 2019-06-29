<template>
  <div id="home" class="Page Home">
    <div class="Page__inner">
      <div class="welcome-container">
        <h2 class="welcome">Hello, Welcome...</h2>
        <h1 class="name">
          Caleb Harshman
        </h1>
        <h2 class="title">Web Developer</h2>
        <a class="welcome-link" href="#about">
          <div class="welcome-msg">Learn More About Me</div>
        </a>
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
    padding: 0 24px;
    letter-spacing: 1px;

    .welcome {
      display: flex;
      justify-content: flex-start;
      font-weight: bold;
      color: white;
      text-shadow: 2px 2px black;
      font-size: 32px;
    }

    .name {
      display: flex;
      align-items: center;
      font-weight: bold;
      color: white;
      text-shadow: 2px 2px black;
      font-size: 48px;

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
      font-weight: bold;
      color: white;
      text-shadow: 2px 2px black;
      font-size: 32px;
    }

    .welcome-link {
      background: black;
      color: white;
      margin-bottom: 12px;
      padding: 8px 14px;

      display: inline-flex;
      
      &:hover {
        color: $dark_blue;
      }
    }

    .welcome-msg {
      font-size: 24px;
      transition: transform 100ms ease-in-out;

      &:active {
        transform: scale(0.7);
      }
    }
  }
}
</style>
