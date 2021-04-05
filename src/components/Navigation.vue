<template>
  <div class="navigation">
    <a href="#about">Sobre</a>
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
  }

  @media (max-width: 800px){
  .navigation{
    justify-content: center;
  }
}
</style>