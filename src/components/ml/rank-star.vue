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
                <!-- <div class="col-lg-8 mt-5 mt-lg-0"> -->

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
                <div class="row">
                  <div class="col-lg-4 mt-3">
                    <div class="list-group shadow h-100">
                      <input
                        type="radio"
                        name="inlineRadioOptions"
                        id="nominal-24"
                        value="24"
                        data-type="diamond"
                        data-product_id="8"
                      />
                      <label for="nominal-24" class="list-group-item h-100">
                        <div class="row">
                          <div class="col">
                            <div class="row">
                              <div class="col name-prod">Master / Star</div>
                            </div>
                            <div class="row">
                              <div class="col nominal-price">Rp 1.000</div>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-4 mt-3">
                    <div class="list-group shadow h-100">
                      <input
                        type="radio"
                        name="inlineRadioOptions"
                        id="nominal-24"
                        value="24"
                        data-type="diamond"
                        data-product_id="8"
                      />
                      <label for="nominal-24" class="list-group-item h-100">
                        <div class="row">
                          <div class="col">
                            <div class="row">
                              <div class="col name-prod">GM / Star</div>
                            </div>
                            <div class="row">
                              <div class="col nominal-price">Rp 2.000</div>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-4 mt-3">
                    <div class="list-group shadow h-100">
                      <input
                        type="radio"
                        name="inlineRadioOptions"
                        id="nominal-24"
                        value="24"
                        data-type="diamond"
                        data-product_id="8"
                      />
                      <label for="nominal-24" class="list-group-item h-100">
                        <div class="row">
                          <div class="col">
                            <div class="row">
                              <div class="col name-prod">Epic / Star</div>
                            </div>
                            <div class="row">
                              <div class="col nominal-price">Rp 3.000</div>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-4 mt-3">
                    <div class="list-group shadow h-100">
                      <input
                        type="radio"
                        name="inlineRadioOptions"
                        id="nominal-24"
                        value="24"
                        data-type="diamond"
                        data-product_id="8"
                      />
                      <label for="nominal-24" class="list-group-item h-100">
                        <div class="row">
                          <div class="col">
                            <div class="row">
                              <div class="col name-prod">Legend / Star</div>
                            </div>
                            <div class="row">
                              <div class="col nominal-price">Rp 4.000</div>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-4 mt-3">
                    <div class="list-group shadow h-100">
                      <input
                        type="radio"
                        name="inlineRadioOptions"
                        id="nominal-24"
                        value="24"
                        data-type="diamond"
                        data-product_id="8"
                      />
                      <label for="nominal-24" class="list-group-item h-100">
                        <div class="row">
                          <div class="col">
                            <div class="row">
                              <div class="col name-prod">
                                Mythic Romawi / Poin
                              </div>
                            </div>
                            <div class="row">
                              <div class="col nominal-price">Rp 1.000</div>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
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
                      placeholder="Masukkan Jumlah (Star/Poin)"
                      required
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
          <div class="row mt-3">
            <div class="col">
              <div class="portfolio-info">
                <div class="content">
                  <h3>Pilih Metode Pembayaran</h3>
                </div>
                <div class="accordion-list">
                  <ul>
                    <li>
                      <a
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-list-1"
                        class="collapsed"
                        >QRIS <i class="bx bx-chevron-down icon-show"></i
                        ><i class="bx bx-chevron-up icon-close"></i
                      ></a>
                      <div
                        id="accordion-list-1"
                        class="collapse"
                        data-bs-parent=".accordion-list"
                      >
                        <div class="row">
                          <div class="col-lg-4 mt-3">
                            <div class="list-group shadow h-100">
                              <input
                                type="radio"
                                name="inlineRadioOptions"
                                id="nominal-24"
                                value="24"
                                data-type="diamond"
                                data-product_id="8"
                              />
                              <label
                                for="nominal-24"
                                class="list-group-item h-100"
                              >
                                <div class="row">
                                  <div class="col">
                                    <div class="row">
                                      <div class="col name-prod">QRIS</div>
                                    </div>
                                    <div class="row">
                                      <div class="col nominal-price">
                                        Rp 80.000
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <a
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-list-2"
                        class="collapsed"
                        >E-Wallet <i class="bx bx-chevron-down icon-show"></i
                        ><i class="bx bx-chevron-up icon-close"></i
                      ></a>
                      <div
                        id="accordion-list-2"
                        class="collapse"
                        data-bs-parent=".accordion-list"
                      >
                        <div class="row">
                          <div class="col-lg-4 mt-3">
                            <div class="list-group shadow h-100">
                              <input
                                type="radio"
                                name="inlineRadioOptions"
                                id="nominal-24"
                                value="24"
                                data-type="diamond"
                                data-product_id="8"
                              />
                              <label
                                for="nominal-24"
                                class="list-group-item h-100"
                              >
                                <div class="row">
                                  <div class="col">
                                    <div class="row">
                                      <div class="col name-prod">Dana</div>
                                    </div>
                                    <div class="row">
                                      <div class="col nominal-price">
                                        Rp 80.000
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 mt-3">
                            <div class="list-group shadow h-100">
                              <input
                                type="radio"
                                name="inlineRadioOptions"
                                id="nominal-24"
                                value="24"
                                data-type="diamond"
                                data-product_id="8"
                              />
                              <label
                                for="nominal-24"
                                class="list-group-item h-100"
                              >
                                <div class="row">
                                  <div class="col">
                                    <div class="row">
                                      <div class="col name-prod">OVO</div>
                                    </div>
                                    <div class="row">
                                      <div class="col nominal-price">
                                        Rp 125.000
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 mt-3">
                            <div class="list-group shadow h-100">
                              <input
                                type="radio"
                                name="inlineRadioOptions"
                                id="nominal-24"
                                value="24"
                                data-type="diamond"
                                data-product_id="8"
                              />
                              <label
                                for="nominal-24"
                                class="list-group-item h-100"
                              >
                                <div class="row">
                                  <div class="col">
                                    <div class="row">
                                      <div class="col name-prod">
                                        Shopee Pay
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col nominal-price">
                                        Rp 165.000
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <a
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-list-3"
                        class="collapsed"
                        >Virtual Account
                        <i class="bx bx-chevron-down icon-show"></i
                        ><i class="bx bx-chevron-up icon-close"></i
                      ></a>
                      <div
                        id="accordion-list-3"
                        class="collapse"
                        data-bs-parent=".accordion-list"
                      >
                        <div class="row">
                          <div class="col-lg-4 mt-3">
                            <div class="list-group shadow h-100">
                              <input
                                type="radio"
                                name="inlineRadioOptions"
                                id="nominal-24"
                                value="24"
                                data-type="diamond"
                                data-product_id="8"
                              />
                              <label
                                for="nominal-24"
                                class="list-group-item h-100"
                              >
                                <div class="row">
                                  <div class="col">
                                    <div class="row">
                                      <div class="col name-prod">Mandiri</div>
                                    </div>
                                    <div class="row">
                                      <div class="col nominal-price">
                                        Rp 80.000
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 mt-3">
                            <div class="list-group shadow h-100">
                              <input
                                type="radio"
                                name="inlineRadioOptions"
                                id="nominal-24"
                                value="24"
                                data-type="diamond"
                                data-product_id="8"
                              />
                              <label
                                for="nominal-24"
                                class="list-group-item h-100"
                              >
                                <div class="row">
                                  <div class="col">
                                    <div class="row">
                                      <div class="col name-prod">BCA</div>
                                    </div>
                                    <div class="row">
                                      <div class="col nominal-price">
                                        Rp 125.000
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 mt-3">
                            <div class="list-group shadow h-100">
                              <input
                                type="radio"
                                name="inlineRadioOptions"
                                id="nominal-24"
                                value="24"
                                data-type="diamond"
                                data-product_id="8"
                              />
                              <label
                                for="nominal-24"
                                class="list-group-item h-100"
                              >
                                <div class="row">
                                  <div class="col">
                                    <div class="row">
                                      <div class="col name-prod">BNI</div>
                                    </div>
                                    <div class="row">
                                      <div class="col nominal-price">
                                        Rp 165.000
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-4 mt-3">
                            <div class="list-group shadow h-100">
                              <input
                                type="radio"
                                name="inlineRadioOptions"
                                id="nominal-24"
                                value="24"
                                data-type="diamond"
                                data-product_id="8"
                              />
                              <label
                                for="nominal-24"
                                class="list-group-item h-100"
                              >
                                <div class="row">
                                  <div class="col">
                                    <div class="row">
                                      <div class="col name-prod">
                                        Bank Muamalat
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col nominal-price">
                                        Rp 80.000
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 mt-3">
                            <div class="list-group shadow h-100">
                              <input
                                type="radio"
                                name="inlineRadioOptions"
                                id="nominal-24"
                                value="24"
                                data-type="diamond"
                                data-product_id="8"
                              />
                              <label
                                for="nominal-24"
                                class="list-group-item h-100"
                              >
                                <div class="row">
                                  <div class="col">
                                    <div class="row">
                                      <div class="col name-prod">Danamon</div>
                                    </div>
                                    <div class="row">
                                      <div class="col nominal-price">
                                        Rp 125.000
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 mt-3">
                            <div class="list-group shadow h-100">
                              <input
                                type="radio"
                                name="inlineRadioOptions"
                                id="nominal-24"
                                value="24"
                                data-type="diamond"
                                data-product_id="8"
                              />
                              <label
                                for="nominal-24"
                                class="list-group-item h-100"
                              >
                                <div class="row">
                                  <div class="col">
                                    <div class="row">
                                      <div class="col name-prod">
                                        CIMB Niaga
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col nominal-price">
                                        Rp 165.000
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-lg-4 mt-3">
                            <div class="list-group shadow h-100">
                              <input
                                type="radio"
                                name="inlineRadioOptions"
                                id="nominal-24"
                                value="24"
                                data-type="diamond"
                                data-product_id="8"
                              />
                              <label
                                for="nominal-24"
                                class="list-group-item h-100"
                              >
                                <div class="row">
                                  <div class="col">
                                    <div class="row">
                                      <div class="col name-prod">BSI</div>
                                    </div>
                                    <div class="row">
                                      <div class="col nominal-price">
                                        Rp 80.000
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 mt-3">
                            <div class="list-group shadow h-100">
                              <input
                                type="radio"
                                name="inlineRadioOptions"
                                id="nominal-24"
                                value="24"
                                data-type="diamond"
                                data-product_id="8"
                              />
                              <label
                                for="nominal-24"
                                class="list-group-item h-100"
                              >
                                <div class="row">
                                  <div class="col">
                                    <div class="row">
                                      <div class="col name-prod">May Bank</div>
                                    </div>
                                    <div class="row">
                                      <div class="col nominal-price">
                                        Rp 125.000
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 mt-3">
                            <div class="list-group shadow h-100">
                              <input
                                type="radio"
                                name="inlineRadioOptions"
                                id="nominal-24"
                                value="24"
                                data-type="diamond"
                                data-product_id="8"
                              />
                              <label
                                for="nominal-24"
                                class="list-group-item h-100"
                              >
                                <div class="row">
                                  <div class="col">
                                    <div class="row">
                                      <div class="col name-prod">BRI</div>
                                    </div>
                                    <div class="row">
                                      <div class="col nominal-price">
                                        Rp 165.000
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <a
                        data-bs-toggle="collapse"
                        data-bs-target="#accordion-list-4"
                        class="collapsed"
                        >Convenience Store
                        <i class="bx bx-chevron-down icon-show"></i
                        ><i class="bx bx-chevron-up icon-close"></i
                      ></a>
                      <div
                        id="accordion-list-4"
                        class="collapse"
                        data-bs-parent=".accordion-list"
                      >
                        <div class="row">
                          <div class="col-lg-4 mt-3">
                            <div class="list-group shadow h-100">
                              <input
                                type="radio"
                                name="inlineRadioOptions"
                                id="nominal-24"
                                value="24"
                                data-type="diamond"
                                data-product_id="8"
                              />
                              <label
                                for="nominal-24"
                                class="list-group-item h-100"
                              >
                                <div class="row">
                                  <div class="col">
                                    <div class="row">
                                      <div class="col name-prod">Indomaret</div>
                                    </div>
                                    <div class="row">
                                      <div class="col nominal-price">
                                        Rp 80.000
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 mt-3">
                            <div class="list-group shadow h-100">
                              <input
                                type="radio"
                                name="inlineRadioOptions"
                                id="nominal-24"
                                value="24"
                                data-type="diamond"
                                data-product_id="8"
                              />
                              <label
                                for="nominal-24"
                                class="list-group-item h-100"
                              >
                                <div class="row">
                                  <div class="col">
                                    <div class="row">
                                      <div class="col name-prod">Alfamaret</div>
                                    </div>
                                    <div class="row">
                                      <div class="col nominal-price">
                                        Rp 125.000
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 mt-3">
                            <div class="list-group shadow h-100">
                              <input
                                type="radio"
                                name="inlineRadioOptions"
                                id="nominal-24"
                                value="24"
                                data-type="diamond"
                                data-product_id="8"
                              />
                              <label
                                for="nominal-24"
                                class="list-group-item h-100"
                              >
                                <div class="row">
                                  <div class="col">
                                    <div class="row">
                                      <div class="col name-prod">Alfamidi</div>
                                    </div>
                                    <div class="row">
                                      <div class="col nominal-price">
                                        Rp 165.000
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer2.vue";
</script>
