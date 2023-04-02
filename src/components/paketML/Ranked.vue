<template>
    <div class="paket">
        <div class="container">
            <SidePanel />
            <div class="right-side">
                <Biodata />
                <Pembayaran />
            </div>
        </div>
    </div>
</template>

<script>
import SidePanel from '../jokiComponent/SidePanel.vue'
import Biodata from '../jokiComponent/Biodata.vue'
import Pembayaran from '../jokiComponent/Pembayaran.vue'

export default {
    components: {
        SidePanel,
        Biodata,
        Pembayaran,
    }
}
</script>