<template>
  <div class="container">
    <table class="table table-bordered table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Email</th>
          <th scope="col">Telefono</th>
          <th scope="col">Dirección</th>
          <th scope="col">Instrucciones</th>
          <th scope="col">Ingredientes</th>

        </tr>
      </thead>
      <tbody v-for="info in $store.state.address" :key="info.id">
        <tr>
          <th scope="row" class="pt-4">{{info.id}}</th>
          <td class="pt-4">{{info.nombre}}</td>
          <td class="pt-4">{{info.apellido}}</td>
          <td class="pt-4">{{info.email}}</td>
          <td class="pt-4">{{info.telefono}}</td>
          <td class="pt-4">{{info.direccion}}</td>
          <td class="pt-4">{{info.instrucciones}}</td>
          <td ><h6 v-for="a in info.ingredientes" :key="a.id">{{a.nombre}}</h6></td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex">
      <table class="table table-bordered table-dark w-50 me-3">
      <thead>
        <tr>
          <th scope="col">Sabor</th>
          <th scope="col">Cantidad</th>
        </tr>
      </thead>
      <tbody v-for="info in $store.state.sabores" :key="info.id">
        <tr>
          <th scope="row" class="pt-4">{{info.nombre}}</th>
          <td class="pt-4">{{info.stock}}</td>
        </tr>
      </tbody>
    </table>
    <table class="table table-bordered table-dark w-50">
      <thead>
        <tr>
          <th scope="col">Adorno</th>
          <th scope="col">Cantidad</th>
        </tr>
      </thead>
      <tbody v-for="info in $store.state.adornos" :key="info.id">
        <tr>
          <th scope="row" class="pt-4">{{info.nombre}}</th>
          <td class="pt-4">{{info.stock}}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
