<template>
  <div class="card-container">
    <div class="card-content">
      <div class="card-front">
        <div class="card-title">
          {{ title }}<span class="workplace"> {{ workplace }}</span>
          <img
            :src="picture_src"
            class="card-img"
          />
          <span class="card-date"> {{ worktime }}</span>
        </div>
      </div>
      <div class="card-back">
        <div class="card-info">
          <div>
            <span class="card-back-highlight">Tecnologias usadas</span>
            <ul class="tech-list">
              <li v-for="tech in techs">
                {{ tech }}
              </li>
            </ul>
          </div>
          <div>
            <span class="card-back-highlight">Descrição</span>
            <div class="job-description">
              {{ description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SkillCard',
    props: {
      title: String,
      workplace: String,
      worktime: String,
      picture_src: String,
      techs: Array,
      description: String,
    },
  };
</script>


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
    font-size: 14px;
    color: #999;
  }

  .job-description {
    text-align: justify;
  }
}
</style>
