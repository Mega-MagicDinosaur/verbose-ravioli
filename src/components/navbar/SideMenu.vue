<template>
  <div class="side-menu-wrapper">
    <div class="side-menu" :class="this.active ? 'active' : 'inactive'">
      <!-- TITLE -->
      <div class="menu-title">
        <GoogleIcon icon="close" class="close-button" @click="clicked" /> <br />

        <div class="top-menu-title">
          <img src="#" class="company-image" />
          <div class="top-buttons">
            <div class="top-button-wrapper" v-for="icon in this.icons[0]" :key="icon" >
              <IconButton class="icon" :icon="icon.icon" />
              <span class="icon-label">{{ icon.label }}</span>
            </div>
          </div>
        </div>

        <div class="bottom-menu-title">
          <div class="bottom-buttons">
            <div
              class="bottom-button-wrapper" v-for="icon in this.icons[1]" :key="icon" >
              <IconButton class="icon" :icon="icon.icon" />
              <span class="icon-label">{{ icon.label }}</span>
              <!-- add % value eventually -->
            </div>
          </div>
        </div>
      </div>

      <!-- OVERVIEW -->
      <div v-if="this.company != null || this.company != undefined" class="menu-content" >
        <div class="overview-label">
          <span class="label-title">Overview</span><br />
          <div class="info-container">
            <div class="info-left">
              <span class="info-title">name</span>
              <span class="info">{{ this.company.name }}</span>
              <span class="info-title">country</span>
              <span class="info">{{ this.company.country }}</span>
              <span class="info-title">website</span>
              <span class="info"><a :href="this.company.website">{{this.company.website}}</a></span>
              <span class="info-title">primary sector</span>
              <span class="info">{{ this.company.primary_sector }}</span>
              <span class="info-title">turnover</span>
              <span class="info">{{ this.company.turnover }}</span>
              <span class="info-title">n employees</span>
              <span class="info">{{ this.company.employees }}</span>
              <span class="info-title">foundation year</span>
              <span class="info">{{ this.company.foundation_year }}</span>
            </div>
            <div class="info-right">
              <span class="info-title">other industries</span>
              <span class="info" v-for="industry in this.company.other_sectors" :key="industry">{{ industry }}, </span>
              <span class="info-title">product & services</span>
              <span class="info" v-for="product in this.company.products" :key="product">{{ product }}</span>
              <span class="info-title">about</span>
              <span class="info">{{ this.company.about }}</span>
            </div>
          </div>
        </div>

        <!-- ADDRESS -->
        <div class="address-label">
          <span class="label-title">Address</span><br />
          <div class="info-container">
            <div class="address">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconButton from "../generics/IconButton.vue";
import GoogleIcon from "../generics/GoogleIcon.vue";
import { side_menu_icons } from "../../assets/js/staticdata.js";
import store from "../../store/index.js";
import * as type from "../../store/mutationTypes/types.js";

export default {
  name: "SideMenu",
  components: {
    IconButton,
    GoogleIcon,
  },
  props: { company: Object, },
  data() {
    return { icons: side_menu_icons, };
  },
  computed: {
    active() { return this.company !== null; },
  },
  methods: {
    clicked() {
      store.dispatch({
        type: type.SetSelectedCompany,
        company: null,
      });
    },
  },
};
</script>

<style scoped lang="scss" src="../../assets/css/navbar/sidemenu_style.scss"></style>