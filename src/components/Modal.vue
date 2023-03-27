<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">
            <h3>Catatan Penting Sebelum Order Joki :</h3>
          </slot>
        </div>
        <div class="modal-body">
          <slot name="body">
            <ol>
              <li>Matikan Verifikasi Akun Untuk Mempermudah Login</li>
              <li>Jika akun di login Tanpa izin , maka proses Joki Akan di batalkan dan uang akan hangus</li>
              <li>Dimohon Menunggu Sesuai Estimasi Proses Dan Jangan Spam Admin</li>
              <li>Jika Ada Problem saat login ke akun ,maka akan segera di Hubungi oleh admin</li>
              <li>Jika Akun Belum Di Proses Selama 1-3 Jam Harap Hubungi Contact US/Admin</li>
              <li>Jika Proses Joki Sudah Selesai Maka akan Di Chat Oleh Admin</li>
            </ol>
            <p>Jika Butuh Bantuan Harap Hubungi Admin</p>
            <p>Terimakasih</p>
          </slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button class="modal-default-button" @click="$emit('close')">
              Tutup
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
