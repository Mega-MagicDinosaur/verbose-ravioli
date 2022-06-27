<template>
    <div class="table-header">
        <th class="menu-item-wrapper" v-for="(setting, index) in this.menu_settings" :key="setting" >
            <div class="menu-item" :class="(index == this.selected) ? 'selected-item' : ''"
            @click="$emit('clicked', index)"> <span :class="(setting.name != '')? 'item-text' : ''">{{setting.name}}</span> </div>
            <!-- maybe in add empty attribute to setting -->
        </th>
    </div>
</template>

<script>
import {menu_settings} from '../../assets/js/staticdata.js'

export default {
    name: 'ListMenu',
    data() { return {
        menu_settings: menu_settings
    }},
    props: {
        selected: {
            type: Number,
            default: 2
        }
    }
}
</script>

<style scoped lang="scss" src="../../assets/css/centerview/listmenu_style.scss">
</style>