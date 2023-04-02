<template>
    <div class="card pembayaran">
        <h1>Pilih Metode Pembayaran</h1>
        <hr>
        <div class="form">
            <div
                v-for="(pembayaran, index) in jenisPembayaran"
                :key="pembayaran"
                @click="showList(index)"
                class="jenis-pembayaran"
            >
                <div class="pb-title">
                    {{ pembayaran.jenis }}
                    <box-icon name='chevron-down' color='#fff' :id="'pt' + index"></box-icon>
                </div>
                
                <div :id="'pb' + index" class="hidden pb-list">
                    hah
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
                        { name: "Indomaret", price: "" },
                        { name: "Alfamaret", price: "" },
                        { name: "Alfamidi", price: "" },
                    ],
                },
            ],
        };
    },

    methods: {
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
                        e.classList.add("rotate-180");
                    } else {
                        el.classList.add("hidden");
                        e.classList.remove("rotate-180");
                    }
                }
            })
        }
    }
};
</script>