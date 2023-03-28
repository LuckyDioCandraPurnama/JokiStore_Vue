<template>
  <Header></Header>
  <!-- ======= Breadcrumbs ======= -->
  <section id="breadcrumbs" class="breadcrumbs">
    <div class="container">
      <ol>
        <li><a href="/">Home</a></li>
        <li>Service Details</li>
      </ol>
      <h2>Joki Ranked Regular</h2>
    </div>
  </section>
  <!-- End Breadcrumbs -->

  <!-- ======= Portfolio Details Section ======= -->
  <section id="portfolio-details" class="portfolio-details">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="portfolio-details-slider">
            <img src="@/assets/img/portfolio/portfolio-7.jpg" alt="" />
            <div class="portfolio-info">
              <h3>Joki Ranked Regular</h3>
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

        <div class="col-lg-8">
          <div class="row">
            <div class="col">
              <div class="portfolio-info">
                <h3>Lengkapi Informasi</h3>
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  class="php-email-form"
                >
                  <div class="row">
                    <div class="col-md-6 form-group">
                      <input
                        type="email"
                        name="email"
                        class="form-control"
                        id="email"
                        placeholder="Masukkan Email/No HP"
                        required
                      />
                    </div>

                    <div class="col-md-6 form-group">
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
                  <br />
                  <div class="row">
                    <div class="col-md-6 form-group">
                      <input
                        type="text"
                        name="req"
                        class="form-control"
                        id="req"
                        placeholder="Request Hero"
                      />
                    </div>

                    <div class="col-md-6 form-group">
                      <input
                        type="text"
                        class="form-control"
                        name="catatan"
                        id="catatan"
                        placeholder="Catatan Untuk Penjoki"
                      />
                    </div>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        placeholder="User ID / Nick Name"
                        required
                      />
                    </div>

                    <div class="col-md-6 form-group">
                      <!-- <label for="Login Via"></label> -->
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
                      <!-- <input type="email" class="form-control" name="email" id="email" placeholder="Login Via" required> -->
                    </div>
                  </div>
                  <br />
                </form>
              </div>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col">
              <div class="portfolio-info">
                <h3>Pilih Joki Ranked Per (Star/Poin)</h3>
                <div class="row row-cols-2">
                  <div
                    v-for="(paket, index) in paketStar"
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

          <div class="row mt-3">
            <div class="col">
              <div class="portfolio-info">
                <h3>Jumlah Order (Star/Poin)</h3>
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  class="php-email-form"
                >
                  <!-- <div class="row"> -->
                  <div class="col-md-12 form-group">
                    <input
                      type="number"
                      name="qty"
                      class="form-control"
                      id="qty"
                      v-model="jumlahStar"
                      @input="changePaketPrice()"
                      required
                      min="3"
                    />
                  </div>
                  <div class="col-md-12">
                    <p>
                      Minimal Order Untuk Rank { (GM/Epic/Legend) = 3 Star ,
                      (Mythic+) = 30 Point } Jika Kurang Dari Minimal order maka
                      uang akan hangus
                    </p>
                  </div>
                </form>
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
                  <!-- <div class="row"> -->
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
                </form>

                <!-- </div> -->
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
      price: "",
      paketStar: [],
      jumlahStar: "3",
      jenisPembayaran: [],
    };
  },

  methods: {
    getPaketStar: function () {
      this.axios.get("http://127.0.0.1:8000/api/star").then((result) => {
        this.paketStar = result.data;
      });
    },

    getPaketPrice: function (index, prices) {
      this.id = index;
      this.price = prices
      this.changePaketPrice()
    },

    changePaketPrice:function() {
      for (var i = 0; i < this.jenisPembayaran.length; i++) {
        for (var j = 0; j < this.jenisPembayaran[i].tipe.length; j++) {
          this.jenisPembayaran[i].tipe[j].price = this.price * this.jumlahStar;
        }
      }
    }
  },

  mounted() {
    this.jenisPembayaran = this.$refs.PB.jenisPembayaran;
    this.getPaketStar();
  },
};
</script>
