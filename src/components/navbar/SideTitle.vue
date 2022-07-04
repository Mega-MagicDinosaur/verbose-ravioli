<template>
  <div
    v-if="this.company != null || this.company != undefined"
    class="menu-title"
  >
    <GoogleIcon icon="close" class="close-button" @click="clicked" /> <br />

    <div class="top-menu-title">
      <img :src="this.company.img" class="company-image" />
      <div class="top-buttons">
        <div
          class="top-button-wrapper"
          v-for="icon in this.icons[0]"
          :key="icon"
        >
          <IconButton class="icon" :icon="icon.icon" />
          <span class="icon-label">{{ icon.label }}</span>
        </div>
      </div>
    </div>

    <div class="bottom-menu-title">
      <div class="bottom-buttons">
        <div
          class="bottom-button-wrapper"
          v-for="icon in this.icons[1]"
          :key="icon"
        >
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
    return { icons: side_menu_icons };
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

<style scoped lang="scss" src="../../assets/css/navbar/sidetitle_style.scss">
</style>