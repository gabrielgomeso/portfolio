<template>
  <h1 class="greetings">
    Gabriel Gomes de Oliveira <br />
    <span class="typed-text"> {{ typeValue }} </span>
    <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
  </h1>
</template>

<script>
export default {
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      typingSpeed: 50,
      erasingSpeed: 50,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;

        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length) this.typeArrayIndex = 0;

        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  computed: {
    typeArray() {
      return [
        this.$t("greetings.job"),
        this.$t("greetings.traveler"),
        this.$t("greetings.game"),
        this.$t("greetings.hobby"),
      ];
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>
<style lang="scss">
.greetings {
  font-size: 1.5rem;

  .typed-text {
    color: #2e5897;
    font-size: 1.4rem;
  }
  .cursor {
    display: inline-block;

    margin-left: 1px;
    width: 3px;
    background-color: #fff;
    animation: cursorBlink 1s infinite;
  }

  .cursor.typing {
    animation: none;
  }
}

@keyframes cursorBlink {
  49% {
    background-color: #fff;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
