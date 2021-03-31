<template>
  <div class="skill-block">
    <h2 class="skills-title">Experiências de trabalho</h2>
    <div class="card-section">
      <SkillCard
        title="Estágio em Web Ops"
        workplace="Quero Educação"
        worktime="Emprego atual"
        picture_src="https://gestao.quero.com/wp-content/uploads/2020/01/Logo-Quero-Institucional-Colorido-Tela-RGB-2.png"
        v-bind:techs="[
          'Ruby e Ruby on Rails',
          'Fundamentos de VueJS',
          'Fundamentos de HTML/CSS',
          'Git e Github',
        ]"
        description="Aprendi a trabalhar em equipe, a me comunicar. Aprendi a resolver problemas, ler scripts diversos. Foco em Rails e no produto Quero Pago."
      ></SkillCard>
    </div>
    <h2 class="skills-title">Cursos e treinamentos</h2>
    <div class="card-section">
      <SkillCard
        title="Bootcamp GoStack"
        workplace="Rocketseat"
        worktime="Set/20 até Dez/20"
        picture_src="https://i.imgur.com/0iYUg0y.png"
        v-bind:techs="[
          'ReactJS',
          'React Native',
          'NodeJS',
          'TypeScript',
          'Fundamentos de MVC',
          'Fundamentos de SOLID',
          'Git e Github',
        ]"
        description="Aprendi a usar e a pesquisar a respeito das tecnologias que envolvem React. Foram criadas diversas aplicações ao longo do Bootcamp."
      ></SkillCard>
      <SkillCard
        title="Responsive Web Design Certification"
        workplace="FreeCodeCamp"
        worktime="Jun/20 até Ago/20"
        picture_src="https://i.imgur.com/0iYUg0y.png"
        v-bind:techs="[
          'HTML semântico',
          'CSS: Flexbox, Grid, Media Queries, Animations',
          'Javascript',
          'Responsividade',
        ]"
        description="Aprendi a usar e a pesquisar a respeito das tecnologias que envolvem React. Foram criadas diversas aplicações ao longo do Bootcamp."
      ></SkillCard>
      <SkillCard></SkillCard>
      <SkillCard></SkillCard>
      <SkillCard></SkillCard>
      <SkillCard></SkillCard>
    </div>
  </div>
</template>

<script>
import SkillCard from "./SkillCard.vue";

export default {
  name: "App",
  components: {
    SkillCard,
  },
};
</script>

<style lang="scss">
</style>