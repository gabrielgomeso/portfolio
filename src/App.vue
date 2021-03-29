<template>
  <Section></Section>
  <Skills></Skills>
</template>

<script>
import Section from './components/Section.vue';
import Skills from './components/Skills.vue';

export default {
  name: 'App',
  components: {
    Section,
    Skills
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
</style>