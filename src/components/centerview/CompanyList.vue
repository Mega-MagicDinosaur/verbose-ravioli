<template>
    <div class="company-list-wrapper">
        <table class="table">
            <ListMenu class="list-menu"/>
            
            <ListItem class="list-item" v-for="(company, index) in this.companies" :key="company"
            :company="company" :score="index"/>
        </table>
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
    }
}
</script>

<style lang="scss" src="../../assets/css/centerview/companylist_style.scss">
</style>