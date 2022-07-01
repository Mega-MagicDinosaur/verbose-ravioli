<template>
    <div class="company-list-wrapper">
        <div class="table">
            <ListMenu class="list-menu" :selected="this.selected_menu_item" :companies="this.companies"
            @clicked_menu="clicked_menu"/>
            <ListItem class="list-item" :selected="(selected_list_item == index)? true : false" 
            v-for="(company, index) in this.companies" :key="company" 
            :company="company" :score="index" @click="clicked_item(index)"/>
        </div>
    </div>
</template>

<script>
import ListItem from './ListItem.vue'
import ListMenu from './ListMenu.vue'

export default {
    name: 'CompanyList',
    components: {
        ListItem,
        ListMenu,
    },
    props: {
        companies: Array
    },
    data() { 
        return {
        selected_menu_item: 0,
        selected_list_item: 0,
    }},
    methods: {
        clicked_menu(index) { this.selected_menu_item = index },
        clicked_item(index) { this.selected_list_item = index }
    }
}
</script>

<style scoped lang="scss" src="../../assets/css/centerview/companylist_style.scss">
</style>