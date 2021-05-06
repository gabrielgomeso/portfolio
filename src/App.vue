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
  <section class="section skills-block">
    <Skills></Skills>
  </section>
  <section id="contact" class="section contact-block">
    <Contact></Contact>
  </section>
  <Footer></Footer>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Greetings from "./components/Greetings.vue";
import Button from "./components/Button.vue";
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
    Contact,
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

  .skills-block {
    width: 100vw;
    max-width: 1200px;
    margin: auto;
    height: auto;
    padding-bottom: 50px;
  }

  .contact-block {
    height: auto;
    padding: 50px;
    background-color: #313131;
  }
}
</style>