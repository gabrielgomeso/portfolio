<template>
  <a class="button">{{ text }}</a>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
  },
};
</script>

<style lang="scss">
  .button{
    padding: 20px;
    margin: 10px;
    border: 1px solid #eee;

    text-decoration: none;
    color: #eee;
    background-color: #D0672F;
  }

</style>