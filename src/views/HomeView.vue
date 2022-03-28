<template>
  <div class="container">
    <h1>Ordena tu pastel</h1>
    <h3>Sabores</h3>
    <Sabores/>
    <h3 class="mt-4">Adornos</h3>
    <Adornos/>
  </div>
  <div class="container container2">
    <h3 class="mt-4">Confirma tu orden</h3>
    <main>
      <div class="row g-5">
        <Carrito/>
        <Contacto/>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
import Sabores from '@/components/Sabores.vue'
import Adornos from '@/components/Adornos.vue'
import Contacto from '@/components/Contacto.vue'
import Carrito from '@/components/Carrito.vue'

export default {
  data() {
    return {
      
    }
  },
  components: {
    Sabores,
    Adornos,
    Contacto,
    Carrito
  }
}
</script>

<style>
.container2 {
  max-width: 960px;
}
</style>