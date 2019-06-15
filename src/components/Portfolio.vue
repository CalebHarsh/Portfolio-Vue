<template>
  <div id="portfolio" class="Page Portfolio">
    <div class="Page__inner">
      <h2 class="title">Flip through some of my past works</h2>
      <div class="book">
        <div class="page left">
          <button v-show="showLeftArrow" @click="turnPage('left')" class="turn-page left">
            <i class="fas fa-arrow-left"></i>
          </button>
        </div>
        <div class="page right pageRight">
          <button v-show="showRightArrow" @click="turnPage('right')" class="turn-page right">
            <i class="fas fa-arrow-right"></i>
          </button>
        </div>
        <div v-show="showTurnPage" class="page pageTurn" v-bind:class="turnClass"></div>
        <transition name="fade">
          <div v-if="!showTurnPage" class="book-content">
            <div v-if="index === 0" class="page-1">
              <h2>Index</h2>
              <h3>Notable Works</h3>
              <ul class="notable-works">
                <li v-for="(work, index) in project.notable" v-bind:key="work" class="work">
                  <a @click="changeIndex(index + 1)">{{ work }}</a>
                </li>
              </ul>
            </div>
            <div v-else class="page-1">
              <a class="back" @click="changeIndex(0)">
                <i class="fas fa-angle-double-left"></i>&nbsp;Back to Index
              </a>
              <h2>Project Name: {{ project.title }}</h2>
              <p>{{ project.info }}</p>
              <p>
                Check it out:&nbsp;
                <a v-bind:href="project.link" target="_blank">{{ project.link }}</a>
              </p>
            </div>
            <div v-if="index === 0" class="page-2">
              <h3>Projects and Other Works</h3>
              <ul class="other-works">
                <li v-for="(work, index) in project.others" v-bind:key="work" class="work">
                  <a @click="changeIndex(index + project.notable.length + 1)">{{ work }}</a>
                </li>
              </ul>
            </div>
            <div v-else class="page-2">
              <img v-bind:src="project.image" v-bind:alt="project.title">
              <h3>Skils &amp; Technologies Used</h3>
              <ul>
                <li v-for="tech in project.techUsed" v-bind:key="tech" class="skills">{{ tech }}</li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { portfolio } from "../utils";
export default {
  name: "Portfolio",
  data: () => {
    return {
      animateTurn: false,
      showTurnPage: false,
      turnDirection: "right",
      index: 0,
      data: portfolio
    };
  },
  computed: {
    showLeftArrow: function() {
      return this.index !== 0 && !this.showTurnPage;
    },
    showRightArrow: function() {
      return this.index < this.data.length - 1 && !this.showTurnPage;
    },
    turnClass: function() {
      return `${this.turnDirection} ${this.animateTurn && "turn"}`;
    },
    project: function() {
      return this.data[this.index];
    }
  },
  methods: {
    turnPage: function(direction) {
      this.turnDirection = direction;
      this.showTurnPage = true;
      if (direction === "right") {
        this.index++;
      } else {
        this.index--;
      }
      setTimeout(() => (this.animateTurn = true), 17);
      setTimeout(() => {
        this.showTurnPage = false;
        this.animateTurn = false;
      }, 800);
    },
    changeIndex: function(index) {
      if (index > this.index) this.turnDirection = "right";
      else this.turnDirection = "left";
      this.showTurnPage = true;
      this.index = index;
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
  background-image: url("../assets/images/wood_desk.jpg");

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

  .title {
    color: white;
    text-shadow: 1px 1px black;
  }

  .book {
    display: inline-flex;
    position: relative;
    border: 3px solid #5f1c1c;
    border-radius: 10px / 10px;
    background-color: #5f1c1c;
    width: calc(100% - 24px);
    margin: 0 12px;
    min-height: calc(90vh - 52px);
  }

  .page {
    position: relative;
    width: 50%;
    border: 2px solid black;
    background-color: wheat;

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
    display: flex;
    flex-direction: row;

    h2,
    h3 {
      text-align: left;
    }

    .back {
      display: flex;
      text-align: left;
      color: 15px;
      cursor: pointer;
    }

    .notable-works {
      display: flex;
      flex-direction: column;
      font-size: 20px;
      padding-left: 10%;
      text-align: left;

      .work:not(:first-child) {
        margin-top: 12px;
      }
    }

    a {
      cursor: pointer;
    }

    .other-works {
      display: flex;
      flex-direction: column;
      font-size: 20px;
      text-align: 20px;
      padding-left: 10%;
      text-align: left;

      .work:not(:first-child) {
        margin-top: 15px;
      }
    }

    .page-1 {
      width: 50%;
      padding: 0 24px 0 12px;
      border-right: 1px solid black;
    }

    .page-2 {
      width: 50%;
      padding: 0 12px 0 24px;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
