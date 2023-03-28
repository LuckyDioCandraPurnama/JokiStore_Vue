<template>
  <div class="row mt-3">
    <div class="col">
      <div class="portfolio-info">
        <div class="content">
          <h3>Pilih Metode Pembayaran</h3>
        </div>

        <div class="accordion-list">
          <ul v-for="(pembayaran, index) in jenisPembayaran" :key="pembayaran">
            <li>
              <a
                data-bs-toggle="collapse"
                :data-bs-target="'#accordion-list-' + index"
                class="collapsed"
              >
                {{ pembayaran.jenis }}
                <i class="bx bx-chevron-down icon-show"></i>
                <i class="bx bx-chevron-up icon-close"></i
              ></a>
              <div
                :id="'accordion-list-' + index"
                class="collapse"
                data-bs-parent=".accordion-list"
              >
                <div class="row">
                  <div
                    v-for="pb in pembayaran.tipe"
                    :key="pb"
                    class="col-lg-4 mt-3"
                  >
                    <label class="list-group shadow h-100">
                      <input type="radio" name="inlineRadioOptions" />
                      <div class="list-group-item h-100">
                        <div class="row">
                          <div class="col">
                            <div class="row">
                              <div class="col name-prod">
                                {{ pb.name }}
                              </div>
                            </div>

                            <div class="row">
                              <div class="col nominal-price">
                                Rp{{ pb.price }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "aa",
      jenisPembayaran: [
        {
          jenis: "QRIS",
          tipe: [{ name: "QRIS", price: "0" }],
        },
        {
          jenis: "E-Wallet",
          tipe: [
            { name: "Dana", price: "0" },
            { name: "Ovo", price: "0" },
            { name: "Shoope Pay", price: "0" },
          ],
        },
        {
          jenis: "Virtual Account",
          tipe: [
            { name: "Mandiri", price: "0" },
            { name: "BCA", price: "0" },
            { name: "BNI", price: "0" },
            { name: "Bank Muamalat", price: "0" },
            { name: "Danamon", price: "0" },
            { name: "CIMB Niaga", price: "0" },
            { name: "BSI", price: "0" },
            { name: "May Bank", price: "0" },
            { name: "BRI", price: "0" },
          ],
        },
        {
          jenis: "Convenience Store",
          tipe: [
            { name: "Indomaret", price: "" },
            { name: "Alfamaret", price: "" },
            { name: "Alfamidi", price: "" },
          ],
        },
      ],
    };
  },
};
</script>