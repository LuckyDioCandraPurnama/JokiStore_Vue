<template>
    <div class="card pembayaran">
        <h1>Pilih Metode Pembayaran</h1>
        <hr>
        <div class="form">
            <div
                v-for="(pembayaran, index) in jenisPembayaran"
                :key="pembayaran"
                class="jenis-pembayaran"
            >
                <div
                    @click="showList(index)"
                    class="pb-title"
                >
                    {{ pembayaran.jenis }}
                    <i class='bx bx-chevron-down bx-sm' style='color:#fff' :id="'pt' + index"></i>
                </div>
                
                <div
                    :id="'pb' + index"
                    class="hidden pb-tipe"
                >
                    <div
                        v-for="tipe in pembayaran.tipe"
                        :key="tipe"
                        class="pb-list"
                    >
                        <label
                            class="pb-radio"
                            @click="getPembayaran(tipe.name)"
                        >
                            <input type="radio" name="pembayaran">
                            <div class="pb-radio-item">
                                <div class="flex flex-row">
                                    <div class="pb-item-name">
                                        <h1>{{ tipe.name }}</h1>
                                        <span>Rp{{ tipe.price }}</span>
                                    </div>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapWritableState } from "pinia"
import { useJokiStore } from '../../store/index'

export default {
    data() {
        return {
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
                        { name: "Indomaret", price: "0" },
                        { name: "Alfamaret", price: "0" },
                        { name: "Alfamidi", price: "0" },
                    ],
                },
            ],
            pilihanPembayaran: ''
        };
    },

    methods: {
        ...mapActions(useJokiStore, ["addPembayaran"]),

        showList:function(id) {
            var el = document.getElementById("pb" + id)
            var e = document.getElementById("pt" + id)
            
            this.jenisPembayaran.forEach(function(value, index) {
                if (id != index) {
                    document.getElementById("pb" + index).classList.add("hidden")
                    document.getElementById("pt" + index).classList.remove("rotate-180")
                } else {
                    if (el.classList.contains("hidden")) {
                        el.classList.remove("hidden");
                        el.classList.add("grid");
                        e.classList.add("rotate-180");
                    } else {
                        el.classList.add("hidden");
                        el.classList.remove("grid");
                        e.classList.remove("rotate-180");
                    }
                }
            })
        },

        getPembayaran:function(name) {
            this.pilihanPembayaran = name
            console.log(name);
        },

        pilihPembayaran:function() {
            this.addPembayaran(this.pilihanPembayaran)
        }
    },

    created() {
        setInterval(() => this.pilihPembayaran(), 1000)
    }
};
</script>