<template>
  <div class="d-flex justify-content-between mt-3 border pt-3 pb-3 ps-3" v-for="adorno in $store.state.adornos" :key="adorno.id">
    <img v-bind:src="adorno.img" alt="notFound" class="img">
    <span>{{adorno.nombre}}</span>
    <span class="pe-3">${{adorno.precio}}</span>
    <button type="button" id="buttonAdorno" class="btn btn-primary me-3" @click="$store.commit('agregarItem',adorno)"><img src="@/assets/cart.svg" alt=""></button>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.img{
  height: 100px;
  width: 150px;
}
span{
  margin-top: 35px;
  font-weight: 700;
}
button{
  height: 50px;
  width: 50px;
  margin-top: 20px;

}
</style>