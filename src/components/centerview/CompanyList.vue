<template>
    <div class="company-list-wrapper">
        <div class="table">
            <ListMenu class="list-menu" :selected="this.selected_menu_item"
            @clicked="clicked"/>
            <ListItem class="list-item" v-for="(company, index) in this.companies" 
            :key="company" :company="company" :score="index"/>
        </div>
    </div>
</template>

<script>
import ListItem from './ListItem.vue'
import ListMenu from './ListMenu.vue'
import VueTableLite from 'vue3-table-lite'

export default {
    name: 'CompanyList',
    components: {
        ListItem,
        ListMenu,
        VueTableLite
    },
    props: {
        companies: Array
    },
    data() { return {
        selected_menu_item: 0,
    }},
    methods: {
        clicked(index) {
            this.selected_menu_item = index
        }
    }
}
</script>

<style scoped lang="scss" src="../../assets/css/centerview/companylist_style.scss">
</style>