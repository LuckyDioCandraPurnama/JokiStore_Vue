<template>
  <Header></Header>
  <!-- ======= Breadcrumbs ======= -->
  <section id="breadcrumbs" class="breadcrumbs" style="background-color: #212529" >
    <div class="container">
      <ol>
        <li style="color: white"><a href="/">Home</a></li>
        <li style="color: white">Service Details</li>
      </ol>
      <h2>Joki Ranked Regular</h2>
    </div>
  </section>
  <!-- End Breadcrumbs -->

  <!-- ======= Portfolio Details Section ======= -->
  <section id="portfolio-details" class="portfolio-details" style="background-color: #2d3238">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="card bg-dark shadow portfolio-details-slider">
            <img src="@/assets/img/portfolio/portfolio-7.jpg" alt="" />
            <div class="portfolio-info">
              <h3>Joki Ranked Regular</h3>
              <p>Orderan Di Cek Jam 13.00 - 23.00 WIB&nbsp;</p>
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
              <p>
                <font color="#ffff00"
                  >Estimasi Proses Jasa Joki Kita Usahakan Secepatnya</font
                >
              </p>
              <p>
                <font color="#ffff00">Minimal 12 Jam - Maximal 3x24 Jam</font>
              </p>
              <p>
                <font color="#ffff00"
                  >Catatan Penting ! :<br />1. Sebelum Order Mohon Baca
                  Informasi (Banner)</font
                >
              </p>
              <Modal></Modal>
            </div>
          </div>
        </div>

        <div class="col-lg-8">
          <Biodata />

          <div class="row mt-3">
            <div class="col">
              <div class="portfolio-info">
                <h3>Pilih Joki Ranked per Star</h3>
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
              <div class="portfolio-info card bg-dark shadow">
                <h3>Jumlah Order Star</h3>
                <form
                  method="post"
                  role="form"
                  class="php-email-form"
                  style="background: transparent"
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
                      Minimal Order Untuk Rank (GM/Epic/Legend/Mythic) = 3 Star
                      Jika Kurang Dari Minimal order maka uang akan hangus
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <Pembayaran ref="PB" />

          <WA />
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
import WA from "@/components/general/noWA.vue";
import Biodata from "@/components/general/biodata.vue";

export default {
  components: {
    Header,
    Footer,
    Pembayaran,
    WA,
    Biodata
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
