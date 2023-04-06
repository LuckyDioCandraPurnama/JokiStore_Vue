<template>
    <div @click="toTop()" id="scroll-btn">
        <box-icon name='up-arrow-alt' color='#ffffff' ></box-icon>
    </div>
</template>

<script>
export default {
    methods: {
        toTop:function() {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        }
    }
}
</script>