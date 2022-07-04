<template>
  <div class="side-menu-wrapper">
    <div class="side-menu" :class="this.active ? 'active' : 'inactive'">
      <!-- TITLE -->
      <SideTitle :company="this.company"/>

      <!-- OVERVIEW -->
      <div v-if="this.company != null || this.company != undefined" class="menu-content" >
        <SideOverview :company="this.company"/>
        <SideAddress :company="this.company"/>
      </div>
      
    </div>
  </div>
</template>

<script>

import SideTitle from "./SideTitle.vue";
import SideOverview from "./SideOverview.vue";
import SideAddress from "./SideAddress.vue";

export default {
  name: "SideMenu",
  components: {
    SideOverview,
    SideAddress,
    SideTitle
  },
  props: { company: Object, },
  computed: {
    active() { return this.company !== null; },
  },
  
};
</script>

<style scoped lang="scss" src="../../assets/css/navbar/sidemenu_style.scss"></style>