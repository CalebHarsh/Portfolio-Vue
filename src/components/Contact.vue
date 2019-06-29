<template>
  <div id="contact" class="Page Contact">
    <div class="Page__inner">
      <h3 class="title">Like What you see, Let me Know</h3>
      <div class="row">
        <div class="contact-sheet">
          <h4>Phone: {{ phone }}</h4>
          <h4>
            Email:
            <a v-bind:href="`mailto:${email}`">{{ email }}</a>
          </h4>
          <h3>
            Take a resume:
            <a v-bind:href="`../assets/${resume}`" download="Caleb Harshman">Resume</a>
          </h3>
        </div>
        <div class="online-sources">
          <h3>Connect and Learn More About Me</h3>&nbsp;
          <a class="source" href="https://github.com/CalebHarsh" target="_blank">
            <img class="online-logo" src="../assets/images/git_hub_logo1.png" alt="GitHub"> &nbsp;GitHub
          </a>
          <a
            class="source"
            href="https://www.linkedin.com/in/caleb-harshman-2b2181146/"
            target="_blank"
          >
            <img class="online-logo" src="../assets/images/linkedin_logo.png" alt="LinkedIn"> &nbsp;LinkedIn
          </a>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from "./Footer.vue";

export default {
  name: "Contact",
  data() {
    return {
      phone: "(907) 252-8362",
      email: "caleb.harsh139@gmail.com",
      resume: "Caleb_Harshman_Front_End.pdf"
    };
  },
  components: {
    Footer
  }
};
</script>

<style lang="scss">
.Contact {
  position: relative;
  background-color: whitesmoke;
  min-height: 100vh;
  display: flex;
  justify-content: center;

  .Page__inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translateY(-10%);
  }

  .online-sources {
    display: flex;
    flex-direction: column;
  }

  .title {
    text-align: left;
    padding-left: 24px;
  }

  .contact-sheet,
  .online-sources {
    text-align: left;
  }

  .row {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 32px;
  }

  .source {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    margin-left: 12px;
  }

  .online-logo {
    height: 48px;
    width: 48px;
    background-color: white;
  }
}
</style>
