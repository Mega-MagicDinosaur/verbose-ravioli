<template>
    <div class="company-list-wrapper">
        <table>
            <ListMenu class="list-menu"/>
            <ListItem class="list-item" v-for="(company) in this.companies" 
            :key="company" :company="company" />
        </table>

        <VueTableLite
        :is-loading="false"
        :columns="[1, 2, 3, 4, 5]"
        :rows="[1, 2, 3, 4, 5]"
        ></VueTableLite>
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

<style scoped lang="scss" src="../../assets/css/centerview/companylist_style.scss">
</style>