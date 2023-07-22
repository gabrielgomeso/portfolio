<template>
  <div class="navigation">
    <ul class="navigation-links">
      <li><a href="#about">{{$t('About')}}</a></li>
      <li><a href="#skills">{{$t('Skills')}}</a></li>
      <!-- <li><a href="#skills">{{$t('Articles')}}</a></li> -->
      <li><a href="#contact">{{$t('Contact')}}</a></li>
    </ul>

    <div>
      {{$t('language')}}: 
      <span @click="$i18n.locale = $i18n.availableLocales[0]" :class="{ active: selectedLanguage }">Português</span>  
      | 
      <span @click="$i18n.locale = $i18n.availableLocales[1]" :class="{ active: !selectedLanguage }">English</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  computed: {
    selectedLanguage() {
      return this.$i18n.locale === this.$i18n.availableLocales[0] ? true : false;
    },
  },
};
</script>

<style lang="scss">
  .navigation{
    width: 100vw;
    max-width: 100%;
    height: auto;
    padding: 15px 15px;

    background-color: #2E5897;

    box-shadow: inset 0 1px 5px rgb(0, 0, 0);

    display: flex;
    align-items: center;
    justify-content: flex-end;
    grid-gap: 25px;

    a {
      font-size: clamp(1rem, 2.5vw, 1.5rem);
      text-decoration: none;
      color: #eee;
      padding: 0 20px;
      white-space: nowrap;
    }

    span {
      cursor: pointer;
    }

    .navigation-links {
      list-style-type: none;
      list-style-position: inside;
      display: flex;
    }
  }

  .active {
    background-color: #F4796B;
    border-radius: 8px;
    padding: 5px;
  }

  @media (max-width: 800px){
  .navigation{
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 320px){
    .navigation{
      grid-gap: 5px;
    }

    a{
      padding: 5px;
    }
  }
}
</style>