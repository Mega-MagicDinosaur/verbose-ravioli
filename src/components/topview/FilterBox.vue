<template>
    <div class="filter-box-wrapper">
        <GoogleIcon class="filter-box-icon" :icon="this.active_filter.icon" />
        <FilterLabel class="filter-label"
        v-for="(box) in this.checked_boxes" :key="box" :box="box"/>
    </div>
</template>

<script>
import GoogleIcon from '../generics/GoogleIcon.vue'
import FilterLabel from './FilterLabel.vue'


export default {
    name: "FiltersBox",
    props: {
        active_filter: Object,
    },
    components: { GoogleIcon, FilterLabel },
    computed: {
        checked_boxes() {
            return this.active_filter.boxes.filter(box => box.checked)
        }
    }
}
</script>

<style scoped lang="scss" src="../../assets/css/topview/filterbox_style.scss">
</style>