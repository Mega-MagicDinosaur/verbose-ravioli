<template>
    <div class="filters-editor-wrapper" :class="(this.state.str != 'initial')? 'active' : 'unactive'">
        <ButtonsBox class="buttons-box" :buttons="this.buttons"
        @button_selected="select_button"/>
        <SearchBox class="search-box"
        :button_filters="this.filters[this.selected]" :state="this.state"/>
    </div>
</template>

<script>
import GoogleIcon from '../generics/GoogleIcon.vue'
import FiltersBox from './SearchBox.vue'
import ButtonsBox from './ButtonsBox.vue'
import SearchBox from './SearchBox.vue'

export default {
    name: 'FiltersEditor',
    data() { return {
        selected: 0
    }},
    components: {
        GoogleIcon,
        FiltersBox,
        ButtonsBox,
        SearchBox
    },
    props: {
        filters: Array,
        buttons: Array,
        state: Object,
    },
    methods: {
        select_button(index) { this.selected = index }
    },
}
</script>

<style scoped lang="scss" src="../../assets/css/topview/filterseditor_style.scss">
</style>