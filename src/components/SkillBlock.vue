<template>
  <details>
    <summary>
      {{ title }} - {{ local }}
    </summary>
    <h3>Descrição</h3>
    <p>
      {{ description }}
    </p>
  </details>
</template>

<script>
export default {
  name: "SkillBkock",
  props: {
    title: String,
    local: String,
    description: String,
  },
};
</script>

<style lang="scss" scoped>
</style>