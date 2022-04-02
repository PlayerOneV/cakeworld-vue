import { createStore } from 'vuex'

export default createStore({
  state: {
    sabores: [
      { id: 1, img: require('@/assets/Sabores/chocolate.jpg'), nombre: 'Choco', precio: 150 },
      { id: 2, img: require('@/assets/Sabores/fresa.png'), nombre: 'Fresa', precio: 100 },
      { id: 3, img: require('@/assets/Sabores/limon.jpg'), nombre: 'Limon', precio: 200 },
      { id: 4, img: require('@/assets/Sabores/vainilla.png'), nombre: 'Vainilla', precio: 110 },
    ],
    adornos: [
      { id: 1, img: require('@/assets/Adornos/Chispas.jpg'), nombre: 'Chispas', precio: 150 },
      { id: 2, img: require('@/assets/Adornos/crema.jpg'), nombre: 'Crema', precio: 100 },
      { id: 3, img: require('@/assets/Adornos/CubiertaFresa.jpg'), nombre: 'Cubierta', precio: 200 },
      { id: 4, img: require('@/assets/Adornos/Glaseado.jpg'), nombre: 'Glaseado', precio: 110 },
    ],
    carrito: [],
    total : 0
  },
  getters: {
  },
  mutations: {
    agregarItem(state, articulo) {
      state.carrito.push(articulo) //Agregamos el articulo al carrito
      
      //Declaramos una variable para guardar la cantidad de articulos que tiene el carrito y el total de la compra
      let i =state.carrito.length
      let total = 0
      
      //Sumamos el precio de cada articulo del carrito en el total
      for(let x=0;x<i;x++){
        total += state.carrito[x].precio
      }

      //Asignamos el nuevo valor al state
      state.total = total
    },
  },
  actions: {
  },
  modules: {
  }
})
