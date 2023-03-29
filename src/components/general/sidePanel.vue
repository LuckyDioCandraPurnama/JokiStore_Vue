<template>
  <div class="col-lg-4 mt-2 mb-2">
    <div class="card bg-dark shadow portfolio-details-slider">
      <img v-if="type === 'packML'" src="@/assets/img/portfolio/portfolio-4.jpg" />
      <img v-else-if="type === 'rankML'" src="@/assets/img/portfolio/portfolio-7.jpg" />
      <img v-else-if="type === 'classicML'" src="@/assets/img/portfolio/portfolio-8.jpg" />
      <div class="portfolio-info">
        <h3>Paket Joki Ranked</h3>
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
            >Catatan Penting ! :<br />1. Sebelum Order Mohon Baca Informasi
            (Banner)</font
          >
        </p>
        <Modal />
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "@/components/Modal2.vue"

export default {
    props: ["type"],
    components: { Modal }
}
</script>