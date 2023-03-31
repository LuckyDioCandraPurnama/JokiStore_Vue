<template>
  <Header></Header>

  <LinkNavigator />

  <!-- ======= Portfolio Details Section ======= -->
  <section id="portfolio-details" class="portfolio-details" style="background-color: #2d3238">
    <div class="container">
      <div class="row">
        <SidePanel type="classicML" />
        
        <div class="col-lg-8">
          <Biodata />

          <div class="row mt-3">
            <div class="col">
              <div class="card bg-dark shadow portfolio-info">
                <h3>Pilih Joki Classic</h3>
                <div class="row">
                  <div class="col-lg-4 mt-3">
                    <label class="list-group shadow h-100">
                      <input
                        type="radio"
                        name="inlineRadioOptions"
                      />
                      <div class="list-group-item h-100">
                        <div class="row">
                          <div class="col">
                            <div class="row">
                              <div class="col name-prod">Classic / Win</div>
                            </div>
                            
                            <div class="row">
                              <div class="col nominal-price">Rp 3.000</div>
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
              <div class="card bg-dark shadow portfolio-info">
                <h3>Masukkan Jumlah Win</h3>
                <form
                  method="post"
                  role="form"
                  class="php-email-form"
                  style="background:transparent"
                >
                  <div class="col-md-12 form-group">
                    <input
                      type="number"
                      name="win"
                      class="form-control"
                      id="win"
                      placeholder="Masukkan Jumlah Win"
                      required min="5"
                    />
                  </div>

                  <div class="col-md-12">
                    <p>
                      Minimal Order Untuk Joki Classic ( 5 Win ) Jika Kurang Dari
                      Minimal order maka uang akan hangus
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
import SidePanel from '@/components/general/sidePanel.vue';
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
      jenisPembayaran: []
    }
  },

  mounted() {
    this.jenisPembayaran = this.$refs.PB.jenisPembayaran
  }
}
</script>