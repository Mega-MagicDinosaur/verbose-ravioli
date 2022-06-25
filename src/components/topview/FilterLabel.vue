<template>
    <div class="filter-label-wrapper">
        <button class="delete-button btn" @click="this.box.checked = false">
            <GoogleIcon icon="close"/>
        </button>
        <span class="label-text">{{box.text}}</span>
    </div>
</template>

<script>
import GoogleIcon from '../generics/GoogleIcon.vue';
export default {
    name: 'FilterLabel',
    components: { GoogleIcon },
    props: {
        box: Object,
    },
}
</script>

<style scoped lang="scss" src="../../assets/css/topview/filterlabel_style.scss">
</style>