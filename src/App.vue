<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
  <ScrollButton />
</template>

<script>
import Navbar from './components/general/Navbar.vue'
import Footer from './components/general/Footer.vue'
import ScrollButton from './components/general/ScrollButton.vue'

export default {
  components: {
    Navbar,
    Footer,
    ScrollButton,
  }
}
</script>