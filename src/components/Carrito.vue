<template>
  <div class="col-md-5 col-lg-4 order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Tu carrito</span>
          <span class="badge bg-primary rounded-pill">{{$store.state.carrito.length}}</span>
        </h4>
        <ul class="list-group mb-3">
          <li v-for="articulo in $store.state.carrito" :key="articulo.id" class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">{{articulo.nombre}}</h6>
            </div>
            <span class="text-muted">${{articulo.precio}}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between">
            <span>Total (MX)</span>
            <strong>${{$store.state.total}}</strong>
          </li>
        </ul>
      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>