<template>
  <a class="btn"> <slot> {{ text }} </slot> </a>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style lang="css">
  
.btn{
  margin-top: 10px;
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  background: transparent;
  border: 2px solid #F4796B;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
  z-index: 1;
  position: relative;
}

.btn::before{
  content: '';
  position: absolute;
  background: #F4796B;
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all .5s ease;
}

.btn:hover:before {
  width: 100%;
}


</style>