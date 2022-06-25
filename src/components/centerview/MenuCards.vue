<template>
<div class="menu-cards-wrapper">
  <CardRing v-for="(ring, index) in this.rings" :key="ring" :ring="ring" 
  :class="['size-'+this.rings.length, 'index-'+index]"/>
</div>
</template>

<script>
import CardRing from './CardRing.vue';

export default {
    name: "MenuCards",
    components: { CardRing },
    props: {
        rings: Array
    },
    methods: {
    }
}
</script>

<style scoped lang="scss" src="../../assets/css/centerview/menucards_style.scss">
</style>
