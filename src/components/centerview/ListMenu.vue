<template>
    <tr class="table-header">
        <td class="menu-item" v-for="(setting, index) in this.menu_settings" :key="setting"
        @click="$emit('clicked', index)">
            <span>{{setting.name}}</span>
        </td>
    </tr>
</template>

<script>
import {menu_settings} from '../../assets/js/staticdata.js'

export default {
    name: 'ListMenu',
    data() { return {
        menu_settings: menu_settings
    }}
}
</script>

<style scoped lang="scss" src="../../assets/css/centerview/listmenu_style.scss">
</style>