<template>
  <header>
  </header>

  <main>
    <div class="view-wrapper">
      <VerticalNav class="vertical-nav" :icons="nav_icons" :primary_button="1"/>

      <div class="top-view-wrapper">
        <ViewTitle class="view-title" title="RadarView" subtitle="Move freely to find out" />
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

        <!-- hidden nav menu -->
      </div>
    </div>
  </main>
</template>

<script>
import ViewTitle from '../components/topview/ViewTitle.vue'
import FiltersEditor from '../components/topview/FiltersEditor.vue'
import VerticalNav from '../components/navbar/VerticalNav.vue'
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
    SubmitButton
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

<style scoped lang="scss" src="../assets/css/generics/app_style.scss">
</style>
