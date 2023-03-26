<template>
  <!-- <div class="container" style="background: yellow"> -->
  <section id="hero" class="d-flex flex-column justify-content-center">
    <div class="container">
      <section id="pricing" class="pricing" style="background: transparent">
      <div class="col-lg-6" style="margin: 0 auto">
        <div class="box border border-success">
          <h3>Login</h3>
          <form
            action="forms/contact.php"
            method="post"
            role="form"
            class="php-email-form"
            style="width: 100%; background: transparent"
          >
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                placeholder="Masukkan username"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="Masukkan password"
              />
            </div>
            <!-- <button type="submit" class="btn btn-primary btn-user btn-block">
              Login
            </button> -->
          </form>
          <div class="btn-wrap">
            <a
              href="/"
              class="btn-buy"
              >Login</a
            >
          </div>
        </div>
      </div>
      </section>
    </div>

    <!-- </div> -->
  </section>
  <!-- </div> -->
</template>
<style scoped>
@import "../assets/css/style.css";
</style>