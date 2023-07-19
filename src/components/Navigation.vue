<template>
  <div class="navigation">
    <a href="#about">{{$t('About')}}</a>
    <a href="#skills">{{$t('Skills')}}</a>
    <a href="#contact">{{$t('Contact')}}</a>
    <div>
      {{$t('language')}}: <span @click="$i18n.locale = $i18n.availableLocales[0]">Português</span>  | <span @click="$i18n.locale = $i18n.availableLocales[1]">English</span>
    </div>
  </div>
</template>

<style lang="scss">
  .navigation{
    width: 100vw;
    max-width: 100%;
    height: 50px;
    padding: 0 15px;

    background-color: #2E5897;

    box-shadow: inset 0 1px 5px rgb(0, 0, 0);

    display: flex;
    align-items: center;
    justify-content: flex-end;
    grid-gap: 25px;

    a{
      text-decoration: none;
      color: #eee;
      padding: 10px;
    }

    span {
      cursor: pointer;
    }
  }

  @media (max-width: 800px){
  .navigation{
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