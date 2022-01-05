<template>
  <div id="skills" class="skill-block">
    <h2 class="skills-title">Experiências de trabalho</h2>
    <div class="experience" v-for="skill in parsedSkills['work']" :key='skill.name'>
      <SkillBlock 
        :title='skill.name'
        :local='skill.location'
        :description='skill.description'
        :techs='skill.techs'
      >
      </SkillBlock>
    </div>
    <h2 class="skills-title">Cursos e treinamentos</h2>
      <div class="experience" v-for="skill in parsedSkills['course']" :key='skill.name'>
      <SkillBlock 
        :title='skill.name'
        :local='skill.location'
        :description='skill.description'
        :techs='skill.techs'
      >
      </SkillBlock>
    </div>
    <h2 class="skills-title">Outras habilidades</h2>
      <div class="experience" v-for="skill in parsedSkills['others']" :key='skill.name'>
      <SkillBlock 
        :title='skill.name'
        :local='skill.location'
        :description='skill.description'
        :techs='skill.techs'
      >
      </SkillBlock>
      </div>
  </div>
</template>

<script>
import SkillCard from "./SkillCard.vue";
import SkillBlock from "./SkillBlock.vue";
import data from '../../skills.json';

export default {
  name: "App",
  components: {
    SkillCard,
    SkillBlock,
  },
  data() {
    return {
      skills: data.skills,
      parsedSkills: []
    }
  },
  methods: {
    showData(){
      console.log(this.skills)
    },
    parseSkills() {
      this.parsedSkills = this.groupBy(this.skills, 'type');
    },
    groupBy(objectArray, property){
      return objectArray.reduce(function (total, obj) {
          let key = obj[property];
          if (!total[key]) {
            total[key] = [];
          }
          
          total[key].push(obj);
          return total;
        }, {});
    }
  },
  mounted() {
    this.parseSkills();
  }

};
</script>

<style lang="scss">
.card-section {
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto auto;
}

.skills-title {
  text-align: center;
  padding: 10px;
}

@media (max-width: 1400px) {
  .card-section {
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
  }
}

@media (max-width: 800px) {
  .card-section {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
  }
}

@media (max-width: 600px) {
  .card-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>