
<template>
  <header id="header" class="fixed-top">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div
          class="col-xl-9 d-flex align-items-center justify-content-lg-between"
        >
          <h1 class="logo me-auto me-lg-0"><a href="/">UrLuck</a></h1>
          <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
              <li>
                <a class="nav-link scrollto" href="#portfolio">Services</a>
              </li>
              <li>
                <a class="nav-link scrollto" href="order-list.html">Order</a>
              </li>
            </ul>
            <!-- <button  @click="toggleNav"> -->
            <i class="bi bi-list mobile-nav-toggle"></i>
            <!-- </button> -->
          </nav>
          <a href="/login" class="get-started-btn scrollto">Login</a>
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
@import "../assets/css/style.css";
</style>
<script>
import { ref, onMounted, onUnmounted } from "vue";
export default {
  setup() {
    const navbarlinks = ref(null);

    const navbarlinksActive = () => {
      let position = window.scrollY + 200;

      navbarlinks.value.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = document.querySelector(navbarlink.hash);
        if (!section) return;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    };

    const headerScrolled = () => {
      let selectHeader = document.querySelector("#header");
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };

    const scrollToElement = (el) => {
      let header = document.querySelector("#header");
      let offset = header.offsetHeight;

      let elementPos = document.querySelector(el).offsetTop;
      window.scrollTo({
        top: elementPos - offset,
        behavior: "smooth",
      });
    };

    onMounted(() => {
      navbarlinks.value = document.querySelectorAll("#navbar .scrollto");
      window.addEventListener("scroll", navbarlinksActive);

      let selectHeader = document.querySelector("#header");
      if (selectHeader) {
        window.addEventListener("load", headerScrolled);
        window.addEventListener("scroll", headerScrolled);
      };

      if (window.location.hash) {
        let element = document.querySelector(window.location.hash)
        if (element) {
          let header = document.querySelector('#header')
          let offset = header ? header.offsetHeight : 0

          window.scrollTo({
            top: element.offsetTop - offset,
            behavior: 'smooth'
          })
        }
      };
    });

    onUnmounted(() => {
      window.removeEventListener("load", headerScrolled);
      window.removeEventListener("scroll", headerScrolled);
    });

    return {scrollToElement};
  },
};
</script>
