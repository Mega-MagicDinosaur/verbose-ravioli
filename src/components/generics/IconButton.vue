<template>
    <div class="icon-button-wrapper">
        <button class="btn btn-primary icon-button" 
        :style="(this.color != 'def')? {'color':this.color} : {'color':'#435176'}">
            <GoogleIcon class="google-icon" :icon="this.icon" />
        </button>
    </div>
</template>

<script>
import GoogleIcon from '../generics/GoogleIcon.vue'

export default {
    name: 'IconButton',
    components: {
        GoogleIcon
    },
    props: {
        icon: String,
        color: {
            tyle: String,
            default: 'def'
        }
    },
}
</script>

<style scoped lang="scss" src="../../assets/css/generics/iconbutton_style.scss">
</style>