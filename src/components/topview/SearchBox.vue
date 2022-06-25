<!-- icons+text here are going to be static, since they don't matter/change very much -->
<template>
    <div class="search-box-wrapper">
        <IconButton icon="tune" @click="this.state.str = 'filters'"/>
        <div class="active-filters-label">
            <span>Active Filters</span>
            <h3>{{active_filters.length}}/{{this.button_filters.length}}</h3> <!-- Change!! -->
        </div>
        <FiltersBox class="filters-box" :active_filters="this.active_filters" />
        <SubmitButton class="submit-button" text="Save Search" />
        <IconButton class="domain-button" icon="domain"/>
        <div class="found-companies-label"> <!-- Radically change -->
            <span>Found</span> <br>
            <b><span>loading...</span></b>
        </div>
    </div>
</template>

<script>
import GoogleIcon from '../generics/GoogleIcon.vue'
import IconButton from '../generics/IconButton.vue'
import FiltersBox from './FiltersBox.vue'
import SubmitButton from '../generics/SubmitButton.vue'

export default {
    name: 'SearchBox',
    components: {
        GoogleIcon,
        IconButton,
        FiltersBox,
        SubmitButton
    },
    props: {
        button_filters: Array,
        state: Object,
    },
    computed: {
        active_filters() {
            return this.button_filters.filter(filter => filter.getBoxesChecked() > 0)
        }
    }
}
</script>

<style scoped lang="scss" src="../../assets/css/topview/searchbox_style.scss">
</style>