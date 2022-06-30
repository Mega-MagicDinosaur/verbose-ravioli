<template>
  <header>
  </header>

  <main>
    <div class="view-wrapper">
      
      <VerticalNav class="vertical-nav" :icons="nav_icons" :primary_button="1"/>

      <!-- hidden nav menu -->
      <SideMenu :company="this.selected_company" />

      <div class="top-view-wrapper">
        <ViewTitle class="view-title" title="Radar View" subtitle="Move freely to find out" />
        <FiltersEditor class="filters-editor" :filters="this.filters" :buttons="this.buttons" :state="this.state" />
      </div> 
      <div class="center-view-wrapper">
        <RoundMenu :buttons_data="this.buttons" :filters_data="this.filters" :rings_data="this.rings"
        :state="this.state" />
        
        <SubmitButton text="NORDLYS ALGORYTHM" class="nordlys-button" 
        :class="(this.state.str == 'initial')? 'initial-state' : 'changed-state'"
        @click="this.state.str = 'cards'"/>
        
        <!-- later make separate goto list button  -->
        <SubmitButton :text="(this.state.str != 'cards')? 'SEARCH' : 'GO TO LIST' " class="search-button"
        :class="(this.state.str == 'initial')? 'initial-state' : 'changed-state'"/>

      </div>
    </div>
  </main>
</template>

<script>
import store from '../store'

import ViewTitle from '../components/topview/ViewTitle.vue'
import FiltersEditor from '../components/topview/FiltersEditor.vue'
import VerticalNav from '../components/navbar/VerticalNav.vue'
import SideMenu from '../components/navbar/SideMenu.vue'
import RoundMenu from '../components/centerview/RoundMenu.vue'
import SubmitButton from '../components/generics/SubmitButton.vue'

import { buttons } from '../assets/js/staticdata.js'
import { nav_icons } from '../assets/js/staticdata.js'
import { filters } from '../assets/js/dinamicdata.js'
import { rings } from '../assets/js/dinamicdata.js'

export default {
  name: 'RoundMenuApp',
  components: {
    VerticalNav,
    FiltersEditor,
    ViewTitle,
    RoundMenu,
    SubmitButton,
    SideMenu,
  },
  data() { 
    return {
      buttons: buttons,
      filters: filters,
      rings: rings,
      nav_icons: nav_icons,
      
      // states
      // [ initial -> filters -> cards ]
      state: {str: 'initial'}
  }},
  computed: {
    selected_company () { return store.state.selected_company }
  }
}
</script>

<style scoped lang="scss" src="../assets/css/generics/app_style.scss">
</style>
