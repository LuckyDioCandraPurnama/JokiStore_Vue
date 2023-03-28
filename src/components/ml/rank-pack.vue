<template>
  <Header></Header>
  <!-- ======= Breadcrumbs ======= -->
  <section id="breadcrumbs" class="breadcrumbs">
    <!-- style="background-color: #212529" -->
    <div class="container">
      <ol>
        <li><a href="/">Home</a></li>
        <li style="color: white">Service Details</li>
      </ol>
      <h2 style="color: white">Paket Joki Ranked</h2>
    </div>
  </section>
  <!-- End Breadcrumbs -->
  <!-- ======= Portfolio Details Section ======= -->
  <section id="portfolio-details" class="portfolio-details">
    <!-- style="background-color: #2d3238" -->
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mt-2 mb-2">
          <div class="portfolio-details-slider">
            <img src="@/assets/img/portfolio/portfolio-4.jpg" alt="" />
            <div class="portfolio-info">
              <h3>Paket Joki Ranked</h3>
              <p>Cara Order :&nbsp;</p>
              <ol>
                <li>Lengkapi Data Joki Dengan Teliti!</li>
                <li>Pilih&nbsp;Jenis Paket Joki</li>
                <li>Pilih&nbsp;Metode Pembayaran</li>
                <li>Masukkan&nbsp;nomor WhatsApp&nbsp;yg benar!</li>
                <li>Klik&nbsp;Beli&nbsp;&amp;&nbsp;lakukan Pembayaran</li>
                <li>
                  Orderan Joki akan segera di proses setelah pembayaran berhasil
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div class="col-lg-8 mt-2 mb-2">
          <div class="row">
            <div class="col">
              <div class="portfolio-info">
                <h3>Lengkapi Informasi</h3>
                <form
                  action="forms/contact.php"
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
                          <option value="moonton">
                            Akun Moonton (Rekomendasi)
                          </option>
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

          <div class="row mt-3">
            <div class="col">
              <div class="portfolio-info">
                <h3>Pilih Paket Joki Ranked</h3>
                <div class="row row-cols-2">
                  <div
                    v-for="(paket, index) in paketJoki"
                    :key="paket"
                    class="col-lg-4 mt-3"
                  >
                    <label class="list-group shadow h-100">
                      <input type="radio" name="inlineRadioOptions" />
                      <div
                        @click="getPaketPrice(index, paket.harga)"
                        class="list-group-item h-100"
                      >
                        <div class="row">
                          <div class="col">
                            <div class="row">
                              <div class="col name-prod">{{ paket.jenis }}</div>
                            </div>

                            <div class="row">
                              <div class="col nominal-price">
                                Rp{{ paket.harga }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Pembayaran ref="PB" />

          <div class="row mt-3">
            <div class="col">
              <div class="portfolio-info">
                <h3>Nomer WhatsApp</h3>
                <!-- <div class="col-lg-8 mt-5 mt-lg-0"> -->

                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  class="php-email-form"
                >
                  <div class="row">
                    <div class="col-md-12 form-group">
                      <input
                        type="text"
                        name="wa"
                        class="form-control"
                        id="wa"
                        placeholder="Nomer WhatsApp / No HP [628xxx]"
                        required
                      />
                    </div>

                    <div class="col-md-12">
                      <button style="width: 100%" type="submit">
                        <i class="bx bx-cart"></i> Order Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Portfolio Details Section -->
  <Footer></Footer>
</template>
<style scoped>
@import "@/assets/css/style.css";
</style>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer2.vue";
import Pembayaran from "@/components/general/pembayaran.vue";

export default {
  components: {
    Header,
    Footer,
    Pembayaran,
  },

  data() {
    return {
      id: "",
      paketJoki: [],
      jenisPembayaran: [],
    };
  },

  methods: {
    getPaketJoki: function () {
      this.axios.get("http://127.0.0.1:8000/api/paket").then((result) => {
        this.paketJoki = result.data;
      });
    },

    getPaketPrice: function (index, prices) {
      this.id = index;
      for (var i = 0; i < this.jenisPembayaran.length; i++) {
        for (var j = 0; j < this.jenisPembayaran[i].tipe.length; j++) {
          this.jenisPembayaran[i].tipe[j].price = prices;
        }
      }
    },
  },

  mounted() {
    this.jenisPembayaran = this.$refs.PB.jenisPembayaran;
    this.getPaketJoki();
  },
};
</script>
