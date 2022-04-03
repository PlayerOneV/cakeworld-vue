<template>
  <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Información general</h4>
        <form class="needs-validation" novalidate="" @submit.prevent="$store.commit('agregarOrden')">
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="firstName" placeholder="" required="" v-model="$store.state.nombre">
              <div class="invalid-feedback">
                Se requiere un nombre valido.
              </div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Apellido</label>
              <input type="text" class="form-control" id="lastName" placeholder="" required="" v-model="$store.state.apellido">
              <div class="invalid-feedback">
                Se requiere un apellido valido.
              </div>
            </div>

            <div class="col-12">
              <label for="username" class="form-label">Telefono</label>
              <div class="input-group has-validation">
                <input type="tel" class="form-control" id="username" placeholder="998-458-8754" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required="" v-model="$store.state.telefono">
              <div class="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" placeholder="email@example.com" v-model="$store.state.email">
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Dirección</label>
              <input type="text" class="form-control" id="address" placeholder="Sm 323 Mz 1 Lt 32" required="" v-model="$store.state.direccion">
              <div class="invalid-feedback">
                Por favor introduce tu dirección.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Dirección</label>
              <textarea type="text" class="form-control" id="address" placeholder="Escribe aqui las instrucciones..." required="" v-model="$store.state.instrucciones"> </textarea>
              <div class="invalid-feedback">
                Por favor introduce tus instrucciones.
              </div>
            </div>
          </div>

          <hr class="my-4">

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="same-address">
            <label class="form-check-label" for="same-address">La dirección de entrega es la misma que la dirección de factura.</label>
          </div>

          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="save-info">
            <label class="form-check-label" for="save-info">Guardar esta información para la siguiente compra.</label>
          </div>

          <hr class="my-4">

          <h4 class="mb-3">Pago</h4>

          <div class="my-3">
            <div class="form-check">
              <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked="" required="">
              <label class="form-check-label" for="credit">Tarjeta de crédito</label>
            </div>
            <div class="form-check">
              <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required="">
              <label class="form-check-label" for="debit">Tarjeta de debito</label>
            </div>
            <div class="form-check">
              <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required="">
              <label class="form-check-label" for="paypal">PayPal</label>
            </div>
          </div>

          <div class="row gy-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">Nombre del propietario</label>
              <input type="text" class="form-control" id="cc-name" placeholder="" required="">
              <small class="text-muted">Nombre completo como se muestra en la tarjeta</small>
              <div class="invalid-feedback">
                Nombre en la tarjeta requerido
              </div>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label">Número de la tarjeta</label>
              <input type="text" class="form-control" id="cc-number" placeholder="" required="">
              <div class="invalid-feedback">
                Número de la tarjeta requerido
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Expiración</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">
              <div class="invalid-feedback">
                Fecha de expiración requerida
              </div>
            </div>
            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
              <div class="invalid-feedback">
                Codigo de seguridad requerido
              </div>
            </div>
          </div>
          <hr class="my-4">
          <button class="w-100 btn btn-primary btn-lg" type="submit">Confirmar compra</button>
        </form>
      </div>
</template>

<style>
label{
    display: flex;
}
span{
    margin-top: 0%;
}
</style>