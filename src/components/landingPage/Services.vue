<template>
    <div class="services">
        <div class="container">
            <h1>Services</h1>
            <div class="catalog">
                <div
                    v-for="service in services"
                    :key="service"
                    class="menu group"
                >
                    <img :src="service.img">
                    <router-link to="/" class="flex lg:hidden group-hover:flex">
                        <span>{{ service.title }}</span>
                        <span>{{ service.subtitle }}</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            services: [
                {
                    img: "../src/assets/img/services/ml/ml-1.jpg",
                    title: "Paket Joki Ranked",
                    subtitle: "Jasa Joki (Up Rank)"
                },
                {
                    img: "../src/assets/img/services/ml/ml-2.jpg",
                    title: "Joki Ranked per Star",
                    subtitle: "Jasa Joki (Up Rank)"
                },
                {
                    img: "../src/assets/img/services/ml/ml-3.jpg",
                    title: "Joki Classic",
                    subtitle: "Jasa Joki (Up Winrate)"
                },
                {
                    img: "../src/assets/img/services/pubg/pubg-1.png",
                    title: "Paket Joki Tier",
                    subtitle: "Jasa Joki (Up Tier)"
                },
            ]
        }
    }
}
</script>