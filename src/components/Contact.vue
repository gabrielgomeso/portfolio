<template>
  <section class="contact-section">
    <div class="contact">
      <a href="https://www.linkedin.com/in/gabrielgomeso/">
        <fa class="icon" :icon="['fab', 'linkedin']" />
        <p>/in/gabrielgomeso</p>
      </a>
    </div>
    <div class="contact">
      <a href="https://github.com/gabrielgomeso">
        <fa class="icon" :icon="['fab', 'github']" />
        <p>/gabrielgomeso</p>
      </a>
    </div>
    <div class="contact">
      <a href="https://www.instagram.com/gabigol84/">
        <fa class="icon" :icon="['fab', 'instagram']" />
        <p>@gabigol84</p>
      </a>
    </div>
  </section>
</template>

<style lang="scss">
.contact-section {
  width: 100%;
  display: flex;
  grid-gap: 50px;
  align-items: center;
  justify-content: center;
  padding: 50px;

  background-color: #313131;
  height: auto;

  .contact {
    a {
      text-decoration: none;
      color: #eee;
      display: flex;
      grid-gap: 20px;

      .icon {
        transform: scale(3);
      }
    }
  }
}

@media (max-width: 800px) {
  .contact-section {
    display: flex;
    flex-direction: column;
  }
}
</style>