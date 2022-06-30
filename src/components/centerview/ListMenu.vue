<template>
    <div class="table-header">
        <th class="menu-item-wrapper" v-for="(setting, index) in this.menu_settings" :key="setting" >
            <div class="menu-item" :class="(index == this.selected) ? 'selected-item' : ''"
            @click="$emit('clicked_menu', index)"> 
                <span :class="(setting.name != '')? 'item-text' : ''">{{setting.name}}</span>
                <div v-if="setting.sortable[0]" class="sort-buttons">
                    <GoogleIcon class="google-icon up" icon="arrow_back_ios_new" 
                    @click="sort(setting, false)"/>
                    <GoogleIcon class="google-icon down" icon="arrow_back_ios_new" 
                    @click="sort(setting, true)"/>
                </div>
            </div>
            <!-- maybe in add empty attribute to setting -->
        </th>
    </div>
</template>

<script>
import {menu_settings} from '../../assets/js/staticdata.js'

import GoogleIcon from '../generics/GoogleIcon.vue'

export default {
    name: 'ListMenu',
    components: { GoogleIcon },
    data() { return {
        menu_settings: menu_settings
    }},
    props: {
        selected: {
            type: Number,
            default: 0
        },
        companies: Array
    },
    methods: {
        sort(setting, reverse) {
            if (reverse) {  return setting.sortable[1](this.companies).reverse() }
            return setting.sortable[1](this.companies)
        },
    }
}
</script>

<style scoped lang="scss" src="../../assets/css/centerview/listmenu_style.scss">
</style>