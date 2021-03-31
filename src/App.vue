<template>
  <section class="section greetings-block">
    <Greetings></Greetings>
    <button>Saiba mais sobre mim</button>
  </section>
  <section class="section skills-block">
    <Skills></Skills>
  </section>
</template>

<script>

import Skills from './components/Skills.vue';
import Greetings from './components/Greetings.vue';

export default {
  name: 'App',
  components: {
    Skills,
    Greetings
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
  }

  .greetings-block{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .skills-block{
    width: 100vw;
    max-width: 80%;
    height: auto;

    margin: auto;
  }
</style>