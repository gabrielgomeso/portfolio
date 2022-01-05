<template>
  <div class="skill-block">
    <details>
      <summary class="skill-title">
        <strong>{{ title }}</strong> - {{ local }}
      </summary>
      <h4>Descrição</h4>
      <p class="skill-description">
        {{ description }}
      </p>
      <h5>Tecnologias utilizadas</h5>
      <ul>
        <!-- <li v-for="tech in techs" :key="tech">
          {{ tech }}
        </li> -->
      </ul>
    </details>
  </div>
</template>

<script>
export default {
  name: "SkillBlock",
  props: {
    title: String,
    local: String,
    description: String,
  },
};
</script>

<style lang="scss" scoped>
.skill-block{
  border-radius: 10px;
  background-color: #313131;
  box-shadow: 1px 1px 15px 2px black;
  padding: 15px;
  margin: 15px;

  .skill-title{
    cursor: pointer;
  }

  .skill-description{
    text-align:justify;
    word-spacing:-2px;
  }
}
</style>