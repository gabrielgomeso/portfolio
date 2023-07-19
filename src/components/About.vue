<template>
  <section class="about-block">
    <img
      class="about-image"
      src="../assets/images/biggerme.jpg"
      alt="Uma foto minha, sorrindo, com um hamburguer"
    />
    <div class="about-text--block">
      <h4 class="about-title">Sobre mim</h4>
      <span class="about-text">
        <p>
          {{$t('about-me-text')}}
        </p>
      </span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-block {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  align-items: center;
  justify-content: center;

  background-color: #2e5897;
  box-shadow: inset 0 1px 5px rgb(0, 0, 0);

  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  height: auto;
  padding: 20px;

  .about-image {
    width: 100%;
    max-width: 600px;
    min-width: 300px;
    height: auto;
    grid-column: 2 / 3;

    border: 1px solid #202426;
    border-radius: 10px;
    box-shadow: 1px 1px 10px 1px rgb(0, 0, 0);
  }

  .about-text--block {
    grid-column: 3 / 5;
    text-align: justify;
    word-spacing: -2px;
  }
}

@media (max-width: 1200px) {
  .about-block{
    .about-text--block {
      
      grid-column: 2 / 5;
      
    }
    
    .about-image{
      display: none;
    }
  }
}

@media (max-width: 400px) {
  .about-block{
    gap: 0px;
    grid-template-columns: 1fr;

    .about-text--block {
      grid-column: 1 / 6;
    }
    
    .about-image{
      display: none;
    }
  }
}
</style>