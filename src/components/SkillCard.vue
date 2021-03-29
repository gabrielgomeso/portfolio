<template>
  <div class="card-container">
    <div class="card-content">
      <div class="card-front">
        <div class="card-title">
          Estágio em Web Ops <span class="workplace">Quero Educação</span>
          <img
            src="https://gestao.quero.com/wp-content/uploads/2020/01/Logo-Quero-Institucional-Colorido-Tela-RGB-2.png"
            class="card-img"
          />
          <span class="card-date">Emprego atual</span>
        </div>
      </div>
      <div class="card-back">
        <div class="card-info">
          <div>
            <span class="card-back-highlight">Tecnologias usadas</span>
            <ul class="tech-list">
              <li>Ruby e Ruby on Rails</li>
              <li>Fundamentos de VueJS</li>
              <li>Fundamentos de HTML/CSS</li>
              <li>Git e Github</li>
            </ul>
          </div>
          <div>
            <span class="card-back-highlight">Descrição</span>
            <div class="job-description">
              Aprendi a trabalhar em equipe, a me comunicar. Aprendi a resolver
              problemas, ler scripts diversos. Foco em Rails e no produto Quero
              Pago.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.card-container {
  position: relative;
  width: 250px;
  height: 320px;
  margin-right: 15px;
}

.card-content {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s ease;

  &:hover {
    transform: rotateY(180deg);
  }
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px;

  background-color: #313131;
  display: flex;
  flex-direction: column;

  box-shadow: 1px 1px 15px 2px black;
}

.card-front {
  text-align: center;
  justify-content: space-evenly;

  .card-title {
    padding: 20px;
    font-weight: 600;

    .workplace {
      color: rgb(190, 190, 190);
      font-weight: 400;
      display: block;
    }
  }

  .card-img {
    width: 100%;
    -webkit-filter: drop-shadow(5px 5px 5px black);
    filter: drop-shadow(5px 5px 2px black);
  }
}

.card-back {
  transform: rotateY(180deg);

  .card-info {
    padding: 20px;
    display: flex;
    flex-direction: column;
    grid-gap: 20px;
  }

  .card-back-highlight {
    font-weight: 800;
  }

  .tech-list,
  .job-description {
    color: #999;
  }

  .job-description {
    text-align: justify;
    font-size: 14px;
  }
}
</style>
