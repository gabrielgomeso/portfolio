<template>
  <div class="navigation">
    <a href="#about">Sobre mim</a>
    <a href="#skills">Competências</a>
    <a href="#contact">Contato</a>

  </div>
</template>

<style lang="scss">
  .navigation{
    width: 100vw;
    max-width: 100%;
    height: 50px;

    background-color: #2E5897;

    box-shadow: 5px 5px 10px 1px #333;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    grid-gap: 25px;

    a{
      text-decoration: none;
      color: #eee;
      padding: 10px;
    }
  }
</style>