<template>
  <section
    id="breadcrumbs"
    class="breadcrumbs"
    style="background-color: #212529"
  >
    <div class="container">
      <ol>
        <li><router-link to="/">Home</router-link></li>
        <li style="color: white">{{ name }}</li>
      </ol>
      <h2 style="color: white">Paket Joki Ranked</h2>
    </div>
  </section>
</template>

<script>
export default {
    data() {
        return {
            name: ""
        }
    },

    mounted() {
        this.name = this.$router.currentRoute.name;
        console.log(this.$route.params);
    }
}
</script>