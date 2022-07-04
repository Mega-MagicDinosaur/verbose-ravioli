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
            <span style="font-size: 18px;">{{found_companies}}</span>
        </div>
    </div>
</template>

<script>
import GoogleIcon from '../generics/GoogleIcon.vue'
import IconButton from '../generics/IconButton.vue'
import FiltersBox from './FiltersBox.vue'
import SubmitButton from '../generics/SubmitButton.vue'

import { rings } from '@/assets/js/dinamicdata' 

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
    data() { return {
        rings: rings
    }},
    computed: {
        active_filters() {
            return this.button_filters.filter(filter => filter.getBoxesChecked() > 0)
        },
        companies() {
            let companies = []
            this.rings.forEach( (ring) => { companies = companies.concat(ring)} )
            return companies
        },
        found_companies() {
            return this.companies.length.toString()
        }
    }
}
</script>

<style scoped lang="scss" src="../../assets/css/topview/searchbox_style.scss">
</style>