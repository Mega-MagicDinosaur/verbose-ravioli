<template>
    <div class="nav-button-wrapper">
        <router-link class="nav-button-link" :to="icon.url">
            <GoogleIcon :icon="icon.icon" class="nav-button-icon"
            :class="(primary_button == 'true')?'primary-button' : ''"/>
            <div class="horizontal-bar" v-if="primary_button == 'true'"></div>
        </router-link>
    </div>
</template>

<script>
import GoogleIcon from '../generics/GoogleIcon.vue'

export default {
    name: 'NavButton',
    components: {
        GoogleIcon
    },
    props: {
        icon: Object,
        primary_button: String,
    },
}

</script>

<style scoped lang="scss" src="../../assets/css/navbar/navbutton_style.scss">
</style>