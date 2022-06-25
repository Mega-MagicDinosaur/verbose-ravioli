<template>

<div class="menu-filters-wrapper">
  <TransitionGroup name="list">
      <a v-for="(filter, index) in this.filters" :key="filter" :class="'size-'+this.filters.length">
        <FilterMenu class="filter-menu" :filter="filter" :selected="this.menus[index]" 
        @clicked_menu="clicked_menu(filter)" />
      </a>
  </TransitionGroup>
</div>

</template>

<script>
import FilterMenu from './FilterMenu.vue'

export default {
    name: 'MenuFilters',
    components: { FilterMenu },
    props: { 
      // size of filters can be a range from 1 to 8
      filters: {
        type: Array,
        default: []
      },
    },
    data() { 
      const s = []
      this.filters.forEach(filter => { s.push(false) })
        return {
          menus: s
    }},
    computed: {
      selected_menu() {
        for (let i=0; i<this.menus.length; i++) {
          if (this.menus[i]) { return i }
        } return null
      }
    },
    watch: {
      filters: {
        handler() {
          for (let i=0; i<this.menus.length; i++) this.menus[i] = false
    }}},
    methods: {
      clicked_menu(filter) {
        this.menus[this.selected_menu] = false
        for (let i=0; i<this.filters.length; i++) {
          if (this.filters[i] === filter) { this.menus[i] = true }
      }},
    }
}
</script>

<style scoped lang="scss" src="../../assets/css/centerview/menufilters_style.scss">

</style>