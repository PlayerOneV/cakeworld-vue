<template>
  <div class="d-flex justify-content-between mt-3 border pt-3 pb-3 ps-3" v-for="adorno in adornos" :key="adorno.id">
    <img v-bind:src="adorno.img" alt="notFound" class="img">
    <span>{{adorno.nombre}}</span>
    <span class="pe-3">${{adorno.precio}}</span>
    <button type="button" class="btn btn-primary me-3"><img src="@/assets/cart.svg" alt=""></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adornos: [
        {id: 1, img: require('@/assets/Adornos/Chispas.jpg'), nombre: 'Chispas', precio: 150},
        {id: 2, img: require('@/assets/Adornos/crema.jpg'), nombre: 'Crema', precio: 100},
        {id: 3, img: require('@/assets/Adornos/CubiertaFresa.jpg'), nombre: 'Cubierta', precio: 200},
        {id: 4, img: require('@/assets/Adornos/Glaseado.jpg'), nombre: 'Glaseado', precio: 110},
      ],
    }
  }
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