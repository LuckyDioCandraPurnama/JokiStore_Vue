<template>
  <Header></Header>
  <!-- ======= Breadcrumbs ======= -->
  <section id="breadcrumbs" class="breadcrumbs" style="background-color: #212529">
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
  <section id="portfolio-details" class="portfolio-details" style="background-color: #2d3238">
    <div class="container">
      <div class="row">
        <SidePanel type="packML" />

        <div class="col-lg-8 mt-2 mb-2">
          <Biodata />

          <div class="row mt-3">
            <div class="col">
              <div class="portfolio-info card bg-dark shadow">
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
import SidePanel from '@/components/general/sidePanel.vue';

export default {
  components: {
    Header,
    Footer,
    Pembayaran,
    WA,
    Biodata,
    SidePanel,
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