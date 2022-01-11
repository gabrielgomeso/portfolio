<template>
  <Navigation></Navigation>
  <section class="section greetings-block">
    <img
      class="myself"
      src="./assets/myself.jpg"
      alt=""
    />
    <Greetings></Greetings>
    <Button @click="buttonClicked" v-bind:href="'#about'"> {{ $t("appText.knowMe") }} </Button>
    <div class="locale-changer">
      <select v-model="$i18n.locale">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
          {{ lang }}
        </option>
      </select>
    </div>

  </section>
  <About id="about"></About>
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
  methods: {
    buttonClicked() {
      this.$gtag.event('saiba-mais-click', {
        'event_category': 'documentation',
        'event_label': 'Botão Saiba Mais clicado',
        'value': 1
      });
    },
  },
  name: 'locale-changer',
  data () {
    return { langs: ['ptBr', 'en'] }
  }
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
}
</style>
