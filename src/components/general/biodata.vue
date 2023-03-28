<template>
  <div class="row">
    <div class="col">
      <div class="portfolio-info card bg-dark shadow">
        <h3>Lengkapi Informasi</h3>
        <form
          method="post"
          role="form"
          class="php-email-form"
          style="background: transparent"
        >
          <div class="row row-cols row-cols-md">
            <div class="col-lg-6">
              <div class="form-group mb-3">
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="email"
                  placeholder="Masukkan Email/No HP"
                  required
                />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="password"
                  id="password"
                  placeholder="Masukkan Password"
                  required
                />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="form-group mb-3">
                <input
                  type="text"
                  name="req"
                  class="form-control"
                  id="req"
                  placeholder="Request Hero"
                />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="form-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  name="catatan"
                  id="catatan"
                  placeholder="Catatan Untuk Penjoki"
                />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="form-group mb-3">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="name"
                  placeholder="User ID / Nick Name"
                  required
                />
              </div>
            </div>

            <div class="col-lg-6">
              <div class="form-group mb-3">
                <select
                  name="login"
                  id="login"
                  placeholder="Login Via"
                  class="form-select"
                >
                  <option value="">Login Via</option>
                  <option value="moonton">Akun Moonton (Rekomendasi)</option>
                  <option value="vk">Akun VK (Rekomendasi)</option>
                  <option value="fb">facebook</option>
                  <option value="tt">TikTok</option>
                </select>
              </div>
              <!-- <label for="Login Via"></label> -->
              <!-- <input type="email" class="form-control" name="email" id="email" placeholder="Login Via" required> -->
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>