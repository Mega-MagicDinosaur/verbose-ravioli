<template>
<div class="menu-cards-wrapper">
  <CardRing v-for="(ring, index) in this.rings" :key="ring" :ring="ring"  :index="(index+1)"/>
  
</div>
</template>

<script>
import CardRing from './CardRing.vue';

export default {
    name: "MenuCards",
    components: { CardRing },
    props: {
        rings: Array,
    },
}
</script>

<style scoped lang="scss" src="../../assets/css/centerview/menucards_style.scss">
</style>
