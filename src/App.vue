<template>
  <Navigation></Navigation>
  <section class="section greetings-block">
    <img
      class="myself"
      src="https://scontent.fgru11-1.fna.fbcdn.net/v/t1.6435-9/81939773_3438253399580908_2617396097164771328_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=dKn3sfeJdP8AX82J6OQ&_nc_ht=scontent.fgru11-1.fna&oh=d9e9abf414074d68d17b199c7bde070c&oe=608E80B3"
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

  .skills-block {
    width: 100vw;
    max-width: 1200px;
    margin: auto;
    height: auto;
    padding-bottom: 50px;
  }

  .contact-block {
    width: 100%;
    display: flex;
    margin: auto;
    height: auto;
    background-color: #313131;
  }
}
</style>