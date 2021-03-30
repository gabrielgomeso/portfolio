<template>
  <section id="skills" class="skills-section">
    <h2 class="skills-title">Se a vida fosse um jogo de cartas e cada carta representasse uma habilidade, esse seria o meu baralho:</h2>

    <div class="content-box">
      <div class="card-section">
        <SkillCard
          title="Estágio em Web Ops"
          workplace="Quero Educação"
          worktime="Emprego atual"
          picture_src="https://gestao.quero.com/wp-content/uploads/2020/01/Logo-Quero-Institucional-Colorido-Tela-RGB-2.png"
          v-bind:techs="['Ruby e Ruby on Rails', 'Fundamentos de VueJS', 'Fundamentos de HTML/CSS', 'Git e Github']"
          description="Aprendi a trabalhar em equipe, a me comunicar. Aprendi a resolver problemas, ler scripts diversos. Foco em Rails e no produto Quero Pago."
        ></SkillCard>
        <SkillCard
          title="Bootcamp GoStack"
          workplace="Rocketseat"
          worktime="Set/20 até Dez/20"
          picture_src="https://i.imgur.com/0iYUg0y.png"
          v-bind:techs="['ReactJS', 'React Native', 'NodeJS', 'TypeScript', 'Fundamentos de MVC', 'Fundamentos de SOLID', 'Git e Github']"
          description="Aprendi a usar e a pesquisar a respeito das tecnologias que envolvem React. Foram criadas diversas aplicações ao longo do Bootcamp."
        ></SkillCard>
      </div>
    </div>
  </section>
</template>

<script>
import SkillCard from './SkillCard.vue';

export default {
  name: 'App',
  components: {
    SkillCard
  },
};
</script>

<style lang="scss">

.skills-section{
  width: 100vw;
  height: 100vh;
  padding: 50px;

  ul{
    list-style-type: none;
  }

  .content-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 700px;
  }

  .card-section{
    display: flex;
   
  }

  
}


</style>