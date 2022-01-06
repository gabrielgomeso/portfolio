<template>
  <Navigation></Navigation>
  <section class="section greetings-block">
    <img
      class="myself"
      src="./assets/myself.jpg"
      alt=""
    />
    <Greetings></Greetings>
    <Button v-bind:href="'#skills'" text="Saiba mais sobre mim"></Button>

  </section>
  <section id="about" class="section about-block">
    <About></About>
  </section>
  <Skills id="skills"></Skills>
  <Contact id="contact"></Contact>

  <Footer></Footer>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Greetings from "./components/Greetings.vue";
import Button from "./components/Button.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Contact from "./components/Contact.vue";

import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Skills,
    Greetings,
    Footer,
    Navigation,
    Button,
    About,
    Contact
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  scroll-behavior: smooth;
}

body {
  @import url("https://fonts.googleapis.com/css?family=Roboto+Mono");
  color: #eee;
  background: #202426;
  font-family: "Roboto Mono";

  .section {
    width: 100vw;
    max-width: 100%;
    height: 100vh;
  }

  .greetings-block {
    width: 100%;
    
    background-color: #222;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    box-shadow: inset 0 0px 1px rgb(0, 0, 0);

    .myself {
      max-width: 175px;
      max-height: 175px;
      border-radius: 100%;
      border: 5px solid #2e5897;
      box-shadow: 1px 1px 10px 5px rgb(0, 0, 0);
    }
  }

  .about-block {
    background-color: #2e5897;
    box-shadow: inset 0 1px 5px rgb(0, 0, 0);
  }
}
</style>