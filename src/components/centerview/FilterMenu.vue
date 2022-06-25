<template>

    <div class="filter-menu-wrapper">
        <!-- menu-icon -->
        <GoogleIcon class="google-icon"  @click="this.$emit('clicked_menu', this.filter)" :icon="filter.icon" />
        <span v-if="this.selected" class="menu-text menu-title">{{this.filter.name}}</span>
        <ul v-if="this.selected" class="dropdown">
            <li v-for="(box, index) in this.filter.boxes" @click="invert(index)" :key="box" class="menu-item">
                <input type="checkbox" class="menu-box" 
                v-model="this.filter.boxes[index].checked"/>
                <span class="menu-text">{{this.filter.boxes[index].text}}</span>
            </li>
        </ul>
    </div>

</template>

<script>
import GoogleIcon from '../generics/GoogleIcon.vue'

export default {
    name: 'FilterMenu',
    components: { GoogleIcon, },
    props: {
        filter: Object,
        selected: Boolean
    },
    methods: {
        invert(i) { this.filter.boxes[i].checked = !this.filter.boxes[i].checked }
    }
}
</script>

<style scoped lang="scss" src="../../assets/css/centerview/filtermenu_style.scss">
</style>