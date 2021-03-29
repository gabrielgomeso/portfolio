<template>
  <section class="container">
    <h1 class="greetings">Meu nome é Gabriel Gomes e eu sou um
      <span class="typed-text"> {{ typeValue }} </span>
      <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
    </h1>
    <a href="#skills">Saiba mais sobre mim</a>
  </section>
</template>

<script>
  export default {
    data: () => {
      return {
        typeValue: '',
        typeStatus: false,
        typeArray: ['desenvolvedor Frontend', 'viajante no tempo e espaço', 'mestre de RPG', 'main Syndra no LoL', 'leitor de bons livros (e ruins, às vezes)'],
        typingSpeed: 50,
        erasingSpeed: 50,
        newTextDelay: 2000,
        typeArrayIndex: 0,
        charIndex: 0
      }
    },
    methods: {
      typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;

          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;

          setTimeout(this.typeText, this.typingSpeed);
        } 
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;

          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;

          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200)
    }
  }
</script>


<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

  .container{
    width: 100vw;
    height: 100vh;
    color: #eee;
    background: #222;

    font-family: 'Roboto Mono';

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .greetings{
    font-size: 2rem;
    

    .typed-text{
      color: red;
    }

    .cursor{
      display: inline-block;
      margin-left: 3px;
      width: 4px;
      background-color: #fff;
      animation: cursorBlink 1s infinite;
    }

    .cursor.typing{
      animation: none;
    }
  }

  @keyframes cursorBlink {
    49% { background-color: #fff; }
    50% {  background-color: transparent; }
    99% { background-color: transparent; }
  }

</style>