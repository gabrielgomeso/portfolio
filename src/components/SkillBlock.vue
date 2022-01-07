<template>
  <div class="skill-block">
    <details>
      <summary class="skill-title">
        <strong>{{ title }}</strong> - {{ local }}
      </summary>
      <h4 class="skill-description--title">Descrição</h4>
      <p class="skill-description--text">
        {{ description }}
      </p>
      <section class="skill-tech--section" v-if="techs">
        
        <h5 class="skill-techs--title">Tecnologias utilizadas:</h5>
        <ul class="skill-techs--list">
          <li v-for="tech in techs" :key="tech">
            {{ tech }}
          </li>
        </ul>
      </section>
      <section class="skill-extra--section" v-if="extra">
        <p> {{ extra }} </p>
      </section>
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
    techs: Array,
    extra: String
  },
};
</script>

<style lang="scss" scoped>
.skill-block {
  border-radius: 10px;
  background-color: #313131;
  box-shadow: 1px 1px 15px 2px black;
  padding: 15px;
  margin: 15px;

  .skill-title {
    cursor: pointer;
  }

  .skill-description--title {
    padding-top: 15px;
  }

  .skill-description--text {
    text-align: justify;
    word-spacing: -2px;
  }

  .skill-techs--title {
    margin-top: 10px;
  }

  .skill-techs--list {
    margin-top: 5px;
    list-style-type: none;
  }
}

</style>