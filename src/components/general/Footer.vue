<template>
    <footer>
        <div class="container">
            <h1>UrLuck</h1>
            <p class="tagline">
                Penuhi Kebutuhan Mobile Legends Mu Bersama UrLuck Store Specialist Game Mobile Legends No.1 Murah,
                Aman, Terpercaya Dan Legal 100% (Open 24 Jam).
            </p>
            <div class="medsos">
                <div
                    v-for="name in names"
                    :key="name"
                    class="medsos-item"
                >
                    <box-icon
                        type='logo'
                        :name='name'
                        color='#fff'
                    ></box-icon>
                </div>
            </div>
            <p>
                &copy; Copyright {{ year }} <strong>UrLuck</strong>.
                All rights reserverd
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            names: [
                'facebook',
                'instagram',
                'whatsapp'
            ],
            year: ""
        }
    },

    mounted() {
        const y = new Date()
        this.year = y.getUTCFullYear()
    }
}
</script>