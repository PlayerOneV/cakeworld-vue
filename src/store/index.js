import { createStore } from 'vuex'

export default createStore({
  state: {
    sabores: [
      {id: 1, img: require('@/assets/Sabores/chocolate.jpg'), nombre: 'Choco', precio: 150},
      {id: 2, img: require('@/assets/Sabores/fresa.png'), nombre: 'Fresa', precio: 100},
      {id: 3, img: require('@/assets/Sabores/limon.jpg'), nombre: 'Limon', precio: 200},
      {id: 4, img: require('@/assets/Sabores/vainilla.png'), nombre: 'Vainilla', precio: 110},
    ],
    adornos: [
      {id: 1, img: require('@/assets/Adornos/Chispas.jpg'), nombre: 'Chispas', precio: 150},
      {id: 2, img: require('@/assets/Adornos/crema.jpg'), nombre: 'Crema', precio: 100},
      {id: 3, img: require('@/assets/Adornos/CubiertaFresa.jpg'), nombre: 'Cubierta', precio: 200},
      {id: 4, img: require('@/assets/Adornos/Glaseado.jpg'), nombre: 'Glaseado', precio: 110},
    ],
    carrito: [
      {name: String, precio:Number}
    ]
  },
  getters: {
    agregarItem(state){
      console.log(state.sabores);
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
