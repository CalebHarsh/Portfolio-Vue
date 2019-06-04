<template>
  <div id="portfolio" class="Page Portfolio">
    <div class="Page__inner">
      <h3>Flip through some of my past works</h3>
      <div class="book">
        <div class="page left">
          <button v-show="showLeftArrow" @click="turnPage('right')" class="turn-page left">
            <i class="fas fa-arrow-left"></i>
          </button>
        </div>
        <div class="page right pageRight">
          <button v-show="showRightArrow" @click="turnPage('left')" class="turn-page right">
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
        <div
          v-show="showTurnPage"
          class="page pageTurn"
          v-bind:class="turnClass"
        ></div>
        <transition name="fade">
          <div v-show="!showTurnPage" class="book-content"></div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data: () => {
    return {
      animateTurn: false,
      showTurnPage: false,
      turnDirection: "right",
      index: 0
    };
  },
  computed: {
    showLeftArrow: function() {
      return this.index !== 0 && !this.showTurnPage;
    },
    showRightArrow: function () {
      return !this.showTurnPage;
    },
    turnClass: function () {
      return `${this.turnDirection} ${this.animateTurn && 'turn'}`
    }
  },
  methods: {
    turnPage: function(direction) {
      this.turnDirection = direction;
      this.showTurnPage = true;
      if (direction === "left") {
        this.index++;
      } else {
        this.index--;
      }
      setTimeout(() => (this.animateTurn = true), 17);
      setTimeout(() => {
        this.showTurnPage = false;
        this.animateTurn = false;
      }, 800);
    }
  }
};
</script>

<style lang="scss">
@import "../stylesheets/variables";

.Portfolio {
  .Page__inner {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 562px) {
      justify-content: flex-start;
    }
  }

  .book {
    display: inline-flex;
    position: relative;
    border: 3px solid rgb(75, 30, 30);
    border-radius: 10px / 10px;
    background-color: rgb(75, 30, 30);
    width: calc(100% - 24px);
    margin: 0 12px;
    min-height: calc(90vh - 52px);
  }

  .page {
    position: relative;
    width: 50%;
    // height: 100%;
    border: 2px solid black;
    background-color: white;

    &.left {
      border-radius: 10px 25% 25% 10px / 10px 5% 2% 10px;
      transform-origin: center right;
      border-right: none;
      left: 0;

      &.turn {
        transform: rotateY(180deg);
      }
    }

    &.right {
      border-radius: 25% 10px 10px 25% / 5% 10px 10px 2%;
      transform-origin: center left;
      border-left: none;
      right: 0;

      &.turn {
        transform: rotateY(180deg);
      }
    }

    &.pageRight {
      border-right-width: 4px;
    }

    &.pageTurn {
      position: absolute;
      transition: transform 300ms ease-in-out 200ms;
      height: 100%;
    }
  }

  .turn-page {
    @include clear_button_styles;
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;

    &.right {
      right: 0;
    }

    &.left {
      left: 0;
    }
  }

  .book-content {
    position: absolute;
    top: 35px;
    left: 37px;
    right: 37px;
    bottom: 20px;
    background-color: wheat;
  }
}
</style>
