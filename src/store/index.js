import { createStore } from 'vuex'

export default createStore({
  state: {
    sabores: [
      { id: 1, img: require('@/assets/Sabores/chocolate.jpg'), nombre: 'Choco', precio: 150, stock: 150 },
      { id: 2, img: require('@/assets/Sabores/fresa.png'), nombre: 'Fresa', precio: 100, stock: 130 },
      { id: 3, img: require('@/assets/Sabores/limon.jpg'), nombre: 'Limon', precio: 200, stock: 150 },
      { id: 4, img: require('@/assets/Sabores/vainilla.png'), nombre: 'Vainilla', precio: 110, stock: 200 },
    ],
    adornos: [
      { id: 1, img: require('@/assets/Adornos/Chispas.jpg'), nombre: 'Chispas', precio: 150, stock: 154 },
      { id: 2, img: require('@/assets/Adornos/crema.jpg'), nombre: 'Crema', precio: 100, stock: 102 },
      { id: 3, img: require('@/assets/Adornos/CubiertaFresa.jpg'), nombre: 'Cubierta', precio: 200, stock: 140 },
      { id: 4, img: require('@/assets/Adornos/Glaseado.jpg'), nombre: 'Glaseado', precio: 110, stock: 111 },
    ],
    carrito: [],
    address: [],
    orden: [],
    nombre: "",
    apellido: "",
    telefono: null,
    email: "",
    direccion: "",
    instrucciones: "",
    total: 0,
  },
  getters: {
  },
  mutations: {
    agregarItem(state, articulo) {
      state.carrito.push(
        {
          id: articulo.id,
          nombre: articulo.nombre,
          precio: articulo.precio,
        }
      )//Agregamos el articulo al carrito

      for (let i = 0; i < state.sabores.length; i++) {
        const sabor = state.sabores[i].nombre;
        const adorno = state.adornos[i].nombre;

        if (articulo.nombre == sabor) {
          state.sabores[i].stock = state.sabores[i].stock - 1
        } else if (articulo.nombre == adorno) {
          state.adornos[i].stock = state.adornos[i].stock - 1
        }
      }

      //Declaramos una variable para guardar la cantidad de articulos que tiene el carrito y el total de la compra
      let i = state.carrito.length
      let total = 0

      //Sumamos el precio de cada articulo del carrito en el total
      for (let x = 0; x < i; x++) {
        total += state.carrito[x].precio
      }
      //Asignamos el nuevo valor al state
      state.total = total

      console.log(state.carrito)
    },
    agregarOrden(state) {
      let i = state.address.length + 1
      state.address.push(
        {
          id: i,
          nombre: state.nombre,
          apellido: state.apellido,
          email: state.email,
          telefono: state.telefono,
          direccion: state.direccion,
          instrucciones: state.instrucciones,
          ingredientes: state.carrito,
          total: state.total
        }
      )

      console.log(state.address)
    }
  },
  actions: {
  },
  modules: {
  }
})
