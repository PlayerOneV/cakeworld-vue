<template>
  <div class="d-flex justify-content-between mt-3 border pt-3 pb-3 ps-3" v-for="sabor in sabores" :key="sabor.id">
    <img v-bind:src="sabor.img" alt="notFound" class="img">
    <span>{{sabor.nombre}}</span>
    <span class="pe-3">${{sabor.precio}}</span>
    <button type="button" class="btn btn-primary me-3"><img src="@/assets/cart.svg" alt=""></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sabores: [
        {id: 1, img: require('@/assets/Sabores/chocolate.jpg'), nombre: 'Choco', precio: 150},
        {id: 2, img: require('@/assets/Sabores/fresa.png'), nombre: 'Fresa', precio: 100},
        {id: 3, img: require('@/assets/Sabores/limon.jpg'), nombre: 'Limon', precio: 200},
        {id: 4, img: require('@/assets/Sabores/vainilla.png'), nombre: 'Vainilla', precio: 110},
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