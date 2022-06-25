<template>
    <div class="filters-box-wrapper">
        <FilterBox class="filter-box" v-for="(filter) in this.active_filters" 
        :key="filter" :active_filter="filter"/>
    </div>
</template>

<script>
import FilterBox from './FilterBox.vue';
export default {
    name: 'FiltersBox',
    components: { FilterBox },
    props: {
        active_filters: Array,
    },
}
</script>

<style scoped lang="scss" src="../../assets/css/topview/filtersbox_style.scss">
</style>