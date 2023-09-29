<template>
  <a class="btn"> {{ text }}</a>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
  },
};
</script>

<style lang="css">
.btn {
  margin-top: 10px;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  background: transparent;
  border: 2px solid #f4796b;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
  z-index: 1;
  position: relative;
}

.btn::before {
  content: "";
  position: absolute;
  background: #f4796b;
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.5s ease;
}

.btn:hover:before,
.btn:focus:before {
  width: 100%;
  box-shadow: 1px 1px 15px 2px white;
}
</style>
