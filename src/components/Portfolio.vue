<template>
  <div id="portfolio" class="Page Portfolio">
    <div class="Page__inner">
      <div class="book">
        <div class="page left">
          <button @click="turnPage('right')" class="turn-page left">
            <i class="fas fa-arrow-left"></i>
          </button>
        </div>
        <div class="page right pageRight">
          <button @click="turnPage('left')" class="turn-page right">
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
        <div
          v-if="showTurnPage"
          class="page pageTurn"
          v-bind:class="[turnDirection, { turn: animateTurn }]"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      animateTurn: false,
      showTurnPage: false,
      turnDirection: "right"
    };
  },
  methods: {
    turnPage: function(direction) {
      this.turnDirection = direction;
      this.showTurnPage = true;
      setTimeout(() => (this.animateTurn = true), 17);
      setTimeout(() => {
        this.showTurnPage = false;
        this.animateTurn = false;
      }, 400);
    }
  }
};
</script>

<style lang="scss">
@import "../stylesheets/variables";

.Portfolio {
  .book {
    display: inline-flex;
    position: relative;
    border: 3px solid rgb(75, 30, 30);
    border-radius: 10px / 10px;
    background-color: rgb(75, 30, 30);
    min-width: 200px;
    height: 200px;
  }

  .page {
    position: relative;
    width: 50%;
    height: 100%;
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
      transition: transform 300ms ease-in-out;
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

    &.right {
      right: 0;
    }

    &.left {
      left: 0;
    }
  }
}
</style>
