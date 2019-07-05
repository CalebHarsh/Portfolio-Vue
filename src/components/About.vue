<template>
  <div id="about" class="Page About">
    <div class="Page__inner">
      <div class="aboutMe">
        <div>
          <h2>A Little About Me</h2>
          <p>{{ about }}</p>
        </div>
        <img
          class="profile-pic"
          src="../assets/images/Semi-Casual.jpg"
          alt="Caleb Harshman Profile Pic"
        >
      </div>
      <div class="skills">
        <h2>All My Skills</h2>
        <ul>
          <li v-for="skill in skills" v-bind:key="skill">{{ skill }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { skills, about } from "../utils";
export default {
  name: "About",
  data: () => {
    return {
      about: about,
      skills: skills
    };
  }
};
</script>

<style lang="scss">
.About {
  background-color: lightgrey;

  .Page__inner {
    min-height: 100vh;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .aboutMe {
    display: flex;
    flex-direction: row;
    margin-left: 36px;

    @media (max-width: 763px) {
      flex-direction: column-reverse;
      align-items: center;
    }

    h2,
    p {
      display: inline-flex;
    }

    p {
      text-align: left;
    }
  }

  .skills {
    margin-left: 36px;
  }

  .profile-pic {
    float: right;
    display: block;
    border-radius: 50%;
    transition: transform 300ms ease-in-out;
    margin: 0 0 10px 12px;
    max-width: 35%;
    max-height: 277px;
  }
}
</style>
