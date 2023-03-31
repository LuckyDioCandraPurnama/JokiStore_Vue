<template>
  <section
    id="breadcrumbs"
    class="breadcrumbs"
    style="background-color: #212529"
  >
    <div class="container">
      <ol>
        <li><router-link to="/">Home</router-link></li>
        <li style="color: white">{{ this.$route.name }}</li>
      </ol>
      <h2 style="color: white">Paket Joki Ranked</h2>
    </div>
  </section>
</template>
