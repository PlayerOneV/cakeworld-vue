<template>
  <div class="d-flex justify-content-between mt-3 border pt-3 pb-3 ps-3" v-for="sabor in $store.state.sabores" :key="sabor.id">
    <img v-bind:src="sabor.img" alt="notFound" class="img">
    <span :id="'saborName' + sabor.id">{{sabor.nombre}}</span>
    <span :id="'saborPrice' + sabor.id" class="pe-3">${{sabor.precio}}</span>
    <button type="button" class="btn btn-primary me-3" @click="$store.commit('agregarItem',sabor)"><img src="@/assets/cart.svg" alt=""></button>
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