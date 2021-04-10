<template>
  <div class="contact-section">
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
      <a href="https://twitter.com/gabigol84">
        <fa class="icon" :icon="['fab', 'twitter']" />
        <p>@gabigol84</p>
      </a>
    </div>
    <div class="contact">
      <a href="https://www.instagram.com/gabigol84/">
        <fa class="icon" :icon="['fab', 'instagram']" />
        <p>@gabigol84</p>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.contact-section {
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto auto auto;

  .contact {
    a {
      text-decoration: none;
      color: #eee;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      grid-gap: 20px;

      .icon {
        transform: scale(3);
      }
    }
  }
}

@media (max-width: 600px) {
  .contact-section {
    grid-template-columns: auto;
    grid-template-rows: 1fr;
    grid-gap: 50px;
  }
}
</style>