<template>
    <header></header>
    <main>
        <div class="view-wrapper">
            <VerticalNav class="vertical-nav" :icons="nav_icons" :primary_button="2"/>

            <div class="top-view-wrapper">
                <ViewTitle class="view-title" title="Company List" subtitle="All results in one place" />
                <FiltersEditor class="filters-editor" :filters="this.filters" :buttons="this.buttons" :state="this.state" />
            </div> 
            <div class="center-view-wrapper">
                <CompanyList :companies="this.rings"/>
            </div>
        </div>
    </main>
</template>

<script>
import ViewTitle from '../components/topview/ViewTitle.vue'
import FiltersEditor from '../components/topview/FiltersEditor.vue'
import VerticalNav from '../components/navbar/VerticalNav.vue'
import SubmitButton from '../components/generics/SubmitButton.vue'
import CompanyList from '../components/centerview/CompanyList.vue'

import { buttons } from '../assets/js/staticdata.js'
import { nav_icons } from '../assets/js/staticdata.js'
import { filters } from '../assets/js/dinamicdata.js'
import { rings } from '../assets/js/dinamicdata.js'

export default {
    name: 'CompanyListApp',
        components: {
        VerticalNav,
        FiltersEditor,
        ViewTitle,
        SubmitButton,
        CompanyList
    },
    data() { return {
      buttons: buttons,
      filters: filters,
      rings: rings,
      nav_icons: nav_icons,
      
      // states
      // [ initial -> filters -> cards ]
      state: {str: 'initial'}
  }},
}
</script>

<style lang="scss">
@import "../assets/css/generics/app_style.scss";

.center-view-wrapper {
    overflow-y: scroll;
}
</style>