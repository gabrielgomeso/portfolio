<template>
  <Navigation></Navigation>
  <section class="section greetings-block">
    <Greetings></Greetings>
    <Button></Button>
  </section>
  <section class="section skills-block">
    <Skills></Skills>
  </section>
  <section class="section contact-block"></section>
  <Footer></Footer>
</template>

<script>

import Navigation from './components/Navigation.vue';
import Greetings from './components/Greetings.vue';
import Button from './components/Button.vue';
import Skills from './components/Skills.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    Skills,
    Greetings,
    Footer,
    Navigation,
    Button
  },
};
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    scroll-behavior: smooth;
  }

  body{
    @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
    color: #eee;
    background: #222;
    font-family: 'Roboto Mono';
  }

  .section{
    width: 100vw;
    max-width: 100%;
    height: 100vh;

    box-shadow: inset 0 0px 1px rgb(0, 0, 0);
  }

  .greetings-block{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

  }

  .skills-block{
    width: 100vw;
    background-color: #202426;
    height: auto;
    margin: auto;
  }
</style>