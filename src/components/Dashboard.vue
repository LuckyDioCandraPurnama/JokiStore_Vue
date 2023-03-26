<template>
  <Header></Header>
  <section id="hero" class="d-flex flex-column justify-content-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-8">
          <h1>UrLuck Store</h1>
          <h2>Store Specialist Mobile Legends Bang Bang dan Game Lainnya</h2>
        </div>
      </div>
      <!-- <script src="../assets/js/main.js"></script> -->
    </div>
  </section>
  <section id="portfolio" class="portfolio" style="background: #212529">
    <div class="container">
      <div class="section-title">
        <h2 style="color: white">Services</h2>
      </div>
      <div class="row portfolio-container">
        <div class="col-lg-4 col-md-6 portfolio-item filter-card">
          <img
            src="../assets/img/portfolio/portfolio-4.jpg"
            class="img-fluid"
            alt=""
          />
          <div class="portfolio-info">
            <h4>Paket Joki Ranked</h4>
            <p>Jasa Joki (Up Rank)</p>
            <!-- <router-link to="/rank-pack"> -->
              <a href="/rank-pack" class="details-link" title="More Details"
                ><i class="bx bx-cart"></i
              ></a>
            <!-- </router-link> -->
          </div>
        </div>
        <div class="col-lg-4 col-md-4 portfolio-item filter-card">
          <img
            src="../assets/img/portfolio/portfolio-7.jpg"
            class="img-fluid"
            alt=""
          />
          <div class="portfolio-info">
            <h4>Joki Ranked Per(star/point)</h4>
            <p>Jasa Joki (Up Rank)</p>
            <a href="/rank-star" class="details-link" title="More Details"
              ><i class="bx bx-cart"></i
            ></a>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 portfolio-item filter-card">
          <img
            src="../assets/img/portfolio/portfolio-8.jpg"
            class="img-fluid"
            alt=""
          />
          <div class="portfolio-info">
            <h4>Joki Classic</h4>
            <p>Jasa Joki (Up Winrate)</p>
            <a href="/classic" class="details-link" title="More Details"
              ><i class="bx bx-cart"></i
            ></a>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 portfolio-item filter-card">
          <img
            src="../assets/img/PUBG_RoyalePass.png"
            class="img-fluid"
            alt=""
          />
          <div class="portfolio-info">
            <h4>Paket Joki Tier</h4>
            <p>Jasa Joki (Up Tier)</p>
            <a
              href="pubg-tier-pack.html"
              class="details-link"
              title="More Details"
              ><i class="bx bx-cart"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>
<style scoped>
@import "../assets/css/style.css";
</style>
<script setup>
import Header from "@/components/Header2.vue";
import Footer from "@/components/Footer2.vue";
</script>

