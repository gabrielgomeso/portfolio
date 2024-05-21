<template>
  <Navigation></Navigation>
  <section class="section greetings-block">
    <img
      class="myself"
      width="175"
      height="175"
      src="./assets/images/myself.jpg"
      alt="Gabriel Gomes smiling"
      loading="eager"
      fetchpriority="high"
    />
    <Greetings></Greetings>
    <Button @click="buttonClicked" v-bind:href="'#about'" :text="$t('know-more')"></Button>
  </section>
  <About id="about" />
  <Skills id="skills" />
  <Articles id="articles" />
  <Contact id="contact" />

  <Footer></Footer>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Greetings from "./components/Greetings.vue";
import Button from "./components/Button.vue";
import About from "./components/About.vue";
import Articles from "./components/Articles.vue";
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
    Contact,
    Articles,
  },
  methods: {
    buttonClicked() {
      this.$gtag.event("saiba-mais-click", {
        event_category: "documentation",
        event_label: "Botão Saiba Mais clicado",
        value: 1,
      });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  scroll-behavior: smooth;
}

@font-face {
  font-family: "Roboto Mono";
  src: url("@/assets/fonts/RobotoMono-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

body {
  color: #eee;
  background: #202426;
  font-family: "Roboto Mono", sans-serif;
}

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
}

.greetings-block .myself {
  max-width: 175px;
  max-height: 175px;
  border-radius: 100%;
  border: 5px solid #2e5897;
  box-shadow: 1px 1px 10px 5px rgb(0, 0, 0);
}
</style>
