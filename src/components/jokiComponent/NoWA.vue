<template>
    <div class="card wa">
        <h1>Nomor WhatsApp</h1>
        <hr>
        <input
            type="tel"
            name="noWA"
            v-model="noWA"
            class="form-input"
            placeholder="No WA/ No HP (628xxx)"
        >
        <button
            @click="order()"
            class="order"
        >
            <i class='bx bx-cart bx-sm' style='color:#ffffff'></i>
            Pesan Sekarang
        </button>
    </div>
</template>

<script>
import { mapActions, mapWritableState } from "pinia"
import { useJokiStore } from '../../store/index'

export default {
    // props: {
    //     biodata: Array,
    //     pembayaran: String
    // },

    data() {
        return {
            noWA: '',
        }
    },

    methods: {
        order:function() {
            console.log(this.noWA);
            console.log(this.biodata);
            console.log(this.pembayaran);
        }
    },

    computed: {
        ...mapWritableState(useJokiStore, [
            'biodata',
            'pembayaran'
        ])
    },

    mounted() {
        
    }
}
</script>