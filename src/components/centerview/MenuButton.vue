<template>
  <a class="button" :class="(this.selected)? 'selected' : ''" @click.prevent="this.$emit('clicked', this.button.id)">
    <GoogleIcon class="google-icon" :icon="this.button.icon" />
  </a>
</template>

<script>
import GoogleIcon from '../generics/GoogleIcon.vue'

export default {
  name: 'MenuButton',
  components: {
    GoogleIcon,
  },
  props: {
    button: Object,
    selected: Boolean,
  },
  
}
</script>

<style scoped lang="scss" src="../../assets/css/centerview/menubutton_style.scss">
</style>