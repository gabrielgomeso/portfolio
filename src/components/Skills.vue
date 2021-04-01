<template>
  <div id="skills" class="skill-block">
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
        picture_src="https://i.imgur.com/mYiX5q4.png"
        v-bind:techs="[
          'HTML semântico',
          'CSS: Flexbox, Grid, Media Queries, Animations',
          'Javascript',
          'Responsividade',
        ]"
        description="Aprendi os fundamentos de desenvolvimento Web através de exercícios e instruções, sem aulas com professores, por meio de uma plataforma completamente autônoma."
      ></SkillCard>
      <SkillCard
        title="Técnico em Informática para Web"
        workplace="Instituto Federal"
        worktime="Jan/14 até Jun/15"
        picture_src="https://i.imgur.com/EF1bkFV.png"
        v-bind:techs="[
          'Ruby e Ruby on Rails',
          'Fundamentos de VueJS',
          'Fundamentos de HTML/CSS',
          'Git e Github',
        ]"
        description="Aprendi a trabalhar em equipe, a me comunicar. Aprendi a resolver problemas, ler scripts diversos. Foco em Rails e no produto Quero Pago."
      ></SkillCard>
      <SkillCard></SkillCard>
      <SkillCard></SkillCard>
    </div>
    <h2 class="skills-title">Outras habilidades</h2>
    <div class="card-section">
      <SkillCard
        title="Inglês Intermediário"
        workplace="Estudo contínuo"
        worktime="Jan/08 até hoje"
        picture_src=""
        description="Desde 2008 estudo inglês. Comecei estudando na escola de idiomas Fisk em 2008, parei em 2012. Retornei após um breve período em 2016/2017. Por todo esse período eu continuei estudando sozinho. Possuo prática profissional em transcrever conteúdo em inglês por meio do site GoTranscript"


      ></SkillCard>
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
.card-section{
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto auto;
}

.skills-title{
  text-align: center;
  padding: 10px;
}

@media (max-width: 1400px){
  .card-section{
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
  }
}

@media (max-width: 800px){
  .card-section{
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
  }
}

@media (max-width: 600px){
  .card-section{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}


</style>