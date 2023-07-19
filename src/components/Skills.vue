<template>
  <section id="skills" class="skills-block">
    <h2 class="skills-title">{{$t('work-experiences-title')}}</h2>
      <SkillBlock
        v-for="skill in parsedSkills['work']"
        :key="skill.name"
        :title="skill.name"
        :local="skill.location"
        :description="skill.description"
        :techs="skill.techs"
        :extra="skill.extra"
      >
      </SkillBlock>
    <h2 class="skills-title">{{$t('courses-title')}}</h2>
      <SkillBlock
        v-for="skill in parsedSkills['course']"
        :key="skill.name"
        :title="skill.name"
        :local="skill.location"
        :description="skill.description"
        :techs="skill.techs"
        :extra="skill.extra"
      >
      </SkillBlock>
    <h2 class="skills-title">{{$t('other-skills-title')}}</h2>
      <SkillBlock
        v-for="skill in parsedSkills['others']"
        :key="skill.name"
        :title="skill.name"
        :local="skill.location"
        :description="skill.description"
        :techs="skill.techs"
        :extra="skill.extra"
      >
      </SkillBlock>
  </section>
</template>

<script>
import SkillBlock from "./SkillBlock.vue";
import data from "../../skills.json";

export default {
  name: "App",
  components: {
    SkillBlock,
  },
  data() {
    return {
      skills: data.skills,
      parsedSkills: [],
    };
  },
  methods: {
    showData() {
      console.log(this.skills);
    },
    parseSkills() {
      this.parsedSkills = this.groupBy(this.skills, "type");
    },
    groupBy(objectArray, property) {
      return objectArray.reduce(function (total, obj) {
        let key = obj[property];
        if (!total[key]) {
          total[key] = [];
        }

        total[key].push(obj);
        return total;
      }, {});
    },
  },
  mounted() {
    this.parseSkills();
  },
};
</script>

<style lang="scss">
.skills-block {
    width: 100vw;
    max-width: 1200px;
    margin: 25px auto auto auto;
    padding-bottom: 50px;
    height: auto;
  }

.skills-title {
  text-align: center;
  padding: 10px;
}
</style>