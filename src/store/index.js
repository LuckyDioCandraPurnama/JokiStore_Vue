import { defineStore } from "pinia";

export const useJokiStore = defineStore('joki', {
    state: () => ({
        biodata: [],
        pembayaran: ''
    }),
    actions: {
        async addBiodata(data) {
            this.biodata = data
        },
        
        async addPembayaran(pb) {
            this.pembayaran = pb
        }
    }
})