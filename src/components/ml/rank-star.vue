<template>
  <Header></Header>

  <LinkNavigator />

  <!-- ======= Portfolio Details Section ======= -->
  <section id="portfolio-details" class="portfolio-details" style="background-color: #2d3238">
    <div class="container">
      <div class="row">
        <SidePanel type="starML" />

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
import SidePanel from "@/components/general/sidePanel.vue";
import LinkNavigator from '@/components/general/linkNavigator.vue';

export default {
  components: {
    Header,
    Footer,
    Pembayaran,
    WA,
    Biodata,
    SidePanel,
    LinkNavigator
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