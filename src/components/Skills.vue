<template>
  <section id="skills" class="skills-section">
    <h2 class="skills-title">Se a vida fosse um jogo de cartas e cada carta representasse uma habilidade, esse seria o meu baralho:</h2>

    <div class="content-box">
      <div class="card-section">
        <SkillCard></SkillCard>
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