<template>
  <section class="container-flex">
    <Greetings></Greetings>
    <button>Saiba mais sobre mim</button>
  </section>
  <section class="container">
    <Skills></Skills>
  </section>
  <section class="container-flex">hello</section>
  <section class="container-flex">world</section>

  <section class="container-flex">test</section>

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

  .container-flex{
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .container{
    width: 100%;
    height: 100vh;
    padding: 20px;
  }
</style>