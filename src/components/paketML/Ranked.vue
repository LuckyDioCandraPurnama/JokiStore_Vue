<template>
    <div class="paket">
        <div class="container">
            <SidePanel />
            <div class="right-side">
                <Biodata ref="biodata" />
                <Pembayaran ref="pembayaran" />
                <NoWA :biodata="biodata" :pembayaran="pembayaran" />
            </div>
        </div>
    </div>
</template>

<script>
import SidePanel from '../jokiComponent/SidePanel.vue'
import Biodata from '../jokiComponent/Biodata.vue'
import Pembayaran from '../jokiComponent/Pembayaran.vue'
import NoWA from '../jokiComponent/NoWA.vue'

export default {
    components: {
        SidePanel,
        Biodata,
        Pembayaran,
        NoWA,
    }
}
</script>