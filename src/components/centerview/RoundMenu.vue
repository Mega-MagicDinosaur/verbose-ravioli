<template>
  <div class="round-menu-wrapper">
    <div class="round-menu">
      <MenuButton class="menu-button" v-for="item in this.items" :key="item" 
      :style="{ transform: 'rotate('+ turn +'deg)'}" @clicked="clicked" 
      :button="item" :selected="(this.first_button == item && this.state.str == 'filters')? true : false"/>
      <CenterButton class="center-button" />
    </div>
    <!-- v-show and v-if are important -->
    <!-- menu cards uses v-if since otherwise animations on mounted() would not. -->
    <MenuFilters v-show="(this.state.str == 'filters')" class="menu-filters" :filters="this.filters"/>
    <MenuCards v-if="(this.state.str == 'cards')" class="menu-cards" :rings="this.rings_data"/>
    <div class="inner-circle-1"></div>
    <div class="inner-circle-2"></div>
    <div class="inner-circle-3"></div>
  </div>
</template>

<script>
import MenuButton from './MenuButton.vue'
import CenterButton from './CenterButton.vue'
import MenuFilters from './MenuFilters.vue'
import MenuCards from './MenuCards.vue'

export default {
  name: 'RoundMenu',
  components: {
    MenuButton,
    CenterButton,
    MenuFilters,
    MenuCards
  },
  props: {
    buttons_data: Array,
    filters_data: Array,
    rings_data: Array,
    state: Object
  },

  data() { 
    const b = this.buttons_data
    return {
      turn: 45,
      items: b,
      buttons: [b[0],b[1],b[2],b[3]],
  }},
  computed: {
      first_button() { return this.buttons[0] },
      filters() { 
        if (this.state.str != 'filters') { return undefined }
        return this.filters_data[this.first_button.id] 
      },
  },
  methods: {
    clicked(button_id) {
      if (this.state.str != 'cards') { this.state.str = 'filters' }
      else { return }
      let id = this.get_orientation(button_id)
      if (id == 3) { this.turn += 90 } 
      else { this.turn -= 90*id } 
      for (let i=0; i < id; i++) { this.buttons.push(this.buttons.shift()); }
    },
    get_orientation(button_id) {
      for (let i=0; i<this.buttons.length; i++) {
        if (this.buttons[i].id == button_id) { return i }
      } return 0
    },
  },
}
</script>

<style scoped lang="scss" src="../../assets/css/centerview/roundmenu_style.scss">
</style>
