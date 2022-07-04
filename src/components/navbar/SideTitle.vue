<template>
  <div
    v-if="this.company != null || this.company != undefined"
    class="menu-title"
  >
    <GoogleIcon icon="close" class="close-button" @click="clicked" /> <br />

    <div class="top-menu-title">
      <img :src="this.company.img" class="company-image" />
      <div class="top-buttons">
        <div class="top-button-wrapper" >
          <IconButton class="icon" icon="star" :color="scoped? 'gold' : 'def'"
          @click="scoped? this.remove_scoped() : this.add_scoped()"/>
          <span class="icon-label">On Scope</span>
        </div>

        <div class="top-button-wrapper" >
          <IconButton class="icon" icon="label" />
          <span class="icon-label">Label</span>
        </div>

        <div class="top-button-wrapper" >
          <IconButton class="icon" icon="list" />
          <span class="icon-label">Add to List</span>
        </div>

        <div class="top-button-wrapper" >
          <IconButton class="icon" icon="compare" />
          <span class="icon-label">Compare</span>
        </div>
      </div>
    </div>

    <div class="bottom-menu-title">
      <div class="bottom-buttons">
        <div class="bottom-button-wrapper" v-for="icon in this.icons[0]" :key="icon" >
          <IconButton class="icon" :icon="icon.icon" />
          <span class="icon-label">{{ icon.label }}</span>
          <!-- add % value eventually -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as type from "../../store/mutationTypes/types.js";
import store from "../../store/index.js";

import { side_menu_icons } from "../../assets/js/staticdata.js";
import { company_data } from "@/assets/js/dinamicdata.js";

import IconButton from "../generics/IconButton.vue";
import GoogleIcon from "../generics/GoogleIcon.vue";

export default {
  name: "SideTitle",
  components: {
    IconButton,
    GoogleIcon,
  },
  props: {
    company: Object
  },
  data() {
    return { 
      icons: side_menu_icons,
      company_data: company_data 
  } },
  computed: {
        scoped() { return this.company_data.scoped_companies.includes(this.company) }
    },
  methods: {
    clicked() {
      store.dispatch({
        type: type.SetSelectedCompany,
        company: null,
      });
    },
    remove_scoped() {
      var index = this.company_data.scoped_companies.indexOf(this.company);
        if (index !== -1) { this.company_data.scoped_companies.splice(index, 1); }
      },
      add_scoped() {
        this.company_data.scoped_companies.push(this.company)
      }
  },
};
</script>

<style scoped lang="scss" src="../../assets/css/navbar/sidetitle_style.scss">
</style>