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
        </tr>
      </thead>
      <tbody v-for="info in $store.state.address" :key="info.id">
        <tr>
          <th scope="row">{{info.id}}</th>
          <td>{{info.nombre}}</td>
          <td>{{info.apellido}}</td>
          <td>{{info.email}}</td>
          <td>{{info.telefono}}</td>
          <td>{{info.direccion}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
