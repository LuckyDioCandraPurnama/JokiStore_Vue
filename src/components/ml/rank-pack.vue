<template>
  <Header></Header>
  <!-- ======= Breadcrumbs ======= -->
  <section
    id="breadcrumbs"
    class="breadcrumbs"
  >
    <!-- style="background-color: #212529" -->
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
  <section
    id="portfolio-details"
    class="portfolio-details"
  >
    <!-- style="background-color: #2d3238" -->
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mt-2 mb-2">
          <div class="portfolio-details-slider">
            <img src="@/assets/img/portfolio/portfolio-4.jpg" alt="" />
            <div class="portfolio-info">
              <h3>Paket Joki Ranked</h3>
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
        <div class="col-lg-8 mt-2 mb-2">
          <div class="row">
            <div class="col">
              <div class="portfolio-info">
                <h3>Lengkapi Informasi</h3>
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  class="php-email-form"
                  style="background: transparent"
                >
                  <div class="row row-cols row-cols-md">
                    <div class="col-lg-6">
                      <div class="form-group mb-3">
                        <input
                          type="email"
                          name="email"
                          class="form-control"
                          id="email"
                          placeholder="Masukkan Email/No HP"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group mb-3">
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
                    <div class="col-lg-6">
                      <div class="form-group mb-3">
                        <input
                          type="text"
                          name="req"
                          class="form-control"
                          id="req"
                          placeholder="Request Hero"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          name="catatan"
                          id="catatan"
                          placeholder="Catatan Untuk Penjoki"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group mb-3">
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          id="name"
                          placeholder="User ID / Nick Name"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group mb-3">
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
                      </div>
                      <!-- <label for="Login Via"></label> -->
                      <!-- <input type="email" class="form-control" name="email" id="email" placeholder="Login Via" required> -->
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <div class="portfolio-info">
                <h3>Pilih Paket Joki Ranked</h3>
                <div class="row row-cols-2">
                  <div class="col-lg-4 mt-3">
                    <div class="list-group shadow h-100">
                      <label for="nominal-24" class="list-group-item h-100">
                      <input type="radio" name="inlineRadioOptions"
                      />
                        <div class="row">
                          <div class="col">
                            <div class="row">
                              <div class="col name-prod">GM V - Epic V</div>
                            </div>
                            <div class="row">
                              <div class="col nominal-price">Rp 50.000</div>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div class="col-lg-4 mt-3">
                    <div class="list-group shadow h-100">
                      <label for="nominal-24" class="list-group-item h-100">
                      <input
                        type="radio"
                        name="inlineRadioOptions"
                        id="nominal-24"
                        value="24"
                        data-type="diamond"
                        data-product_id="8"
                      />
                        <div class="row">
                          <div class="col">
                            <div class="row">
                              <div class="col name-prod">GM V - Legend V</div>
                            </div>
                            <div class="row">
                              <div class="col nominal-price">Rp 125.000</div>
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
                              <div class="col name-prod">GM V - Mythic V</div>
                            </div>
                            <div class="row">
                              <div class="col nominal-price">Rp 225.000</div>
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
                              <div class="col name-prod">Epic V - Legend V</div>
                            </div>
                            <div class="row">
                              <div class="col nominal-price">Rp 75.000</div>
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
                              <div class="col name-prod">Epic V - Mythic V</div>
                            </div>
                            <div class="row">
                              <div class="col nominal-price">Rp 175.000</div>
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
                                Epic IV - Mythic V
                              </div>
                            </div>
                            <div class="row">
                              <div class="col nominal-price">Rp 160.000</div>
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
                                Epic III - Mythic V
                              </div>
                            </div>
                            <div class="row">
                              <div class="col nominal-price">Rp 145.000</div>
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
                                Epic II - Mythic V
                              </div>
                            </div>
                            <div class="row">
                              <div class="col nominal-price">Rp 130.000</div>
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
                              <div class="col name-prod">Epic I - Mythic V</div>
                            </div>
                            <div class="row">
                              <div class="col nominal-price">Rp 115.000</div>
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
                                Legend V - Mythic V
                              </div>
                            </div>
                            <div class="row">
                              <div class="col nominal-price">Rp 100.000</div>
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
                                Mythic Full Grading (200 Poin)
                              </div>
                            </div>
                            <div class="row">
                              <div class="col nominal-price">Rp 100.000</div>
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
                                Mythic V - Mythic Glory 600
                              </div>
                            </div>
                            <div class="row">
                              <div class="col nominal-price">Rp 600.000</div>
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
                  <div class="row">
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
                  </div>
                </form>

                <!-- </div> -->
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <div class="card bg-dark shadow">
                <div class="card-header">
                  <h5 class="card-title">Pilih Metode Pembayaran</h5>
                </div>
                <div class="card-body">
                  <div class="area-list-payment-method">
                    <div class="child-box payment-drawwer shadow">
                      <div
                        class="header short-payment-support-info-head"
                        onclick="if (!window.__cfRLUnblockHandlers) return false; openPaymentDrawer(this)"
                      >
                        <div class="left">
                          <b>
                            <i class="fas fa-qrcode"></i>
                            QRIS
                          </b>
                        </div>
                        <div class="right"></div>
                      </div>
                      <div class="button-action-payment" style="display: none">
                        <div class="row row-cols-2 row-cols-md-3 p-1">
                          <div class="col-lg-4 p-1 active" id="paymentitems">
                            <div class="list-group1 h-100">
                              <input
                                type="radio"
                                name="paymentMethod"
                                id="paymentMethod-faspay-711-ShopeePay QRIS"
                                value="faspay-711-ShopeePay QRIS"
                                data-fee="0"
                                data-fee-percent="1.5"
                              />
                              <label
                                for="paymentMethod-faspay-711-ShopeePay QRIS"
                                class="list-group-item h-100"
                              >
                                <div class="info-top">
                                  <div>
                                    <img
                                      src="https://takapedia.com/assets/img/logos/qris-ipaymu.png"
                                      height="10px"
                                    />
                                  </div>
                                  <b
                                    class="d-lg-none d-md-none"
                                    id="payment"
                                    style="font-size: 9.94px"
                                  ></b>
                                  <b
                                    class="d-none d-md-block"
                                    id="payment"
                                    style="font-size: 11px"
                                  ></b>
                                </div>
                                <div class="info-bottom text-sm-left">
                                  Qris
                                  (OVO,Dana,Shopeepay,Gopay,Linkaja,BCA,Mandiri,DLL
                                  (Aplikasi Mobile))
                                  <div class="dicek">Dicek Otomatis</div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="short-payment-support-info"
                        onclick="if (!window.__cfRLUnblockHandlers) return false; openPaymentDrawer(this)"
                      >
                        <img
                          src="https://takapedia.com/assets/img/logos/jenis_ewallet.png"
                          class="m-1"
                          style="
                            background-color: white;
                            border-radius: 3px;
                            border: 1px solid white;
                          "
                        />
                        <a class="open-button-action-payment">
                          <i class="fas fa-chevron-down"></i>
                        </a>
                      </div>
                    </div>
                    <div class="child-box payment-drawwer shadow">
                      <div
                        class="header short-payment-support-info-head"
                        onclick="if (!window.__cfRLUnblockHandlers) return false; openPaymentDrawer(this)"
                      >
                        <div class="left">
                          <b>
                            <i class="fas fa-wallet"></i>
                            E-Wallet
                          </b>
                        </div>
                        <div class="right"></div>
                      </div>
                      <div class="button-action-payment" style="display: none">
                        <div class="row row-cols-2 row-cols-md-3 p-1">
                          <div class="col-lg-4 p-1" id="paymentitems">
                            <div class="list-group1 h-100">
                              <input
                                type="radio"
                                name="paymentMethod"
                                id="paymentMethod-BJPAYDN"
                                value="BJPAYDN"
                                data-fee="0"
                                data-fee-percent="2.5"
                              />
                              <label
                                for="paymentMethod-BJPAYDN"
                                class="list-group-item h-100"
                              >
                                <div class="info-top">
                                  <div>
                                    <img
                                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/1280px-Logo_dana_blue.svg.png"
                                      alt=""
                                      height="10px"
                                    />
                                  </div>
                                  <b
                                    class="d-lg-none d-md-none"
                                    id="payment"
                                    style="font-size: 9.94px"
                                  ></b>
                                  <b
                                    class="d-none d-md-block"
                                    id="payment"
                                    style="font-size: 11px"
                                  ></b>
                                </div>
                                <div class="info-bottom text-sm-left">
                                  <div>
                                    DANA
                                    <div class="nominal-dicek">
                                      Dicek Otomatis
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 p-1" id="paymentitems">
                            <div class="list-group1 h-100">
                              <input
                                type="radio"
                                name="paymentMethod"
                                id="paymentMethod-faspay-812-OVO"
                                value="faspay-812-OVO"
                                data-fee="0"
                                data-fee-percent="5"
                              />
                              <label
                                for="paymentMethod-faspay-812-OVO"
                                class="list-group-item h-100"
                              >
                                <div class="info-top">
                                  <div>
                                    <img
                                      src="/assets/img/logos/OVO.png"
                                      alt=""
                                      height="10px"
                                    />
                                  </div>
                                  <b
                                    class="d-lg-none d-md-none"
                                    id="payment"
                                    style="font-size: 9.94px"
                                  ></b>
                                  <b
                                    class="d-none d-md-block"
                                    id="payment"
                                    style="font-size: 11px"
                                  ></b>
                                </div>
                                <div class="info-bottom text-sm-left">
                                  OVO
                                  <div class="dicek">Dicek Otomatis</div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 p-1" id="paymentitems">
                            <div class="list-group1 h-100">
                              <input
                                type="radio"
                                name="paymentMethod"
                                id="paymentMethod-faspay-302-LinkAja"
                                value="faspay-302-LinkAja"
                                data-fee="0"
                                data-fee-percent="3"
                              />
                              <label
                                for="paymentMethod-faspay-302-LinkAja"
                                class="list-group-item h-100"
                              >
                                <div class="info-top">
                                  <div>
                                    <img
                                      src="/assets/img/logos/Linkaja.png"
                                      alt=""
                                      height="10px"
                                    />
                                  </div>
                                  <b
                                    class="d-lg-none d-md-none"
                                    id="payment"
                                    style="font-size: 9.94px"
                                  ></b>
                                  <b
                                    class="d-none d-md-block"
                                    id="payment"
                                    style="font-size: 11px"
                                  ></b>
                                </div>
                                <div class="info-bottom text-sm-left">
                                  LinkAja
                                  <div class="dicek">Dicek Otomatis</div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 p-1" id="paymentitems">
                            <div class="list-group1 h-100">
                              <input
                                type="radio"
                                name="paymentMethod"
                                id="paymentMethod-faspay-713-ShopeePay App"
                                value="faspay-713-ShopeePay App"
                                data-fee="0"
                                data-fee-percent="5"
                              />
                              <label
                                for="paymentMethod-faspay-713-ShopeePay App"
                                class="list-group-item h-100"
                              >
                                <div class="info-top">
                                  <div>
                                    <img
                                      src="/assets/img/logos/Shopeepay.png"
                                      alt=""
                                      height="10px"
                                    />
                                  </div>
                                  <b
                                    class="d-lg-none d-md-none"
                                    id="payment"
                                    style="font-size: 9.94px"
                                  ></b>
                                  <b
                                    class="d-none d-md-block"
                                    id="payment"
                                    style="font-size: 11px"
                                  ></b>
                                </div>
                                <div class="info-bottom text-sm-left">
                                  Shopeepay
                                  <div class="dicek">
                                    Dicek Otomatis Khusus Mobile
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="short-payment-support-info"
                        onclick="if (!window.__cfRLUnblockHandlers) return false; openPaymentDrawer(this)"
                      >
                        <img
                          src="/assets/img/logos/OVO.png"
                          class="m-1"
                          style="
                            background-color: white;
                            border-radius: 3px;
                            border: 1px solid white;
                          "
                        />
                        <img
                          src="/assets/img/logos/Linkaja.png"
                          class="m-1"
                          style="
                            background-color: white;
                            border-radius: 3px;
                            border: 1px solid white;
                          "
                        />

                        <img
                          src="/assets/img/logos/Shopeepay.png"
                          class="m-1"
                          style="
                            background-color: white;
                            border-radius: 3px;
                            border: 1px solid white;
                          "
                        />
                        <a class="open-button-action-payment">
                          <i class="fas fa-chevron-down"></i>
                        </a>
                      </div>
                    </div>

                    <div class="child-box payment-drawwer shadow">
                      <div
                        class="header short-payment-support-info-head"
                        onclick="if (!window.__cfRLUnblockHandlers) return false; openPaymentDrawer(this)"
                      >
                        <div class="left">
                          <b>
                            <i class="fas fa-credit-card"></i>
                            Virtual Account
                          </b>
                        </div>
                        <div class="right"></div>
                      </div>
                      <div class="button-action-payment" style="display: none">
                        <div class="row row-cols-2 row-cols-md-3 p-1">
                          <div class="col-lg-4 p-1" id="paymentitems">
                            <div class="list-group1 h-100">
                              <input
                                type="radio"
                                name="paymentMethod"
                                id="paymentMethod-faspay-801-BNI Virtual Account"
                                value="faspay-801-BNI Virtual Account"
                                data-fee="4750"
                                data-fee-percent="0"
                              />
                              <label
                                for="paymentMethod-faspay-801-BNI Virtual Account"
                                class="list-group-item h-100"
                              >
                                <div class="info-top">
                                  <div>
                                    <img
                                      src="/assets/img/logos/bniva.png"
                                      alt=""
                                      height="10px"
                                    />
                                  </div>
                                  <b
                                    class="d-lg-none d-md-none"
                                    id="payment"
                                    style="font-size: 9.94px"
                                  ></b>
                                  <b
                                    class="d-none d-md-block"
                                    id="payment"
                                    style="font-size: 11px"
                                  ></b>
                                </div>
                                <div class="info-bottom text-sm-left">
                                  BNI Virtual Account
                                  <div class="dicek">Dicek Otomatis</div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 p-1" id="paymentitems">
                            <div class="list-group1 h-100">
                              <input
                                type="radio"
                                name="paymentMethod"
                                id="paymentMethod-faspay-800-BRI Virtual Account"
                                value="faspay-800-BRI Virtual Account"
                                data-fee="4750"
                                data-fee-percent="0"
                              />
                              <label
                                for="paymentMethod-faspay-800-BRI Virtual Account"
                                class="list-group-item h-100"
                              >
                                <div class="info-top">
                                  <div>
                                    <img
                                      src="/assets/img/logos/briva.png"
                                      alt=""
                                      height="10px"
                                    />
                                  </div>
                                  <b
                                    class="d-lg-none d-md-none"
                                    id="payment"
                                    style="font-size: 9.94px"
                                  ></b>
                                  <b
                                    class="d-none d-md-block"
                                    id="payment"
                                    style="font-size: 11px"
                                  ></b>
                                </div>
                                <div class="info-bottom text-sm-left">
                                  BRI Virtual Account
                                  <div class="dicek">Dicek Otomatis</div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 p-1" id="paymentitems">
                            <div class="list-group1 h-100">
                              <input
                                type="radio"
                                name="paymentMethod"
                                id="paymentMethod-faspay-802-Mandiri Virtual Account"
                                value="faspay-802-Mandiri Virtual Account"
                                data-fee="4750"
                                data-fee-percent="0"
                              />
                              <label
                                for="paymentMethod-faspay-802-Mandiri Virtual Account"
                                class="list-group-item h-100"
                              >
                                <div class="info-top">
                                  <div>
                                    <img
                                      src="/assets/img/logos/mandiri.png"
                                      alt=""
                                      height="10px"
                                    />
                                  </div>
                                  <b
                                    class="d-lg-none d-md-none"
                                    id="payment"
                                    style="font-size: 9.94px"
                                  ></b>
                                  <b
                                    class="d-none d-md-block"
                                    id="payment"
                                    style="font-size: 11px"
                                  ></b>
                                </div>
                                <div class="info-bottom text-sm-left">
                                  Mandiri Virtual Account
                                  <div class="dicek">Dicek Otomatis</div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 p-1" id="paymentitems">
                            <div class="list-group1 h-100">
                              <input
                                type="radio"
                                name="paymentMethod"
                                id="paymentMethod-faspay-718-BNC VA"
                                value="faspay-718-BNC VA"
                                data-fee="4750"
                                data-fee-percent="0"
                              />
                              <label
                                for="paymentMethod-faspay-718-BNC VA"
                                class="list-group-item h-100"
                              >
                                <div class="info-top">
                                  <div>
                                    <img
                                      src="https://takapedia.com/assets/img/1658477694bncva.webp"
                                      alt=""
                                      height="10px"
                                    />
                                  </div>
                                  <b
                                    class="d-lg-none d-md-none"
                                    id="payment"
                                    style="font-size: 9.94px"
                                  ></b>
                                  <b
                                    class="d-none d-md-block"
                                    id="payment"
                                    style="font-size: 11px"
                                  ></b>
                                </div>
                                <div class="info-bottom text-sm-left">
                                  BNC VA
                                  <div class="dicek">Dicek Otomatis</div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 p-1" id="paymentitems">
                            <div class="list-group1 h-100">
                              <input
                                type="radio"
                                name="paymentMethod"
                                id="paymentMethod-faspay-708-Danamon VA"
                                value="faspay-708-Danamon VA"
                                data-fee="4750"
                                data-fee-percent="0"
                              />
                              <label
                                for="paymentMethod-faspay-708-Danamon VA"
                                class="list-group-item h-100"
                              >
                                <div class="info-top">
                                  <div>
                                    <img
                                      src="https://takapedia.com/assets/img/1658477716danamonva.webp"
                                      alt=""
                                      height="10px"
                                    />
                                  </div>
                                  <b
                                    class="d-lg-none d-md-none"
                                    id="payment"
                                    style="font-size: 9.94px"
                                  ></b>
                                  <b
                                    class="d-none d-md-block"
                                    id="payment"
                                    style="font-size: 11px"
                                  ></b>
                                </div>
                                <div class="info-bottom text-sm-left">
                                  Danamon VA
                                  <div class="dicek">Dicek Otomatis</div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 p-1" id="paymentitems">
                            <div class="list-group1 h-100">
                              <input
                                type="radio"
                                name="paymentMethod"
                                id="paymentMethod-faspay-402-Permata"
                                value="faspay-402-Permata"
                                data-fee="4750"
                                data-fee-percent="0"
                              />
                              <label
                                for="paymentMethod-faspay-402-Permata"
                                class="list-group-item h-100"
                              >
                                <div class="info-top">
                                  <div>
                                    <img
                                      src="https://takapedia.com/assets/img/1665882006szezRhAALB1583408731.webp"
                                      alt=""
                                      height="10px"
                                    />
                                  </div>
                                  <b
                                    class="d-lg-none d-md-none"
                                    id="payment"
                                    style="font-size: 9.94px"
                                  ></b>
                                  <b
                                    class="d-none d-md-block"
                                    id="payment"
                                    style="font-size: 11px"
                                  ></b>
                                </div>
                                <div class="info-bottom text-sm-left">
                                  Permata
                                  <div class="dicek">Dicek Otomatis</div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 p-1" id="paymentitems">
                            <div class="list-group1 h-100">
                              <input
                                type="radio"
                                name="paymentMethod"
                                id="paymentMethod-faspay-408-Maybank Virtual Account"
                                value="faspay-408-Maybank Virtual Account"
                                data-fee="4750"
                                data-fee-percent="0"
                              />
                              <label
                                for="paymentMethod-faspay-408-Maybank Virtual Account"
                                class="list-group-item h-100"
                              >
                                <div class="info-top">
                                  <div>
                                    <img
                                      src="https://takapedia.com/assets/img/1665882439ZT91lrOEad1582929126.webp"
                                      alt=""
                                      height="10px"
                                    />
                                  </div>
                                  <b
                                    class="d-lg-none d-md-none"
                                    id="payment"
                                    style="font-size: 9.94px"
                                  ></b>
                                  <b
                                    class="d-none d-md-block"
                                    id="payment"
                                    style="font-size: 11px"
                                  ></b>
                                </div>
                                <div class="info-bottom text-sm-left">
                                  Maybank Virtual Account
                                  <div class="dicek">Dicek Otomatis</div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 p-1" id="paymentitems">
                            <div class="list-group1 h-100">
                              <input
                                type="radio"
                                name="paymentMethod"
                                id="paymentMethod-tripay-BCAVA"
                                value="tripay-BCAVA"
                                data-fee="5500"
                                data-fee-percent="0"
                              />
                              <label
                                for="paymentMethod-tripay-BCAVA"
                                class="list-group-item h-100"
                              >
                                <div class="info-top">
                                  <div>
                                    <img
                                      src="https://assets.tripay.co.id/upload/payment-icon/ytBKvaleGy1605201833.png"
                                    />
                                  </div>
                                  <b
                                    class="d-lg-none d-md-none"
                                    id="payment"
                                    style="font-size: 9.94px"
                                  ></b>
                                  <b
                                    class="d-none d-md-block"
                                    id="payment"
                                    style="font-size: 11px"
                                  ></b>
                                </div>
                                <div class="info-bottom">
                                  BCA Virtual Account
                                  <div class="nominal-dicek">
                                    Dicek Otomatis
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 p-1" id="paymentitems">
                            <div class="list-group1 h-100">
                              <input
                                type="radio"
                                name="paymentMethod"
                                id="paymentMethod-tripay-MUAMALATVA"
                                value="tripay-MUAMALATVA"
                                data-fee="4250"
                                data-fee-percent="0"
                              />
                              <label
                                for="paymentMethod-tripay-MUAMALATVA"
                                class="list-group-item h-100"
                              >
                                <div class="info-top">
                                  <div>
                                    <img
                                      src="https://assets.tripay.co.id/upload/payment-icon/GGwwcgdYaG1611929720.png"
                                    />
                                  </div>
                                  <b
                                    class="d-lg-none d-md-none"
                                    id="payment"
                                    style="font-size: 9.94px"
                                  ></b>
                                  <b
                                    class="d-none d-md-block"
                                    id="payment"
                                    style="font-size: 11px"
                                  ></b>
                                </div>
                                <div class="info-bottom">
                                  Muamalat Virtual Account
                                  <div class="nominal-dicek">
                                    Dicek Otomatis
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 p-1" id="paymentitems">
                            <div class="list-group1 h-100">
                              <input
                                type="radio"
                                name="paymentMethod"
                                id="paymentMethod-tripay-CIMBVA"
                                value="tripay-CIMBVA"
                                data-fee="4250"
                                data-fee-percent="0"
                              />
                              <label
                                for="paymentMethod-tripay-CIMBVA"
                                class="list-group-item h-100"
                              >
                                <div class="info-top">
                                  <div>
                                    <img
                                      src="https://assets.tripay.co.id/upload/payment-icon/WtEJwfuphn1614003973.png"
                                    />
                                  </div>
                                  <b
                                    class="d-lg-none d-md-none"
                                    id="payment"
                                    style="font-size: 9.94px"
                                  ></b>
                                  <b
                                    class="d-none d-md-block"
                                    id="payment"
                                    style="font-size: 11px"
                                  ></b>
                                </div>
                                <div class="info-bottom">
                                  CIMB Niaga Virtual Account
                                  <div class="nominal-dicek">
                                    Dicek Otomatis
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 p-1" id="paymentitems">
                            <div class="list-group1 h-100">
                              <input
                                type="radio"
                                name="paymentMethod"
                                id="paymentMethod-tripay-BSIVA"
                                value="tripay-BSIVA"
                                data-fee="4250"
                                data-fee-percent="0"
                              />
                              <label
                                for="paymentMethod-tripay-BSIVA"
                                class="list-group-item h-100"
                              >
                                <div class="info-top">
                                  <div>
                                    <img
                                      src="https://assets.tripay.co.id/upload/payment-icon/tEclz5Assb1643375216.png"
                                    />
                                  </div>
                                  <b
                                    class="d-lg-none d-md-none"
                                    id="payment"
                                    style="font-size: 9.94px"
                                  ></b>
                                  <b
                                    class="d-none d-md-block"
                                    id="payment"
                                    style="font-size: 11px"
                                  ></b>
                                </div>
                                <div class="info-bottom">
                                  BSI Virtual Account
                                  <div class="nominal-dicek">
                                    Dicek Otomatis
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="short-payment-support-info"
                        onclick="if (!window.__cfRLUnblockHandlers) return false; openPaymentDrawer(this)"
                      >
                        <img
                          src="/assets/img/logos/bniva.png"
                          class="m-1"
                          style="
                            background-color: white;
                            border-radius: 3px;
                            border: 1px solid white;
                          "
                        />
                        <img
                          src="/assets/img/logos/briva.png"
                          class="m-1"
                          style="
                            background-color: white;
                            border-radius: 3px;
                            border: 1px solid white;
                          "
                        />
                        <img
                          src="/assets/img/logos/mandiri.png"
                          class="m-1"
                          style="
                            background-color: white;
                            border-radius: 3px;
                            border: 1px solid white;
                          "
                        />
                        <img
                          src="https://takapedia.com/assets/img/1658477694bncva.webp"
                          class="m-1"
                          style="
                            background-color: white;
                            border-radius: 3px;
                            border: 1px solid white;
                          "
                        />
                        <img
                          src="https://takapedia.com/assets/img/1658477716danamonva.webp"
                          class="m-1"
                          style="
                            background-color: white;
                            border-radius: 3px;
                            border: 1px solid white;
                          "
                        />
                        <img
                          src="https://takapedia.com/assets/img/1665882006szezRhAALB1583408731.webp"
                          class="m-1"
                          style="
                            background-color: white;
                            border-radius: 3px;
                            border: 1px solid white;
                          "
                        />
                        <img
                          src="https://takapedia.com/assets/img/1665882439ZT91lrOEad1582929126.webp"
                          class="m-1"
                          style="
                            background-color: white;
                            border-radius: 3px;
                            border: 1px solid white;
                          "
                        />
                        <img
                          src="https://assets.tripay.co.id/upload/payment-icon/ytBKvaleGy1605201833.png"
                          alt=""
                          class="m-1"
                          style="
                            background-color: white;
                            border-radius: 3px;
                            border: 1px solid white;
                          "
                          id="paymentMethodIMG-tripay-BCAVA"
                        />
                        <img
                          src="https://assets.tripay.co.id/upload/payment-icon/GGwwcgdYaG1611929720.png"
                          alt=""
                          class="m-1"
                          style="
                            background-color: white;
                            border-radius: 3px;
                            border: 1px solid white;
                          "
                          id="paymentMethodIMG-tripay-MUAMALATVA"
                        />
                        <img
                          src="https://assets.tripay.co.id/upload/payment-icon/WtEJwfuphn1614003973.png"
                          alt=""
                          class="m-1"
                          style="
                            background-color: white;
                            border-radius: 3px;
                            border: 1px solid white;
                          "
                          id="paymentMethodIMG-tripay-CIMBVA"
                        />
                        <img
                          src="https://assets.tripay.co.id/upload/payment-icon/tEclz5Assb1643375216.png"
                          alt=""
                          class="m-1"
                          style="
                            background-color: white;
                            border-radius: 3px;
                            border: 1px solid white;
                          "
                          id="paymentMethodIMG-tripay-BSIVA"
                        />
                        <a class="open-button-action-payment">
                          <i class="fas fa-chevron-down"></i>
                        </a>
                      </div>
                    </div>
                    <div class="child-box payment-drawwer shadow">
                      <div
                        class="header short-payment-support-info-head"
                        onclick="if (!window.__cfRLUnblockHandlers) return false; openPaymentDrawer(this)"
                      >
                        <div class="left">
                          <b>
                            <i class="fas fa-store"></i>
                            Convenience Store
                          </b>
                        </div>
                        <div class="right"></div>
                      </div>
                      <div class="button-action-payment" style="display: none">
                        <div class="row row-cols-2 row-cols-md-3 p-1">
                          <div class="col-lg-4 p-1" id="paymentitems">
                            <div class="list-group1 h-100">
                              <input
                                type="radio"
                                name="paymentMethod"
                                id="paymentMethod-tripay-ALFAMART"
                                value="tripay-ALFAMART"
                                data-fee="3500"
                                data-fee-percent="0"
                              />
                              <label
                                for="paymentMethod-tripay-ALFAMART"
                                class="list-group-item h-100"
                              >
                                <div class="info-top">
                                  <div>
                                    <img
                                      src="https://assets.tripay.co.id/upload/payment-icon/jiGZMKp2RD1583433506.png"
                                    />
                                  </div>
                                  <b
                                    class="d-lg-none d-md-none"
                                    id="payment"
                                    style="font-size: 9.94px"
                                  ></b>
                                  <b
                                    class="d-none d-md-block"
                                    id="payment"
                                    style="font-size: 11px"
                                  ></b>
                                </div>
                                <div class="info-bottom">
                                  Alfamart
                                  <div class="nominal-dicek">
                                    Dicek Otomatis
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 p-1" id="paymentitems">
                            <div class="list-group1 h-100">
                              <input
                                type="radio"
                                name="paymentMethod"
                                id="paymentMethod-tripay-INDOMARET"
                                value="tripay-INDOMARET"
                                data-fee="3500"
                                data-fee-percent="0"
                              />
                              <label
                                for="paymentMethod-tripay-INDOMARET"
                                class="list-group-item h-100"
                              >
                                <div class="info-top">
                                  <div>
                                    <img
                                      src="https://assets.tripay.co.id/upload/payment-icon/zNzuO5AuLw1583513974.png"
                                    />
                                  </div>
                                  <b
                                    class="d-lg-none d-md-none"
                                    id="payment"
                                    style="font-size: 9.94px"
                                  ></b>
                                  <b
                                    class="d-none d-md-block"
                                    id="payment"
                                    style="font-size: 11px"
                                  ></b>
                                </div>
                                <div class="info-bottom">
                                  Indomaret
                                  <div class="nominal-dicek">
                                    Dicek Otomatis
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                          <div class="col-lg-4 p-1" id="paymentitems">
                            <div class="list-group1 h-100">
                              <input
                                type="radio"
                                name="paymentMethod"
                                id="paymentMethod-tripay-ALFAMIDI"
                                value="tripay-ALFAMIDI"
                                data-fee="3500"
                                data-fee-percent="0"
                              />
                              <label
                                for="paymentMethod-tripay-ALFAMIDI"
                                class="list-group-item h-100"
                              >
                                <div class="info-top">
                                  <div>
                                    <img
                                      src="https://assets.tripay.co.id/upload/payment-icon/aQTdaUC2GO1593660384.png"
                                    />
                                  </div>
                                  <b
                                    class="d-lg-none d-md-none"
                                    id="payment"
                                    style="font-size: 9.94px"
                                  ></b>
                                  <b
                                    class="d-none d-md-block"
                                    id="payment"
                                    style="font-size: 11px"
                                  ></b>
                                </div>
                                <div class="info-bottom">
                                  Alfamidi
                                  <div class="nominal-dicek">
                                    Dicek Otomatis
                                  </div>
                                </div>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="short-payment-support-info"
                        onclick="if (!window.__cfRLUnblockHandlers) return false; openPaymentDrawer(this)"
                      >
                        <img
                          src="https://assets.tripay.co.id/upload/payment-icon/jiGZMKp2RD1583433506.png"
                          alt=""
                          class="m-1"
                          style="
                            background-color: white;
                            border-radius: 3px;
                            border: 1px solid white;
                          "
                          id="paymentMethodIMG-tripay-ALFAMART"
                        />
                        <img
                          src="https://assets.tripay.co.id/upload/payment-icon/zNzuO5AuLw1583513974.png"
                          alt=""
                          class="m-1"
                          style="
                            background-color: white;
                            border-radius: 3px;
                            border: 1px solid white;
                          "
                          id="paymentMethodIMG-tripay-INDOMARET"
                        />
                        <img
                          src="https://assets.tripay.co.id/upload/payment-icon/aQTdaUC2GO1593660384.png"
                          alt=""
                          class="m-1"
                          style="
                            background-color: white;
                            border-radius: 3px;
                            border: 1px solid white;
                          "
                          id="paymentMethodIMG-tripay-ALFAMIDI"
                        />
                        <a class="open-button-action-payment">
                          <i class="fas fa-chevron-down"></i>
                        </a>
                      </div>
                    </div>
                    <div class="child-box payment-drawwer shadow d-none">
                      <div
                        class="header short-payment-support-info-head"
                        onclick="if (!window.__cfRLUnblockHandlers) return false; openPaymentDrawer(this)"
                      >
                        <div class="left">
                          <b><i class="fas fa-bolt"></i> Saldo</b>
                        </div>
                        <div class="right"></div>
                      </div>
                      <div class="button-action-payment" style="display: none">
                        <ul>
                          <li>
                            <input
                              type="radio"
                              name="paymentMethod"
                              id="paymentMethod-saldo"
                              value="saldo"
                              disabled=""
                            />
                            <label
                              for="paymentMethod-saldo"
                              class="payment-item"
                            >
                              <div class="info-top">
                                <div>
                                  <i class="fas fa-wallet"></i>
                                  TAKAPEDIA E-Wallet
                                </div>
                                <b id="payment"></b>
                              </div>
                              <div class="info-bottom" id="info-bottomWallet">
                                Login untuk menggunakan TAKAPEDIA E-Wallet
                              </div>
                            </label>
                          </li>
                        </ul>
                      </div>
                      <div
                        class="short-payment-support-info"
                        onclick="if (!window.__cfRLUnblockHandlers) return false; openPaymentDrawer(this)"
                      >
                        <i
                          class="fas fa-wallet me-2 fa-chevron-down"
                          id="paymentMethodIMG-saldo"
                        ></i>
                        <a class="open-button-action-payment">
                          <i class="fas fa-chevron-down"></i>
                        </a>
                        <span
                          class="channel-not-available"
                          style="display: none"
                          >Tidak tersedia pembayaran pada channel ini</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="row">
              <div class="col">
                <div class="card bg-dark shadow">
                  <div class="card-body">
                    <!-- <img src="@/assets/img/hero-bg.jpg" alt="" class=""> -->
                    <div class="row">
                      <div class="col">
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
                              <div class="col name-prod">GM V - Epic V</div>
                            </div>
                            <div class="row">
                              <div class="col nominal-price">Rp 50.000</div>
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
                              <div class="col name-prod">GM V - Legend V</div>
                            </div>
                            <div class="row">
                              <div class="col nominal-price">Rp 125.000</div>
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
                              <div class="col name-prod">GM V - Mythic V</div>
                            </div>
                            <div class="row">
                              <div class="col nominal-price">Rp 225.000</div>
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
                              <div class="col name-prod">Epic V - Legend V</div>
                            </div>
                            <div class="row">
                              <div class="col nominal-price">Rp 75.000</div>
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
